import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { personalInfo } from '../data/mock';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) setIsMobileMenuOpen(false); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            const offset = 72;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                        {/* Logo */}
                        <a href="#home" onClick={(e) => scrollToSection(e, '#home')}
                            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform touch-manipulation shrink-0">
                            {personalInfo.name}
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} onClick={(e) => scrollToSection(e, item.href)}
                                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-2 py-1 rounded-md transition-colors">
                                    {item.name}
                                </a>
                            ))}
                            <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ml-2" aria-label="Toggle theme">
                                {theme === 'light' ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                            </button>
                        </nav>

                        {/* Mobile controls */}
                        <div className="flex md:hidden items-center gap-1">
                            <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all touch-manipulation" aria-label="Toggle theme">
                                {theme === 'light' ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                            </button>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all touch-manipulation" aria-label="Toggle menu">
                                {isMobileMenuOpen ? <X className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav Dropdown */}
                    {isMobileMenuOpen && (
                        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 py-3">
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} onClick={(e) => scrollToSection(e, item.href)}
                                    className="flex items-center px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all touch-manipulation">
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    )}
                </div>
            </header>

            {/* Mobile menu backdrop */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </>
    );
};

export default Header;
