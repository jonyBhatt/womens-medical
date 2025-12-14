import { Card } from '../ui/Card';
import { UserCheck, Clock, Calendar } from 'lucide-react';
import { serviceHighlights } from '../../data/landingData';

const iconMap = {
    'user-check': UserCheck,
    'clock': Clock,
    'calendar': Calendar
};

export const ServiceHighlightsSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {serviceHighlights.map((highlight, index) => {
                        const Icon = iconMap[highlight.icon as keyof typeof iconMap];
                        const colors = [
                            { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
                            { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
                            { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' }
                        ];
                        const color = colors[index % colors.length];

                        return (
                            <Card
                                key={highlight.id}
                                className={`p-6 hover:shadow-md transition-all duration-300 border-2 ${color.border} hover:scale-105`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`${color.bg} p-3 rounded-xl ${color.text} flex-shrink-0`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
