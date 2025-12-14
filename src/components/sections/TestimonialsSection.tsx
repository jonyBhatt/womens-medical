import { Card } from '../ui/Card';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/landingData';

export const TestimonialsSection = () => {
    // Handle empty testimonials gracefully
    if (testimonials.length === 0) {
        return (
            <section className="py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                            Patient Testimonials
                        </h2>
                        <p className="text-slate-600">
                            Be the first to share your experience with us!
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg text-slate-600">
                        Read what our patients have to say about their experience with SWMC
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="p-8 hover:shadow-xl transition-all duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-blue-100">
                                <Quote className="w-12 h-12" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200';
                                    }}
                                />
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-6 py-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">
                            98% Patient Satisfaction Rate
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
