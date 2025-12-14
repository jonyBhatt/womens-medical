import { AboutStatsSection } from '../components/sections/AboutStatsSection';
import { BlogSection } from '../components/sections/BlogSection';
import { DoctorsCarouselSection } from '../components/sections/DoctorsCarouselSection';
import { HeroSection } from '../components/sections/HeroSection';
import { MissionSection } from '../components/sections/MissionSection';
import { ServiceHighlightsSection } from '../components/sections/ServiceHighlightsSection';
import { TechnologySection } from '../components/sections/TechnologySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';

export const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Appointment Booking */}
            <HeroSection />

            {/* Service Highlights - 3 Cards */}
            <ServiceHighlightsSection />

            {/* About Section with Stats */}
            <AboutStatsSection />

            {/* Services Grid with Pricing */}
            {/* <ServicesSection /> */}

            {/* Why Choose Us + Emergency Contact */}
            <WhyChooseUsSection />

            {/* Technology & Innovation */}
            <TechnologySection />

            {/* Doctors Carousel */}
            <DoctorsCarouselSection />

            {/* Mission & Beliefs */}
            <MissionSection />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Blog / News */}
            <BlogSection />
        </div>
    );
};
