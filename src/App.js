import React, { useEffect } from 'react';
import './App.css';
import "./index.css";
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <ThemeProvider>
            <div className="App min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Education />
                    <Contact />
                </main>
                <Footer />
                <Toaster />
            </div>
        </ThemeProvider>
    );
}

export default App;
