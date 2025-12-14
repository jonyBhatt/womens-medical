import { Button } from '../ui/Button';
import { Check, Phone } from 'lucide-react';
import { whyChooseItems } from '../../data/landingData';

export const WhyChooseUsSection = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Why Choose Us - Green Card */}
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">
                                Why Choose<br />SWMC?
                            </h2>

                            <ul className="space-y-4 mb-8">
                                {whyChooseItems.map((item) => (
                                    <li key={item.id} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{item.title}</h4>
                                            <p className="text-green-50 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="outline"
                                className="bg-white text-green-600 hover:bg-green-50 border-0"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Emergency Contact - Blue Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm font-medium">24/7 Available</span>
                            </div>

                            <h2 className="text-3xl font-bold mb-4">
                                Emergency?<br />Contact Us.
                            </h2>

                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Our emergency team is available round the clock to provide
                                immediate medical assistance. Don't hesitate to reach out
                                when you need urgent care.
                            </p>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                                <p className="text-blue-100 text-sm mb-2">Emergency Hotline</p>
                                <p className="text-3xl font-bold">+880 1234-567890</p>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    variant="outline"
                                    className="bg-white text-blue-600 hover:bg-blue-50 border-0 flex-1"
                                >
                                    Call Now
                                </Button>
                                <Button
                                    variant="outline"
                                    className="bg-white/20 text-white hover:bg-white/30 border-0 flex-1"
                                >
                                    Chat Support
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
