import React, { useState } from 'react';
import { featuredProjects, otherProjects } from '../data/mock';
import { ExternalLink, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ImageCarousel = ({ screenshots, name }) => {
    const [idx, setIdx] = useState(0);
    const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + screenshots.length) % screenshots.length); };
    const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % screenshots.length); };

    return (
        <div className="relative h-44 sm:h-56 md:h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <img
                src={screenshots[idx]}
                alt={`${name} screenshot ${idx + 1}`}
                className="w-full h-full object-contain transition-all duration-300"
            />
            {screenshots.length > 1 && (
                <>
                    <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all touch-manipulation">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all touch-manipulation">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {screenshots.map((_, i) => (
                            <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                                className={`rounded-full transition-all touch-manipulation ${i === idx ? 'w-5 h-2 bg-teal-500' : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'}`}
                                aria-label={`Screenshot ${i + 1}`} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const ProjectCard = ({ project, isFeatured = false }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all h-full flex flex-col overflow-hidden">
        {isFeatured && project.screenshots && (
            <ImageCarousel screenshots={project.screenshots} name={project.name} />
        )}

        <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white flex items-start justify-between gap-2">
                <span className="leading-snug">{project.name}</span>
                {isFeatured && (
                    <Badge className="bg-teal-600 text-white shrink-0 text-xs">
                        <Smartphone className="w-3 h-3 mr-1" /> {project.downloads}
                    </Badge>
                )}
            </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pt-0">
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
            </p>

            {isFeatured && project.features && (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="link" className="text-teal-600 dark:text-teal-400 p-0 mb-3 justify-start h-auto text-sm font-medium touch-manipulation">
                            View Features →
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg mx-4 sm:mx-auto">
                        <DialogHeader>
                            <DialogTitle className="text-base sm:text-lg">{project.name} — Features</DialogTitle>
                        </DialogHeader>
                        <ul className="space-y-2 mt-3">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                    <span className="text-teal-600 dark:text-teal-400 mr-2 mt-0.5 shrink-0">✓</span>
                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </DialogContent>
                </Dialog>
            )}

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">{tech}</Badge>
                ))}
            </div>

            {isFeatured && project.playStoreLink && (
                <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm touch-manipulation">
                        <ExternalLink className="w-4 h-4 mr-2" /> View on Play Store
                    </Button>
                </a>
            )}
        </CardContent>
    </Card>
);

const Projects = () => (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                    Showcase of mobile applications built with React Native and Expo
                </p>
            </div>

            <Tabs defaultValue="featured" className="w-full">

                <div className="w-full flex justify-center mb-8 sm:mb-12">
                    <TabsList className="flex w-full max-w-xs sm:max-w-md mx-auto mb-8 sm:mb-12">
                        <TabsTrigger value="featured" className="flex-1 text-xs sm:text-sm">Featured Apps</TabsTrigger>
                        <TabsTrigger value="other" className="flex-1 text-xs sm:text-sm">Other Projects</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="featured">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                        {featuredProjects.map((p) => <ProjectCard key={p.id} project={p} isFeatured />)}
                    </div>
                </TabsContent>

                <TabsContent value="other">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {otherProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
);

export default Projects;
