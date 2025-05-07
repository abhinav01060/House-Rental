'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

interface Property {
    id: number;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    type: string;
}

export default function Listings() {
    const [filters, setFilters] = useState({
        propertyType: 'all',
        priceRange: 'all',
        bedrooms: 'all',
        sortBy: 'newest'
    });

    // Mock data - In a real app, this would come from an API
    const properties: Property[] = [
        {
            id: 1,
            title: "Modern Downtown Apartment",
            location: "New York, NY",
            price: 2500,
            bedrooms: 2,
            bathrooms: 2,
            area: 1200,
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            type: "apartment"
        },
        {
            id: 2,
            title: "Spacious Family Home",
            location: "Los Angeles, CA",
            price: 3500,
            bedrooms: 4,
            bathrooms: 3,
            area: 2500,
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
            type: "house"
        },
        // Add more mock properties here
    ];

    return (
        <main>
            <Navbar />
            <div className="container py-12">
                <h1 className="text-4xl font-bold mb-8">Available Properties</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-4">Filters</h2>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Property Type</label>
                                    <select 
                                        className="w-full p-2 border rounded-lg"
                                        value={filters.propertyType}
                                        onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                                    >
                                        <option value="all">All Types</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="house">House</option>
                                        <option value="condo">Condo</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Price Range</label>
                                    <select 
                                        className="w-full p-2 border rounded-lg"
                                        value={filters.priceRange}
                                        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                                    >
                                        <option value="all">Any Price</option>
                                        <option value="0-1000">$0 - $1,000</option>
                                        <option value="1000-2000">$1,000 - $2,000</option>
                                        <option value="2000-3000">$2,000 - $3,000</option>
                                        <option value="3000+">$3,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Bedrooms</label>
                                    <select 
                                        className="w-full p-2 border rounded-lg"
                                        value={filters.bedrooms}
                                        onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                                    >
                                        <option value="all">Any</option>
                                        <option value="1">1+ Bedroom</option>
                                        <option value="2">2+ Bedrooms</option>
                                        <option value="3">3+ Bedrooms</option>
                                        <option value="4">4+ Bedrooms</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Sort By</label>
                                    <select 
                                        className="w-full p-2 border rounded-lg"
                                        value={filters.sortBy}
                                        onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property Listings Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {properties.map((property) => (
                                <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="relative h-48">
                                        <img 
                                            src={property.image} 
                                            alt={property.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                                        <p className="text-gray-600 mb-4">{property.location}</p>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-2xl font-bold text-primary">${property.price}/mo</span>
                                            <span className="text-sm text-gray-500">{property.type}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>{property.bedrooms} beds</span>
                                            <span>{property.bathrooms} baths</span>
                                            <span>{property.area} sqft</span>
                                        </div>
                                        <button className="w-full mt-4 btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 