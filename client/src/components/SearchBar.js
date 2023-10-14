import React from 'react';
import './SearchBar.css';


function SearchBar(props) {
    return (
        <nav className='m-4' id="searchBar">
            <div className="field has-addons">
                <div className="control">
                    <input id="search-form" className="input ml-4 is-medium" type="text" placeholder="TYPE HERE" onChange={props.onChange} value={props.value} />
                </div>
                <div className="control ">
                    <button className="button is-medium" id="beer-me-bro" onClick={props.onSearch}>BEER ME BRO</button>
                </div>
            </div>
        </nav>
    );
}

export default SearchBar;
