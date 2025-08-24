# Partani Eye Care Website

A beautiful, modern website for Partani Eye Care clinic built with Next.js, React, and Tailwind CSS. Features an orange and white theme with responsive design and comprehensive eye care information.

## Features

- **Modern Design**: Clean, professional layout with orange and white color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Contact Form**: Built-in appointment booking form
- **Google Maps Integration**: Embedded map for easy location finding
- **Service Showcase**: Comprehensive list of eye care services
- **Doctor Profiles**: Professional team presentation with placeholders
- **SEO Optimized**: Built with Next.js for optimal search engine performance

## Sections

1. **Header**: Navigation with logo and menu
2. **Hero Section**: Eye-catching banner with key statistics
3. **About**: Clinic information and features
4. **Services**: Comprehensive eye care services including:
   - Comprehensive Eye Exams
   - Cataract Surgery
   - Retinal Treatments
   - LASIK Surgery
   - Pediatric Eye Care
   - Glaucoma Management
5. **Doctors**: Team presentation with specializations
6. **Contact**: Contact form, clinic information, and embedded Google Maps
7. **Footer**: Additional links and contact information

## Technology Stack

- **Next.js 15**: React framework for production
- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Additional styling for animations and effects

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Content Placeholders

The website includes several placeholder elements that should be replaced with actual content:

1. **Contact Information**: Update phone numbers, email addresses, and physical address
2. **Doctor Photos**: Replace placeholder images with actual doctor photographs
3. **Clinic Images**: Add real photos of the clinic interior and equipment
4. **Emergency Contact**: Update emergency hotline numbers

### Key Files to Modify

- `src/components/Contact.tsx`: Update contact information and address
- `src/components/Doctors.tsx`: Replace doctor names and credentials
- `src/components/Hero.tsx`: Update statistics and hero content
- `src/components/Footer.tsx`: Update footer contact information

### Google Maps Integration

The contact section includes an embedded Google Map. The current map link is:
```
https://maps.app.goo.gl/U7uzV1JdtRRg9ew57
```

To update the map location:
1. Go to Google Maps
2. Find your clinic location
3. Click "Share" and copy the embed link
4. Replace the iframe src in `src/components/Contact.tsx`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design Features

### Color Scheme
- Primary Orange: `#f97316` (orange-500)
- Secondary Orange: `#ea580c` (orange-600)
- White: `#ffffff`
- Gray shades for text and backgrounds

### Components
- Custom buttons with hover effects
- Cards with shadow animations
- Responsive navigation with mobile menu
- Floating animations for visual appeal
- Smooth scrolling navigation

## Deployment

The project can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'out' directory
```

### Traditional Hosting
```bash
npm run build
# Upload the generated files
```

**Note**: Remember to replace all placeholder content with actual clinic information before going live.
