import { aboutStats } from '../../data/landingData';

export const AboutStatsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                            Why Every Alike Chooses SWMC
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-8">
                            We combine cutting-edge medical technology with compassionate care
                            to provide the best healthcare experience in Bangladesh. Our commitment
                            to excellence has made us the trusted choice for thousands of families.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100"
                                    alt="Doctor"
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100"
                                    alt="Doctor"
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100"
                                    alt="Doctor"
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                            </div>
                            <p className="text-white font-medium">
                                100+ Expert Doctors
                            </p>
                        </div>
                    </div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {aboutStats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <p className="text-4xl font-extrabold text-white mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-blue-100 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
