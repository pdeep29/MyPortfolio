import React, { useState } from 'react';
import { Mail, Phone, MapPin, Camera, Send } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const showForm = false;
    const handleSubmit = (e) => {
        e.preventDefault();
        toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const contactInfo = [
        { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Location', value: personalInfo.location, href: null },
        {
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
            >
                <path d="M20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H9.3V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>, label: 'LinkedIn', value: 'Connect with me', href: personalInfo.linkedin
        },
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
                        Have a project in mind or want to discuss opportunities? Feel free to reach out!
                    </p>
                </div>

                <div className={showForm
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                    : "flex justify-center"
                }>
                    {/* Contact Info */}
                    <div className={showForm
                        ? "space-y-3 sm:space-y-4"
                        : "space-y-3 sm:space-y-4 w-full max-w-xl text-center"
                    }>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Contact Information</h3>
                        {contactInfo.map((item, index) => (
                            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                                <CardContent className="pt-5 sm:pt-5 p-4 sm:p-5">
                                    <div className={`flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 min-h-[80px]`}>

                                        {/* ICON */}
                                        <div className="p-2.5 sm:p-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 shrink-0">
                                            {item.icon}
                                        </div>

                                        {/* TEXT */}
                                        <div className="flex-1 min-w-0 text-center sm:text-left">
                                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-0.5">
                                                {item.label}
                                            </p>

                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="text-sm sm:text-base text-gray-900 dark:text-white font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>

                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Contact Form */}
                    {showForm && (<Card className="border-0 shadow-xl">
                        <CardHeader className="pb-3 sm:pb-4">
                            <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full h-10 sm:h-11" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="w-full h-10 sm:h-11" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                                    <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Your message..." rows={5} className="w-full" />
                                </div>
                                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-10 sm:h-11 text-sm sm:text-base touch-manipulation">
                                    <Send className="w-4 h-4 mr-2" /> Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>)}
                </div>
            </div>
        </section>
    );
};

export default Contact;
