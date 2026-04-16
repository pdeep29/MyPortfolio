import React, { useEffect, useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import profile from '../assets/profile.JPG';
const Hero = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);
    const scrollTo = (id) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="max-w-5xl mx-auto w-full">
                <div className={`flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                    {/* LEFT SIDE */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">

                        <div className="space-y-3">
                            <p className="text-teal-600 dark:text-teal-400 font-medium text-base sm:text-lg tracking-wide">
                                Hello, I'm
                            </p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                                {personalInfo.name}
                            </h1>

                            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                                {personalInfo.title}
                            </h2>
                        </div>

                        <div>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 font-semibold text-sm">
                                {personalInfo.experience} of Experience
                            </span>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Crafting high-performance, cross-platform mobile applications for iOS and Android.
                            Specialized in React Native with Expo, delivering scalable and user-focused solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4">
                            <Button
                                onClick={() => scrollTo('#contact')}
                                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-5 rounded-xl shadow-lg hover:scale-105 transition-all"
                            >
                                <Mail className="w-4 h-4 mr-2" /> Get In Touch
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => scrollTo('#projects')}
                                className="w-full sm:w-auto border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-5 rounded-xl transition-all hover:scale-105"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" /> View Projects
                            </Button>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 text-gray-600 hover:text-teal-600 transition-all hover:scale-110"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.3V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                                </svg>
                            </a>

                            <a href={`mailto:${personalInfo.email}`}
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 text-gray-600 hover:text-teal-600 transition-all hover:scale-110">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">

                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-3xl opacity-30 scale-125"></div>

                            {/* Image */}

                            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl relative transition-all duration-500 hover:scale-105">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
