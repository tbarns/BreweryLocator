import React, { useState } from 'react';
import './App.css';
import BreweryMap from './components/BreweryMap';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BreweryCard from './components/BreweryCard';
import TopBrews from './components/TopBrews';

function App() {
  
  const [breweries, setBreweries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const getCity = () => {
    const city = searchValue;
    const requestUrl = `https://api.openbrewerydb.org/breweries?by_city=${city}`;
    
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        setBreweries(data);
        // You can handle the Google Map markers here or pass data down to the BreweryMap component
    });
  };

  const handleSearch = () => {
    getCity();
  };

  return (
    <div className="App">
    <Header />
    
  
    <div className="columns">
      <div className="column is-two-thirds">
        <SearchBar onChange={handleSearchChange} value={searchValue} onSearch={handleSearch} />
      </div>
      <div className="column is-one-third">
        <TopBrews />
      </div>
    </div>

   
    <div className="columns is-multiline is-gapless">
      <div className="column is-two-thirds">
        <BreweryMap breweries={breweries}/>
      </div>
      <div className="column is-one-third">
        {breweries.map(brewery => 
            <BreweryCard key={brewery.id} brewery={brewery}/>
        )}
      </div>
    </div>
  </div>
);
}

export default App;
