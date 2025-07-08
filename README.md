# MG Insurance and Investment Portfolio Website

A professional, responsive portfolio website for MG Insurance and Investment, a company that helps people secure insurance policies from trusted providers like Star Health, United India, and LIC, and offers expert guidance on investment options such as mutual funds and SIPs for financial security.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags and structured content for search engines
- **Accessibility**: Keyboard navigation and screen reader support

### Pages
- **Home**: Hero section, services overview, and call-to-action
- **About**: Company history, team profiles, and testimonials
- **Insurance Services**: Detailed insurance types with comparison tables

- **Contact**: Contact form with Supabase integration

### Insurance Services
- **Medical Insurance**: Star Health partnerships and comprehensive coverage
- **Vehicle Insurance**: United India motor insurance solutions
- **Life Insurance**: LIC policies and family protection
- **Other Insurance**: Specialized business and personal coverage



## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons

### Backend & Services
- **Supabase**: Database, authentication, and real-time features
- **React Hook Form**: Form handling and validation
- **React Hot Toast**: User notifications

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
mg-insurance-investment/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── InsuranceServices.jsx

│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mg-insurance-investment.git
   cd mg-insurance-investment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) - Trust and professionalism
- **Secondary**: Gray (#64748b) - Neutral and clean
- **Success**: Green (#10b981) - Positive actions
- **Warning**: Yellow (#f59e0b) - Cautions
- **Error**: Red (#ef4444) - Errors and alerts

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **Captions**: Light weight (300)

### Components
- **Buttons**: Primary and secondary variants with hover states
- **Cards**: Elevated design with shadows and rounded corners
- **Forms**: Clean inputs with focus states and validation
- **Navigation**: Sticky header with mobile menu

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Tailwind Configuration
The `tailwind.config.js` file includes:
- Custom color palette
- Custom font family
- Responsive breakpoints
- Component utilities

## 📊 SEO Optimization

### Meta Tags
- Title tags for each page
- Meta descriptions with keywords
- Open Graph tags for social sharing
- Twitter Card tags

### Keywords
- Star Health insurance
- LIC policies
- United India insurance
- Mutual funds
- SIPs for financial security
- Insurance quotes


## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Deploy

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: info@mginsurance.com
- Phone: +91 98765 43210
- Website: https://mginsurance.com

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images
- [React Hook Form](https://react-hook-form.com/) for form handling
- [Supabase](https://supabase.com/) for backend services

---

**MG Insurance and Investment** - Secure Your Future with Trusted Insurance and Investment Solutions 