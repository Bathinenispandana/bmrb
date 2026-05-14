# BMRB Website - Quick Start Guide

## Getting Started

### 1. View the Website
The website is now fully functional with the new professional minimal design.

**Start the dev server:**
```bash
npm run dev
# or
pnpm dev
```

Then visit: `http://localhost:3000`

### 2. Key Pages

- **Home** (`/`) - Hero, portfolio, services, testimonials
- **Services** (`/services`) - Detailed service descriptions
- **About** (`/about-us`) - Company information
- **Contact** (`/contact-us`) - Contact form and information
- **Clients** (`/clients`) - Client logos and case studies

### 3. What's Changed

**New Components:**
- ✨ `MinimalHero.tsx` - Clean, professional hero section
- ✨ `PortfolioShowcase.tsx` - 6 featured projects with images
- ✨ `DetailedServices.tsx` - Expandable service details
- ✨ `Testimonials.tsx` - Client success stories

**Updated Components:**
- 🔄 `Header.tsx` - Minimal navigation
- 🔄 `Footer.tsx` - Professional footer
- 🔄 `globals.css` - Professional color palette
- 🔄 `app/page.tsx` - New home page structure

### 4. Customization

#### Update Colors
Edit `/globals.css`:
```css
:root {
  --primary: #1a1a1a;
  --accent: #0066cc;
  --background: #fafbfc;
}
```

#### Update Content
Edit component files for text content:
- `MinimalHero.tsx` - Hero copy
- `DetailedServices.tsx` - Service descriptions
- `Testimonials.tsx` - Client testimonials
- `PortfolioShowcase.tsx` - Project details

#### Update Images
Replace images in `/public/images/`:
- `project-1.avif` through `project-6.avif`
- `testimonial-1.avif` through `testimonial-4.avif`

### 5. Important Files

```
├── app/
│   ├── page.tsx              # Home page (NEW STRUCTURE)
│   ├── layout.tsx            # App layout
│   ├── services/page.tsx      # Services page
│   ├── about-us/page.tsx      # About page
│   └── contact-us/page.tsx    # Contact page
│
├── components/
│   ├── MinimalHero.tsx        # NEW - Clean hero
│   ├── PortfolioShowcase.tsx  # NEW - Project showcase
│   ├── DetailedServices.tsx   # NEW - Service details
│   ├── Testimonials.tsx       # NEW - Client testimonials
│   ├── Header.tsx             # UPDATED - Minimal nav
│   └── Footer.tsx             # UPDATED - Professional footer
│
├── public/images/
│   ├── project-1.avif to project-6.avif      # Project images
│   └── testimonial-1.avif to testimonial-4.avif
│
└── globals.css               # UPDATED - Professional styles
```

### 6. Deploy to Vercel

**Option 1: GitHub Integration**
```bash
git add .
git commit -m "Update to professional minimal design"
git push origin main
```

**Option 2: Vercel CLI**
```bash
vercel deploy
```

### 7. Performance Tips

✓ Images are optimized for web  
✓ Service worker enabled for offline support  
✓ Minimal animations for smooth performance  
✓ Clean CSS with no heavy gradients  
✓ Semantic HTML for SEO  

### 8. Testing Checklist

- [ ] Test home page on desktop
- [ ] Test home page on mobile
- [ ] Verify all links work
- [ ] Test portfolio hover effects
- [ ] Test service expansion
- [ ] Check contact form
- [ ] Verify responsive design
- [ ] Test on different browsers

### 9. Next Steps

1. **Content**: Update project descriptions and testimonials
2. **Images**: Replace placeholder images with real ones
3. **Links**: Ensure all CTAs point to correct pages
4. **SEO**: Update metadata and add structured data
5. **Analytics**: Integrate Google Analytics
6. **Deploy**: Push to production

### 10. Support Files

- `BMRB_PROFESSIONAL_REDESIGN.md` - Full documentation
- `BMRB_IMPLEMENTATION_GUIDE.md` - Technical details
- `README.md` - Project overview

---

**Ready to showcase your market research expertise! 🚀**
