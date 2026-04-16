import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8"> */}
                {/* About */}
                {/* <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            React Native Mobile App Developer specializing in cross-platform applications with {personalInfo.experience} of experience.
                        </p>
                    </div> */}

                {/* Quick Links */}
                {/* <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2">
                            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                                        className="text-gray-400 hover:text-teal-400 transition-colors text-sm text-left touch-manipulation">
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                {/* Connect */}
                {/* <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect</h3>
                        <div className="flex gap-3 mb-3">
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 rounded-full bg-gray-800 hover:bg-teal-600 transition-all hover:scale-110 touch-manipulation"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                >
                                    <path d="M20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.3V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                                </svg>
                            </a>
                            <a href={`mailto:${personalInfo.email}`}
                                className="p-2.5 sm:p-3 rounded-full bg-gray-800 hover:bg-teal-600 transition-all hover:scale-110 touch-manipulation" aria-label="Email">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm break-all">{personalInfo.email}</p>
                    </div> */}
                {/* </div> */}

                <div className="text-center">
                    <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center flex-wrap gap-1">
                        © {currentYear} {personalInfo.name}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
