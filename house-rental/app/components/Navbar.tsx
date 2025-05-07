'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <h1>Home<span>Haven</span></h1>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="/" className="active">Home</Link>
                    <Link href="/listings">Listings</Link>
                    <Link href="/how-it-works">How It Works</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className={`auth-buttons ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="/signin" className="btn btn-outline">Sign In</Link>
                    <Link href="/signup" className="btn btn-primary">Sign Up</Link>
                </div>
                <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
        </header>
    );
} 