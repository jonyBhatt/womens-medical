import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Calendar, Search, Shield, UserCheck, Clock, Award, Activity } from 'lucide-react';

export const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                            <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                                #1 Healthcare Provider in Bangladesh
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span className="block">Your Health,</span>
                                <span className="block text-indigo-600">Our Priority.</span>
                            </h1>
                            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                SWMC connects you with the best specialist doctors in Bangladesh.
                                Experience premium healthcare with hassle-free appointment booking.
                            </p>
                            <div className="mt-8 sm:mt-12">
                                <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                                    <Link to="/doctors">
                                        <Button size="lg" className="w-full sm:w-auto">Find a Doctor</Button>
                                    </Link>
                                    <Link to="/services">
                                        <Button variant="outline" size="lg" className="w-full sm:w-auto">Our Services</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <img
                                    className="w-full rounded-2xl"
                                    src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800&h=1000"
                                    alt="Doctor in details"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <UserCheck className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-slate-900">50k+</p>
                                            <p className="text-xs text-slate-500">Happy Patients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-indigo-900 py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <p className="text-4xl font-extrabold text-white">100+</p>
                            <p className="mt-1 text-base font-medium text-indigo-200">Specialist Doctors</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold text-white">24/7</p>
                            <p className="mt-1 text-base font-medium text-indigo-200">Emergency Support</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold text-white">15k+</p>
                            <p className="mt-1 text-base font-medium text-indigo-200">Online Consultations</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-extrabold text-white">5</p>
                            <p className="mt-1 text-base font-medium text-indigo-200">Cities Covered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Easy Steps to Better Health</h2>
                        <p className="mt-4 text-lg text-slate-600">Get quality healthcare assistance in just 3 simple steps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center hover:shadow-md transition-shadow border-0 shadow-sm bg-white">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Find a Doctor</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Search by specialization, city, or doctor's name to find the right expert for your needs.
                            </p>
                        </Card>
                        <Card className="p-8 text-center hover:shadow-md transition-shadow border-0 shadow-sm bg-white">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Book Appointment</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Select a convenient time slot and book your appointment instantly with our seamless system.
                            </p>
                        </Card>
                        <Card className="p-8 text-center hover:shadow-md transition-shadow border-0 shadow-sm bg-white">
                            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal-600">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Get Solution</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Visit the doctor or consult online to receive expert advice and prescription.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Our Medical Services</h2>
                        <p className="mt-2 text-slate-500">Comprehensive care for you and your family</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Cardiology", desc: "Expert heart care", icon: Activity, bg: "bg-red-50", color: "text-red-500" },
                            { title: "Pediatrics", desc: "Care for children", icon: UserCheck, bg: "bg-orange-50", color: "text-orange-500" },
                            { title: "Gynecology", desc: "Women's health", icon: Heart, bg: "bg-pink-50", color: "text-pink-500" }, // Reused Heart temporarily or change to something else if needed
                            { title: "Dentistry", desc: "Dental hygiene", icon: Award, bg: "bg-blue-50", color: "text-blue-500" }, // Using Award as placeholder for tooth/smile
                            { title: "Mental Health", desc: "Psychological support", icon: Shield, bg: "bg-indigo-50", color: "text-indigo-500" }, // Using Shield for brain/mind protection
                            { title: "General Medicine", desc: "Primary healthcare", icon: Clock, bg: "bg-green-50", color: "text-green-500" },
                        ].map((service, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                                <div className={`${service.bg} p-3 rounded-lg ${service.color} group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">{service.title}</h4>
                                    <p className="text-sm text-slate-500">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-600 rounded-3xl overflow-hidden shadow-xl relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
                        <div className="relative px-6 py-12 md:px-12 text-center md:text-left md:flex md:items-center md:justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Ready to improve your health?</h2>
                                <p className="text-indigo-100 text-lg max-w-md">Join over 50,000 patients who trust SWMC for their healthcare needs.</p>
                            </div>
                            <div className="mt-8 md:mt-0">
                                <Link to="/signup">
                                    <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 shadow-none border-0">
                                        Create Account
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Import needs to be added for Heart as it was used in map
import { Heart } from 'lucide-react';
