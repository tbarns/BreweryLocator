import React, { useState } from 'react';
import BreweryCard from './BreweryCard';
import './BreweryCard.css';

function BreweryList({ breweries }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = breweries.slice(firstItemIndex, lastItemIndex);

    const totalPages = Math.ceil(breweries.length / itemsPerPage);

    return (
        <div>
            {currentItems.map(brewery => (
                <BreweryCard key={brewery.id} brewery={brewery} />
            ))}
            {/* Conditional rendering for pagination controls */}
            {breweries.length > 0 && (
                <div className="pagination-controls">
                    <button 
                        disabled={currentPage === 1} 
                        onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button 
                        disabled={currentPage === totalPages} 
                        onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default BreweryList;
