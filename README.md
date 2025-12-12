# Paulin's 3D Interactive Portfolio

A modern, interactive 3D portfolio website showcasing full-stack development skills with immersive Three.js animations and responsive design. Built with React, Vite, and cutting-edge web technologies.


## ✨ Features

- **3D Interactive Experience**: Engaging Three.js visualizations with interactive 3D models
- **Responsive Design**: Seamlessly adapts from mobile to desktop with Tailwind CSS
- **Animated Components**: Smooth GSAP animations throughout the interface
- **Dynamic 3D Models**: 
  - Animated developer character with multiple animations
  - Interactive hacker room environment
  - Rotating cube, rings, and poke ball elements
- **Interactive Globe**: Real-time rotating globe showing global availability
- **Project Showcase**: Display projects with 3D computer mockups and video demonstrations
- **Contact Form**: Integrated email functionality using EmailJS
- **Client Reviews**: Testimonials section with star ratings
- **Work Experience**: Interactive timeline with 3D character animations
- **Dark Theme**: Modern dark UI with gradient text effects
- **Smooth Navigation**: Fixed navbar with mobile-friendly menu

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Type safety

### 3D & Graphics
- **Three.js 0.180** - 3D graphics library
- **React Three Fiber 9** - React renderer for Three.js
- **React Three Drei 10** - Useful helpers for R3F
- **GSAP 3** - Animation library
- **@gsap/react** - React integration for GSAP

### Libraries & Tools
- **React Globe GL** - Interactive globe component
- **React Toastify** - Toast notifications
- **EmailJS** - Email service for contact form
- **React Responsive** - Media query helper
- **Leva** - GUI controller (development)

### Development Tools
- **ESLint 9** - Code linting
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vegetason/portfolio3d.git
cd portfolio3d
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button.jsx
│   ├── CanvasLoader.jsx
│   ├── Cube.jsx
│   ├── DemoComputer.jsx
│   ├── Developer.jsx
│   ├── HackerRoom.jsx
│   ├── HeroCamera.jsx
│   ├── PokeBall.jsx
│   ├── ReactLogo.jsx
│   ├── Rings.jsx
│   └── Target.jsx
├── sections/           # Page sections
│   ├── About.jsx
│   ├── Clients.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── NavBar.tsx
│   └── Projects.jsx
├── constants/          # Data and configuration
│   └── index.js
├── App.jsx            # Main app component
├── main.jsx           # Entry point
├── index.css          # Global styles
public/
├── models/            # 3D model files (GLB, FBX)
├── textures/          # Texture files
└── assets/            # Images and SVGs
```

## 📄 Key Sections

### Hero Section
Immersive landing section with:
- 3D hacker room environment
- Animated character greeting
- Interactive 3D elements (cube, rings, React logo)
- Call-to-action button

### About Section
Showcases developer profile with:
- Personal introduction grid
- Tech stack highlights
- Interactive globe showing global availability
- Contact information with copy-to-clipboard

### Projects Section
Features project showcase with:
- Project descriptions and subdescriptions
- 3D computer mockup displaying project videos
- Technology tags
- Live site links
- Navigation between projects

### Experience Section
Interactive work history with:
- 3D developer model with animation control
- Company logos and positions
- Duration and role descriptions
- Hover-triggered animations

### Clients Section
Client testimonials displaying:
- Review text
- Client name and position
- Client photo
- Star ratings

### Contact Section
Professional contact form with:
- Name, email, and message inputs
- Form validation
- Email integration via EmailJS
- Success/error notifications via React Toastify

## 🎨 Customization

### Update Personal Information

Edit `src/constants/index.js` to update:
- Navigation links
- Client reviews
- Projects showcase
- Work experience
- Skills and bio

### Modify Color Scheme

Edit `tailwind.config.js` to customize:
- Color palette in the `colors` object
- The dark theme uses `black-100` to `black-600`

### Update 3D Models

Replace model files in `public/models/`:
- `cube.glb` - Rotating cube
- `computer.glb` - Project display computer
- `developer.glb` - Developer character
- `hacker-room.glb` - Background environment
- `poke_ball.glb` - Floating poke ball

### Configure Email Service

In `src/sections/Contact.jsx`, update:
- `emailjs.send()` service ID
- Template ID
- Public key

Sign up at [EmailJS](https://www.emailjs.com/) for free email integration.

## 📱 Responsive Breakpoints

The portfolio uses these responsive breakpoints:
- **Small devices**: < 440px
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

3D elements and layouts automatically adjust based on screen size.

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel automatically detects Vite configuration
5. Deploy with one click

### Deploy to Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

## 📊 Performance Optimization

- **Code splitting**: Vite automatically chunks code
- **Image optimization**: Use WebP where possible
- **3D asset optimization**: Models are compressed as GLB files
- **Lazy loading**: Components use Suspense for code splitting
- **Canvas optimization**: Three.js rendering is optimized with proper LOD

## 📦 Dependencies Overview

| Package | Purpose |
|---------|---------|
| `react` | UI framework |
| `three` | 3D graphics |
| `@react-three/fiber` | React renderer for Three.js |
| `gsap` | Animation engine |
| `react-globe.gl` | Interactive globe |
| `emailjs` | Email service |
| `react-toastify` | Notifications |
| `tailwindcss` | Styling |

## 🐛 Troubleshooting

### 3D Models Not Loading
- Check that model files exist in `public/models/`
- Ensure correct file extensions (.glb, .fbx)
- Check browser console for error messages

### Email Not Sending
- Verify EmailJS credentials in Contact.jsx
- Check spam folder for test emails
- Ensure EmailJS service is active

### Performance Issues
- Disable Leva controls in production (already commented out)
- Reduce 3D model complexity
- Lower animation frame rates on mobile devices

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Animation](https://gsap.com/docs)
- [Vite Guide](https://vitejs.dev/guide)

## 🔗 Live Links

- **Portfolio**: [View Live](https://paulin-portfolio.vercel.app)
- **GitHub**: [Repository](https://github.com/vegetason/portfolio3d)
- **LinkedIn**: [Irakoze Benimana Paulin](https://www.linkedin.com/in/irakoze-benimana-paulin-72328331a/)

## 📧 Contact

For inquiries or collaboration opportunities:
- **Email**: irakozepaulin12@gmail.com
- **GitHub**: [@vegetason](https://github.com/vegetason)
- **LinkedIn**: [Irakoze Benimana Paulin](https://www.linkedin.com/in/irakoze-benimana-paulin-72328331a/)


## 🙏 Acknowledgments

- 3D models from Sketchfab and custom creations
- Inspiration from modern portfolio designs
- Three.js and React ecosystem communities

---

**Built with ❤️ by Paulin Irakoze** | Last Updated: 2025