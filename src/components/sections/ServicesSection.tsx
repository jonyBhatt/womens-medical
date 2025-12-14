import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { services } from '../../data/landingData';

export const ServicesSection = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        High Quality Services For You
                    </h2>
                    <p className="text-lg text-slate-600">
                        Comprehensive medical services tailored to your needs with transparent pricing
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            className={`p-8 hover:shadow-xl transition-all duration-300 ${service.popular
                                    ? 'border-2 border-blue-500 shadow-lg relative'
                                    : 'hover:scale-105'
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-4xl font-extrabold text-blue-600">
                                        {service.price}
                                    </span>
                                    <span className="text-slate-500 text-sm">/ session</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-700">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={service.popular ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                Book Now
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
