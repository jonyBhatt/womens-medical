// Landing Page Data - Centralized data for the medical clinic landing page

export interface ServiceHighlight {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    price: string;
    features: string[];
    popular?: boolean;
}

export interface Stat {
    value: string;
    label: string;
}

export interface WhyChooseItem {
    id: string;
    title: string;
    description: string;
}

export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    image: string;
    rating: number;
    experience: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
}

// Service Highlights (3 cards below hero)
export const serviceHighlights: ServiceHighlight[] = [
    {
        id: '1',
        title: 'Qualified Doctors',
        description: 'Board-certified specialists with years of experience',
        icon: 'user-check'
    },
    {
        id: '2',
        title: '24/7 Emergency',
        description: 'Round-the-clock emergency medical services',
        icon: 'clock'
    },
    {
        id: '3',
        title: 'Online Booking',
        description: 'Easy appointment scheduling from anywhere',
        icon: 'calendar'
    }
];

// About Stats
export const aboutStats: Stat[] = [
    { value: '100+', label: 'Specialist Doctors' },
    { value: '50k+', label: 'Happy Patients' },
    { value: '15k+', label: 'Online Consultations' },
    { value: '24/7', label: 'Emergency Support' }
];

// Services with pricing
export const services: Service[] = [
    {
        id: '1',
        title: 'Skin Care',
        description: 'Comprehensive dermatology services for all skin conditions',
        price: '৳500',
        features: ['Acne Treatment', 'Skin Analysis', 'Anti-aging Care', 'Laser Treatment']
    },
    {
        id: '2',
        title: 'Eye Care',
        description: 'Complete eye examination and vision correction',
        price: '৳800',
        features: ['Vision Test', 'Eye Surgery', 'Laser Correction', 'Contact Lenses'],
        popular: true
    },
    {
        id: '3',
        title: 'Mental Health',
        description: 'Professional psychological counseling and therapy',
        price: '৳1200',
        features: ['Counseling', 'Therapy Sessions', 'Stress Management', 'Family Therapy']
    }
];

// Why Choose Us
export const whyChooseItems: WhyChooseItem[] = [
    {
        id: '1',
        title: 'Expert Medical Team',
        description: 'Our doctors are highly qualified specialists with international certifications'
    },
    {
        id: '2',
        title: 'Modern Technology',
        description: 'State-of-the-art medical equipment for accurate diagnosis'
    },
    {
        id: '3',
        title: 'Patient-Centered Care',
        description: 'We prioritize your comfort and well-being in every interaction'
    },
    {
        id: '4',
        title: 'Affordable Pricing',
        description: 'Quality healthcare at prices that won\'t break the bank'
    }
];

// Featured Doctors
export const featuredDoctors: Doctor[] = [
    {
        id: '1',
        name: 'Dr. Sarah Ahmed',
        specialty: 'Cardiologist',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500',
        rating: 4.9,
        experience: '15 years'
    },
    {
        id: '2',
        name: 'Dr. Kamal Hassan',
        specialty: 'Pediatrician',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500',
        rating: 4.8,
        experience: '12 years'
    },
    {
        id: '3',
        name: 'Dr. Fatima Rahman',
        specialty: 'Gynecologist',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500',
        rating: 5.0,
        experience: '18 years'
    },
    {
        id: '4',
        name: 'Dr. Rahim Khan',
        specialty: 'Orthopedic',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500',
        rating: 4.7,
        experience: '10 years'
    }
];

// Testimonials
export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Ayesha Khan',
        role: 'Patient',
        content: 'The care I received was exceptional. The doctors were professional and caring. Highly recommend SWMC!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
        rating: 5
    },
    {
        id: '2',
        name: 'Mohammad Ali',
        role: 'Patient',
        content: 'Booking appointments is so easy now. The online system saved me so much time. Great service!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
        rating: 5
    },
    {
        id: '3',
        name: 'Nadia Islam',
        role: 'Patient',
        content: 'Emergency care was prompt and efficient. The staff was incredibly supportive during a difficult time.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
        rating: 5
    }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Understanding Heart Health: Prevention Tips',
        excerpt: 'Learn essential tips to maintain a healthy heart and prevent cardiovascular diseases.',
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800&h=500',
        date: '2025-12-10',
        category: 'Cardiology'
    },
    {
        id: '2',
        title: 'Nutrition Guide for Expecting Mothers',
        excerpt: 'A comprehensive guide to proper nutrition during pregnancy for mother and baby health.',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800&h=500',
        date: '2025-12-08',
        category: 'Gynecology'
    },
    {
        id: '3',
        title: 'Mental Health Awareness: Breaking the Stigma',
        excerpt: 'Understanding mental health and why seeking help is a sign of strength, not weakness.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500',
        date: '2025-12-05',
        category: 'Mental Health'
    },
    {
        id: '4',
        title: 'Pediatric Care: Common Childhood Illnesses',
        excerpt: 'What every parent should know about common childhood illnesses and when to seek help.',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800&h=500',
        date: '2025-12-03',
        category: 'Pediatrics'
    }
];
