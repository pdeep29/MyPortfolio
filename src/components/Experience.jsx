import React from 'react';
import { experience } from '../data/mock';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-600 to-cyan-600"></div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-600 border-4 border-white dark:border-gray-900 z-10"></div>

                                {/* Content */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                    }`}>
                                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="flex items-center text-teal-600 dark:text-teal-400 font-semibold mb-2">
                                                        <Briefcase className="w-4 h-4 mr-2" />
                                                        {exp.company}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {exp.duration}
                                                </div>
                                                <span className="hidden sm:inline">•</span>
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-1" />
                                                    {exp.location}
                                                </div>
                                            </div>

                                            <ul className="space-y-2">
                                                {exp.responsibilities.map((responsibility, idx) => (
                                                    <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                                                        <span className="text-teal-600 dark:text-teal-400 mr-2 mt-1.5">▸</span>
                                                        <span>{responsibility}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Experience;
