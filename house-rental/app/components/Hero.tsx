'use client';

import { useState } from 'react';

export default function Hero() {
    const [searchParams, setSearchParams] = useState({
        location: '',
        propertyType: 'Property Type',
        priceRange: 'Price Range',
        bedrooms: 'Bedrooms'
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Search parameters:', searchParams);
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Find Your <span className="accent">Perfect</span> Home</h1>
                <p>The easiest way to find rental properties and connect with property owners in real time.</p>
                
                <div className="search-box">
                    <form onSubmit={handleSearch}>
                        <div className="search-input">
                            <i className="fas fa-search"></i>
                            <input 
                                type="text" 
                                placeholder="Enter location, property type, or keyword"
                                value={searchParams.location}
                                onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                            />
                        </div>
                        
                        <div className="filters">
                            <select 
                                value={searchParams.propertyType}
                                onChange={(e) => setSearchParams({...searchParams, propertyType: e.target.value})}
                            >
                                <option>Property Type</option>
                                <option>Apartment</option>
                                <option>House</option>
                                <option>Condo</option>
                                <option>Townhouse</option>
                            </select>
                            
                            <select 
                                value={searchParams.priceRange}
                                onChange={(e) => setSearchParams({...searchParams, priceRange: e.target.value})}
                            >
                                <option>Price Range</option>
                                <option>$500-$1000</option>
                                <option>$1000-$1500</option>
                                <option>$1500-$2000</option>
                                <option>$2000+</option>
                            </select>
                            
                            <select 
                                value={searchParams.bedrooms}
                                onChange={(e) => setSearchParams({...searchParams, bedrooms: e.target.value})}
                            >
                                <option>Bedrooms</option>
                                <option>Studio</option>
                                <option>1 Bedroom</option>
                                <option>2 Bedrooms</option>
                                <option>3+ Bedrooms</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn btn-primary search-btn">
                            <i className="fas fa-search"></i> Search Now
                        </button>
                    </form>
                </div>
                
                <div className="quick-stats">
                    <div className="stat">
                        <span className="stat-number">10,000+</span>
                        <span className="stat-label">Properties</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">5,000+</span>
                        <span className="stat-label">Happy Tenants</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">2,000+</span>
                        <span className="stat-label">Property Owners</span>
                    </div>
                </div>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
} 