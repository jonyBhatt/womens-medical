import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/landingData';

export const BlogSection = () => {
    // Handle empty blog posts gracefully
    if (blogPosts.length === 0) {
        return (
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                            Latest Health News & Articles
                        </h2>
                        <p className="text-slate-600">
                            Stay tuned for upcoming health tips and medical insights!
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-2">
                            Latest Health & News
                        </h2>
                        <p className="text-lg text-slate-600">
                            Stay informed with our latest health articles and medical insights
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:inline-flex">
                        View All Articles
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500';
                                    }}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(post.date)}</span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>

                                <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full sm:w-auto">
                        View All Articles
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
