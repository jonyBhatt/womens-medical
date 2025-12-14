import { Heart, Target, Users } from 'lucide-react';

export const MissionSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-slate-600">
                        Our mission is to provide accessible, compassionate, and world-class
                        healthcare to every individual who walks through our doors.
                    </p>
                </div>

                {/* Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-6">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Compassionate Care
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            We treat every patient with empathy, respect, and dignity,
                            ensuring they feel heard and cared for throughout their journey.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-600 text-white mb-6">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Excellence in Medicine
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            Our commitment to medical excellence drives us to continuously
                            improve our services and adopt the latest healthcare innovations.
                        </p>
                    </div>

                    <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600 text-white mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            Community First
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            We believe in giving back to our community through health
                            awareness programs and accessible healthcare services for all.
                        </p>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="mt-16 text-center max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <svg className="w-12 h-12 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-2xl font-medium mb-6 leading-relaxed">
                                "Healthcare is not just about treating illness, it's about
                                promoting wellness and empowering people to live their best lives."
                            </p>
                            <p className="font-semibold">Dr. Ahmed Rahman</p>
                            <p className="text-blue-200 text-sm">Chief Medical Officer, SWMC</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
