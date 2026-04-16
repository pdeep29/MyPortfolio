import React from 'react';
import { skills } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
    const categories = [...new Set(skills.technical.map((s) => s.category))];

    return (
        <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {categories.map((category, index) => {
                        const categorySkills = skills.technical.filter((s) => s.category === category);
                        return (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {categorySkills.map((skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="secondary"
                                                className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-all cursor-default"
                                            >
                                                {skill.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
