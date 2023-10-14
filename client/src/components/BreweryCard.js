import React from 'react';
import './BreweryCard.css';

function BreweryCard({ brewery }) {
    if (!brewery) return null; 
    return (
        <div className="card brewery-card">
            <header className="card-header">
                <p className="card-header-title">
                    {brewery.name}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <strong>Type:</strong> {brewery.brewery_type}<br />
                    <strong>Address:</strong>
                    <div>
                        {brewery.street}<br />
                        {brewery.city}, {brewery.state_province}, {brewery.postal_code}<br />
                        {brewery.country}
                    </div>
                    <strong>Phone:</strong> {brewery.phone}<br />
                    {brewery.website_url && 
                        <a href={brewery.website_url} className="brewery-link" target="_blank" rel="noopener noreferrer">Visit Website</a>}
                </div>
            </div>
        </div>
    );
}

export default BreweryCard;
