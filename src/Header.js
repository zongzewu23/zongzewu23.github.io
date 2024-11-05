import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-500 to-indigo-300 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-extrabold tracking-tight">Zongze Wu</h1>
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="text-lg font-medium hover:text-indigo-200 transition duration-200">Home</a>
                    <a href="#about" className="text-lg font-medium hover:text-indigo-200 transition duration-200">About</a>
                    <a href="#projects" className="text-lg font-medium hover:text-indigo-200 transition duration-200">Projects</a>
                    <a href="#contact" className="text-lg font-medium hover:text-indigo-200 transition duration-200">Contact</a>
                </nav>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition duration-300">
                    Get Started
                </button>
            </div>
        </header>
    );
}

export default Header;
