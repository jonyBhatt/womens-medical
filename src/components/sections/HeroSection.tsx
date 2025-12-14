import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Calendar, MapPin, Search } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-24 lg:pt-28 lg:pb-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0">
                        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                            Trusted by 50,000+ Patients
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                            What Makes Us{' '}
                            <span className="text-blue-600">Better,</span>{' '}
                            <span className="text-green-600">Makes You Better.</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Experience world-class healthcare with our team of expert doctors.
                            Book appointments instantly and get the care you deserve.
                        </p>

                        {/* Appointment Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="relative">
                                    <label className="block text-xs font-medium text-slate-700 mb-2">
                                        Location
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                        <select className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Sylhet</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-xs font-medium text-slate-700 mb-2">
                                        Specialty
                                    </label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                        <select className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option>Cardiology</option>
                                            <option>Pediatrics</option>
                                            <option>Gynecology</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-xs font-medium text-slate-700 mb-2">
                                        Date
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                        <input
                                            type="date"
                                            className="w-full h-12 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Link to="/doctors">
                                <Button size="lg" className="w-full">
                                    Find Available Doctors
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-600">
                            <div className="flex -space-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                                    alt="Patient"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                                    alt="Patient"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                                    alt="Patient"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            </div>
                            <span>
                                <strong className="text-slate-900">50,000+</strong> patients trust us
                            </span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800&h=1000"
                                alt="Professional doctor"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000';
                                }}
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-xl">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">98%</p>
                                    <p className="text-sm text-slate-500">Success Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
