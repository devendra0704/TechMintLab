// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "/assets/Images/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white ">
            <div className="container mx-auto px-6 xl:px-28">
                <nav className="flex items-center justify-between py-2">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-14 w-24"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex  space-x-6 xl:space-x-12 font-medium text-gray-700">
                        <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
                        <li><a href="#services" className="hover:text-red-500 transition">Services</a></li>
                        <li><a href="#about" className="hover:text-red-500 font-semibold">About</a></li>
                        <li><a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a></li>
                        <li><a href="#video" className="hover:text-red-500 transition">Videos</a></li>
                        <li><a href="#contact" className="hover:text-red-500 transition">Contact Us</a></li>
                        <li className="px-8">
                            <a
                                href="#contact"
                                className="bg-red-400 text-white px-1 xl:px-6 py-2.5 rounded-3xl hover:bg-blue-600 transition lg:inline hidden"
                            >
                                Contact Us Now
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 text-2xl focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </nav>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
                        <ul className="flex flex-col space-y-4 font-medium text-gray-700 p-4">
                            <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
                            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                            <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
                            <li><a href="#video" onClick={() => setMenuOpen(false)}>Videos</a></li>
                            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
                            <li>
                                <a
                                    href="#contact"
                                    className="bg-red-400 text-white px-6 py-2 rounded-3xl hover:bg-blue-600 transition inline-block"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact Us Now
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
