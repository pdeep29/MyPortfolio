import React from 'react';
import { MapPin, Briefcase, Code2 } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Card, CardContent } from './ui/card';

const About = () => {
    const highlights = [
        { icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Experience', value: personalInfo.experience },
        { icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Specialization', value: 'React Native & Expo' },
        { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Location', value: personalInfo.location },
    ];

    return (
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {highlights.map((item, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                            <CardContent className="p-5 sm:p-6 text-center">
                                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-3 sm:mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{item.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="border-0 shadow-xl">
                    <CardContent className="p-5 sm:p-8">
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {personalInfo.summary}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default About;
