export const TechnologySection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left - Illustration */}
                    <div className="mb-12 lg:mb-0">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600"
                                alt="Medical technology"
                                className="rounded-2xl shadow-xl"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&h=600';
                                }}
                            />

                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-90">Secure</p>
                                        <p className="font-bold">100%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-lg">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-90">Fast</p>
                                        <p className="font-bold">Response</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                            </svg>
                            <span className="text-sm font-medium">Innovation in Healthcare</span>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                            Leading the Way in<br />
                            <span className="text-blue-600">Medical Technology</span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We invest in the latest medical technology and equipment to ensure
                            accurate diagnoses and effective treatments. Our state-of-the-art
                            facilities are designed to provide you with the best possible care.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Advanced Diagnostics',
                                    description: 'Latest imaging and laboratory equipment for precise diagnosis'
                                },
                                {
                                    title: 'Digital Health Records',
                                    description: 'Secure, accessible medical records available anytime, anywhere'
                                },
                                {
                                    title: 'Telemedicine Platform',
                                    description: 'Consult with doctors remotely through our advanced platform'
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
