# SWMC - Medical Clinic Landing Page

A modern, fully responsive medical clinic landing page built with React, TypeScript, and Tailwind CSS v4. This project showcases a complete healthcare SaaS frontend with a clean, trust-inspiring design optimized for patient engagement.

## 🎯 Project Overview

This is a **production-ready frontend** for a medical clinic that prioritizes:
- **Trust & Clarity**: Clean medical aesthetic with professional imagery
- **Accessibility**: WCAG-compliant color contrast and keyboard navigation
- **Responsiveness**: Mobile-first design that scales beautifully
- **Performance**: Optimized images with fallback handling
- **Maintainability**: Component-based architecture with centralized data

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS v4.1.18
- **Routing**: React Router DOM v7.10.1
- **Icons**: Lucide React v0.561.0
- **Build Tool**: Vite 7.2.4

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServiceHighlightsSection.tsx
│   │   ├── AboutStatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── TechnologySection.tsx
│   │   ├── DoctorsCarouselSection.tsx
│   │   ├── MissionSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── BlogSection.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   ├── DoctorCard.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── Navbar.tsx
├── data/
│   └── landingData.ts     # Centralized data source
├── pages/
│   ├── Home.tsx           # Main landing page
│   ├── FindDoctors.tsx
│   ├── DoctorProfile.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── PatientDashboard.tsx
│   └── DoctorDashboard.tsx
├── context/
│   ├── AuthContext.tsx
│   └── AppointmentContext.tsx
├── types/
│   └── index.ts
└── utils/
    └── cn.ts              # Tailwind class merger
```

## 🎨 Design Decisions

### Color Palette
- **Primary**: Blue (#2563EB) - Trust, professionalism
- **Secondary**: Green (#059669) - Health, wellness
- **Accent**: Purple (#7C3AED) - Innovation
- **Neutral**: Slate grays - Clean, medical aesthetic

### Typography
- **Headings**: Bold, clear hierarchy (3xl to 6xl)
- **Body**: Relaxed leading for readability
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Component Philosophy
1. **Reusability**: All UI components are generic and reusable
2. **Composition**: Sections compose smaller components
3. **Data Separation**: All content lives in `landingData.ts`
4. **Type Safety**: Strong TypeScript typing throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd womens-medical

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📄 Landing Page Sections

### 1. Hero Section
- Eye-catching headline with doctor image
- Appointment booking form (Location, Specialty, Date)
- Trust indicators (patient count, avatars)
- Responsive layout with floating stats card

### 2. Service Highlights
- 3 key features in card format
- Icon-based visual hierarchy
- Hover animations for engagement

### 3. About & Stats
- Compelling "Why Choose Us" narrative
- 4 key statistics in gradient background
- Doctor team showcase

### 4. Services Grid
- 3 service cards with pricing
- Feature lists with checkmarks
- "Most Popular" badge for highlighted service
- Clear call-to-action buttons

### 5. Why Choose Us + Emergency
- Split layout with gradient cards
- Green card: 4 reasons to choose SWMC
- Blue card: Emergency contact information
- 24/7 availability badge

### 6. Technology Section
- Medical innovation showcase
- Image with floating stat badges
- 3 numbered feature highlights
- Modern, tech-forward messaging

### 7. Doctors Carousel
- Horizontal scrolling doctor cards
- Star ratings and experience display
- Navigation controls (desktop & mobile)
- Profile view links

### 8. Mission Section
- 3 core values with gradient cards
- Icon-based visual identity
- Inspirational quote from CMO
- Community-focused messaging

### 9. Testimonials
- 3 patient reviews with ratings
- Avatar images with fallback
- Quote styling
- Trust badge (98% satisfaction)

### 10. Blog Section
- 4 latest health articles
- Category badges
- Date formatting
- "Read More" links with hover effects

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions on mobile
- Optimized layouts for all screen sizes

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Focus states on interactive elements

### Performance Optimizations
- Image lazy loading via Unsplash
- Fallback images for broken URLs
- Optimized bundle size
- CSS purging in production
- Minimal re-renders

### Edge Cases Handled
- ✅ Very long doctor names (text truncation)
- ✅ Missing images (fallback URLs)
- ✅ Empty service/testimonial lists (graceful empty states)
- ✅ Small mobile screens (320px+)
- ✅ Slow image loading (skeleton states via Unsplash)
- ✅ Large text scaling (relative units)
- ✅ Overflow-safe cards (line-clamp utilities)
- ✅ Broken image URLs (onError handlers)

## 🔧 Customization Guide

### Adding New Services
Edit `src/data/landingData.ts`:

```typescript
export const services: Service[] = [
  {
    id: '4',
    title: 'New Service',
    description: 'Service description',
    price: '৳1000',
    features: ['Feature 1', 'Feature 2'],
    popular: false
  }
];
```

### Adding New Doctors
Edit `src/data/landingData.ts`:

```typescript
export const featuredDoctors: Doctor[] = [
  {
    id: '5',
    name: 'Dr. New Doctor',
    specialty: 'Specialty',
    image: 'https://images.unsplash.com/...',
    rating: 4.8,
    experience: '10 years'
  }
];
```

### Changing Colors
Update Tailwind classes in components:
- Primary: `bg-blue-600`, `text-blue-600`
- Secondary: `bg-green-600`, `text-green-600`
- Accent: `bg-purple-600`, `text-purple-600`

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import in `src/pages/Home.tsx`
3. Add data to `src/data/landingData.ts` if needed

## 🌐 Image Sources

All images use **Unsplash** with approved search terms:
- `doctor portrait`
- `medical team`
- `hospital interior`
- `doctor with patient`

Images are professional, trust-inspiring, and avoid dramatic lighting.

## 📱 Routing

Current routes (all functional):
- `/` - Landing page (Home)
- `/doctors` - Find doctors page
- `/doctors/:id` - Doctor profile
- `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Patient dashboard
- `/doctor-dashboard` - Doctor dashboard

**Note**: All other routes redirect to home page.

## 🔮 Future Enhancements

### Backend Integration
- Connect to REST API or GraphQL
- Real-time appointment booking
- User authentication with JWT
- Doctor availability management

### Additional Features
- Multi-language support (English/Bangla)
- Dark mode toggle
- Advanced search filters
- Live chat support
- Payment gateway integration
- Email notifications
- SMS reminders

### Performance
- Implement React.lazy for code splitting
- Add service worker for offline support
- Optimize images with next/image equivalent
- Add loading skeletons

## 🐛 Known Limitations

- No backend integration (static data only)
- No actual authentication (mock auth context)
- Appointment booking is UI-only
- Search functionality is placeholder
- No data persistence

## 📝 License

This project is created for educational/portfolio purposes.

## 👨‍💻 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Consistent naming conventions
- Component-based architecture

### Best Practices
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Separation of Concerns
- Mobile-first CSS
- Semantic HTML

## 🤝 Contributing

To extend this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ for better healthcare accessibility**
