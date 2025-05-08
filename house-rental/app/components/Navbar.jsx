'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll events for sticky header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
            <nav className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <Link href="/" className="flex items-center">
                            <h1 className="text-2xl font-extrabold">
                                Home<span className="text-[var(--primary-color)]">Haven</span>
                            </h1>
                        </Link>
                    </div>
                    
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="nav-links flex space-x-6">
                            <Link href="/" className="text-gray-900 hover:text-[var(--primary-color)] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-color)] after:transition-all hover:after:w-full">Home</Link>
                            <Link href="/listings" className="text-gray-900 hover:text-[var(--primary-color)] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-color)] after:transition-all hover:after:w-full">Listings</Link>
                            <Link href="/how-it-works" className="text-gray-900 hover:text-[var(--primary-color)] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-color)] after:transition-all hover:after:w-full">How It Works</Link>
                            <Link href="/about" className="text-gray-900 hover:text-[var(--primary-color)] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-color)] after:transition-all hover:after:w-full">About Us</Link>
                            <Link href="/contact" className="text-gray-900 hover:text-[var(--primary-color)] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--primary-color)] after:transition-all hover:after:w-full">Contact</Link>
                        </div>
                        
                        <div className="auth-buttons flex space-x-4">
                            <Link href="/auth/signin" className="btn btn-outline py-2 px-4 text-sm">Sign In</Link>
                            <Link href="/auth/signup" className="btn btn-primary py-2 px-4 text-sm">Sign Up</Link>
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            className="mobile-menu-btn focus:outline-none" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'}`}></span>
                                <span className={`absolute h-0.5 w-6 bg-gray-900 top-3 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
                
                {/* Mobile menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col space-y-3 py-4">
                        <Link href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg">Home</Link>
                        <Link href="/listings" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg">Listings</Link>
                        <Link href="/how-it-works" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg">How It Works</Link>
                        <Link href="/about" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg">About Us</Link>
                        <Link href="/contact" className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg">Contact</Link>
                    </div>
                    
                    <div className="flex flex-col space-y-3 py-4 border-t border-gray-200">
                        <Link href="/auth/signin" className="block px-4 py-2 text-center text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg">Sign In</Link>
                        <Link href="/auth/signup" className="block px-4 py-2 text-center text-white bg-[var(--primary-color)] rounded-lg">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
} 