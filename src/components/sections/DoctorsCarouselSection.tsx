import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredDoctors } from '../../data/landingData';
import { Link } from 'react-router-dom';

export const DoctorsCarouselSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const maxIndex = Math.max(0, featuredDoctors.length - itemsPerPage);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-2">
                            Our Dedicated Doctors
                        </h2>
                        <p className="text-lg text-slate-600">
                            Meet our team of experienced healthcare professionals
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="disabled:opacity-50"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            className="disabled:opacity-50"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out gap-6"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
                        }}
                    >
                        {featuredDoctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="flex-shrink-0 w-full md:w-[calc(25%-18px)]"
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500';
                                            }}
                                        />
                                        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-semibold text-slate-900">
                                                {doctor.rating}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                                            {doctor.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-2">
                                            {doctor.specialty}
                                        </p>
                                        <p className="text-sm text-slate-500 mb-4">
                                            {doctor.experience} experience
                                        </p>
                                        <Link to={`/doctors/${doctor.id}`}>
                                            <Button variant="outline" className="w-full">
                                                View Profile
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center justify-center gap-2 mt-6">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <span className="text-sm text-slate-600">
                        {currentIndex + 1} / {featuredDoctors.length}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNext}
                        disabled={currentIndex >= featuredDoctors.length - 1}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
