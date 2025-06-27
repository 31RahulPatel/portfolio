# Rahul Patel - DevOps Engineer Portfolio

A modern, responsive portfolio website built with ReactJS and pure CSS. Features a black-and-white theme with dark/light mode toggle, smooth animations, and mobile-first design.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: CSS animations and transitions throughout
- **Modern UI**: Clean, professional design with hover effects
- **Interactive Components**: Animated testimonials, project tabs, skill bars
- **SEO Optimized**: Semantic HTML structure
- **Performance Optimized**: Pure CSS, no external frameworks

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation with mobile menu
│   ├── Hero.js         # Landing section with intro
│   ├── About.js        # About me section
│   ├── Skills.js       # Skills with progress bars
│   ├── Projects.js     # Featured projects with tabs
│   ├── Experience.js   # Work experience timeline
│   ├── Education.js    # Education details
│   ├── Certifications.js # AWS & other certifications
│   ├── Awards.js       # Awards and recognition
│   ├── Blog.js         # Blog posts section
│   ├── Testimonials.js # Client testimonials carousel
│   ├── Gallery.js      # Photo gallery
│   ├── Contact.js      # Contact form and info
│   ├── Footer.js       # Footer with links
│   └── ScrollToTop.js  # Scroll to top button
├── styles/             # CSS files for each component
└── assets/             # Images and other assets
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd qportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### Adding Your Photos

1. **Profile Photo (Hero Section)**
   - Replace the placeholder in `src/components/Hero.js`
   - Add your image to `src/assets/` folder
   - Update the image source in the component

2. **About Section Photo**
   - Replace placeholder in `src/components/About.js`
   - Follow same process as profile photo

3. **Gallery Photos**
   - Add photos to `src/assets/gallery/` folder
   - Update `src/components/Gallery.js` with actual image paths
   - Replace placeholder items with real photos

### Updating Content

1. **Personal Information**
   - Edit contact details in `src/components/Contact.js`
   - Update bio and description in `src/components/About.js`
   - Modify skills in `src/components/Skills.js`

2. **Projects**
   - Update project details in `src/components/Projects.js`
   - Add new projects to the projects array
   - Include demo and GitHub links

3. **Experience & Education**
   - Modify work experience in `src/components/Experience.js`
   - Update education details in `src/components/Education.js`

4. **Certifications**
   - Add/remove certifications in `src/components/Certifications.js`
   - Update the certifications object with your credentials

### Styling Customization

1. **Colors & Theme**
   - Edit CSS custom properties in `src/styles/index.css`
   - Modify `--primary-color`, `--secondary-color`, etc.

2. **Fonts**
   - Change font imports in `public/index.html`
   - Update font-family in `src/styles/index.css`

3. **Animations**
   - Modify animation keyframes in component CSS files
   - Adjust transition durations and easing functions

### Adding Resume Download

1. **Add Resume PDF**
   - Place your resume PDF in `public/` folder
   - Name it `Rahul_Patel_Resume.pdf`

2. **Update Download Function**
   ```javascript
   const downloadResume = () => {
     const link = document.createElement('a');
     link.href = '/Rahul_Patel_Resume.pdf';
     link.download = 'Rahul_Patel_Resume.pdf';
     link.click();
   };
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance Tips

1. **Image Optimization**
   - Compress images before adding
   - Use WebP format when possible
   - Add lazy loading for gallery images

2. **Code Splitting**
   - Consider lazy loading components for better performance
   - Use React.lazy() for non-critical components

3. **SEO Optimization**
   - Update meta tags in `public/index.html`
   - Add structured data for better search visibility

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy
3. Configure environment variables if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/qportfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Troubleshooting

### Common Issues

1. **Animations not working**
   - Check if CSS custom properties are supported
   - Ensure proper class names are applied

2. **Mobile menu not responsive**
   - Verify media queries in Header.css
   - Check JavaScript event listeners

3. **Theme toggle not working**
   - Ensure localStorage is available
   - Check dark mode CSS variables

## 📞 Support

For questions or issues:
- Email: onlinerahulpatel@gmail.com
- LinkedIn: https://www.linkedin.com/in/rahul-patel3105/

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Rahul Patel**