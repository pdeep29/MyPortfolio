import React from 'react';
import { education } from '../data/mock';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Education = () => (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                {education.map((edu) => (
                    <Card key={edu.id} className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        <CardContent className="p-5 sm:p-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2.5 sm:p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 shrink-0">
                                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2 text-sm sm:text-base">
                                        {edu.institution}
                                    </p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" /> {edu.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Award className="w-3.5 h-3.5" /> CGPA: {edu.cgpa}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
