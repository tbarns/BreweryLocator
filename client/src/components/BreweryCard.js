import React, { useCallback } from 'react';
import './BreweryCard.css';

function BreweryCard({ brewery }) {
    const handleCopyClick = useCallback(() => {
        const address = `${brewery.street}\n${brewery.city}, ${brewery.state_province}, ${brewery.postal_code}\n${brewery.country}`;
        navigator.clipboard.writeText(address);
        alert("Address copied to clipboard!"); // Or you can use a tooltip or a small visual hint
    }, [brewery]);

    if (!brewery) return null;

    return (
        <div className="card brewery-card p-4">
            <header className="card-header">
                <strong className="card-header-title">
                    {brewery.name}
                </strong>
            </header>
            <div className="content">
                <div className="info-group">
                    <p className="cardText">Type:</p>
                    <p>{brewery.brewery_type.charAt(0).toUpperCase() + brewery.brewery_type.slice(1)}</p>
                </div>
                <div className="info-group">
                    <p className="cardText">Address:</p>
                    <div>
                        {brewery.street}<br />
                        {brewery.city}, {brewery.state_province}, {brewery.postal_code}<br />
                        {brewery.country}
                        <button onClick={handleCopyClick} className="copy-btn" title="Copy Address to Clipboard">
                            📋
                        </button>
                    </div>
                </div>
                <div className="info-group ">
                    <p className="cardText">Phone:</p>
                    {brewery.phone && <a href={`tel:${brewery.phone}`} className="phone-link">{brewery.phone}</a>}
                </div>
                {brewery.website_url &&
                    <a href={brewery.website_url} className="brewery-link" target="_blank" rel="noopener noreferrer">Visit Website</a>}
            </div>
        </div>
    );
}

export default BreweryCard;
