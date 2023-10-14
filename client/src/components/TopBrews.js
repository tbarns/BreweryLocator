import React, { useState, useEffect } from 'react';
import './TopBrews.css';

function TopBrews() {
    const [beerName, setBeerName] = useState('');
    const [beerNotes, setBeerNotes] = useState('');
    const [ranking, setRanking] = useState(0);
    const [topBrewsList, setTopBrewsList] = useState([]);

    useEffect(() => {
        const savedBrews = localStorage.getItem('topBrews');
        if (savedBrews) {
            setTopBrewsList(JSON.parse(savedBrews));
        }
    }, []);

    const handleStarClick = (rank) => {
        setRanking(rank);
    };

    const handleAddBrew = () => {
        const newBrew = { name: beerName, notes: beerNotes, rank: ranking };
        const updatedBrews = [...topBrewsList, newBrew];
        setTopBrewsList(updatedBrews);
        localStorage.setItem('topBrews', JSON.stringify(updatedBrews));
        setBeerName('');
        setBeerNotes('');
        setRanking(0);
    };

    const handleDeleteBrew = (indexToDelete) => {
        const updatedBrews = topBrewsList.filter((_, index) => index !== indexToDelete);
        setTopBrewsList(updatedBrews);
        localStorage.setItem('topBrews', JSON.stringify(updatedBrews));
    };

    return (
        <div className="top-brews-section">
            <h3>Your Top Brews</h3>
            <div className="input-fields">
                <input placeholder="Beer Name" value={beerName} onChange={(e) => setBeerName(e.target.value)} />
                <input placeholder="Notes" value={beerNotes} onChange={(e) => setBeerNotes(e.target.value)} />
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                            key={star}
                            className={star <= ranking ? 'star filled' : 'star'} 
                            onClick={() => handleStarClick(star)}
                        >★</span>
                    ))}
                </div>
                <button onClick={handleAddBrew}>Add Brew</button>
            </div>
            <ul>
                {topBrewsList.map((brew, index) => (
                    <li key={index}>
                        <button className="delete-btn" onClick={() => handleDeleteBrew(index)}>X</button>
                        <strong>{brew.name}</strong>:
                        {[...Array(brew.rank)].map((_, i) => (
                            <span key={i} className="star filled">★</span>
                        ))}
                        {brew.notes}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopBrews;