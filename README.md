# Katyani Media - Marketing Agency Website

A modern, responsive website for Katyani Media, an offline marketing agency. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 📧 Contact form with API integration
- 🎭 Smooth animations and transitions
- ♿ Accessible components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── components/
│   ├── About.tsx              # About section
│   ├── Contact.tsx            # Contact form
│   ├── Footer.tsx             # Footer component
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── Portfolio.tsx          # Portfolio section
│   ├── Services.tsx           # Services section
│   └── Stats.tsx              # Statistics section
└── public/                    # Static assets
```

## Customization

### Update Contact Information

Edit the contact details in:
- `components/Footer.tsx`
- `components/Contact.tsx`

### Modify Services

Update the services array in `components/Services.tsx`

### Change Colors

Modify the color scheme in `tailwind.config.js`

### Add Portfolio Items

Update the portfolio items array in `components/Portfolio.tsx`

## Contact Form Integration

The contact form is set up with an API route at `/api/contact`. To integrate with an email service:

1. Install an email service package (e.g., `nodemailer`, `@sendgrid/mail`)
2. Update `app/api/contact/route.ts` to send emails
3. Add environment variables for email credentials

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## License

© 2024 Katyani Media. All rights reserved.

