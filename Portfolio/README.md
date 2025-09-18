# M V N Sandeep Naidu - Portfolio

> A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React, TypeScript, and Tailwind CSS for a clean and interactive experience.

## 🚀 Live Demo
[View Live Portfolio](https://your-deployment-url.com)

## ✨ Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Sections**: 
  - Hero with animated code display
  - About section with personal introduction
  - Skills showcase with categorized tech stack
  - Experience timeline
  - Projects gallery with live demos
  - Contact form with email integration
- **Smooth Animations**: Framer Motion powered animations
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Technologies Used

### Frontend
- **React.js** with Vite (TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** components
- **Lucide React** for icons

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code quality
- **Vite** for fast development

## 📁 Project Structure

```
portfolio-v2/
├── src/
│   ├── components/
│   │   ├── magicui/          # Custom animated components
│   │   └── ui/               # Reusable UI components
│   ├── pages/
│   │   ├── Hero/             # Landing section
│   │   ├── About/            # Personal introduction
│   │   ├── Skills/           # Tech stack showcase
│   │   ├── Experience/       # Professional journey
│   │   ├── Projects/         # Project gallery
│   │   ├── Contact/          # Contact form
│   │   └── Header/           # Navigation
│   ├── config/
│   │   └── config.ts         # Personal information
│   ├── assets/
│   │   └── projects/         # Project images
│   └── provider/
│       └── page.tsx          # Theme provider
├── public/
└── package.json
```

## 🎯 Sections Overview

### Hero Section
- Animated welcome message
- Interactive code display
- Professional introduction
- Call-to-action buttons

### About Section
- Personal story and background
- Professional philosophy
- Current focus and goals

### Skills Section
- **Frontend Development**: React, Next.js, TypeScript, Tailwind CSS
- **Programming Languages**: C/C++, Python, Java
- **Backend Development**: Node.js, Express.js, n8n
- **Databases**: MySQL, PostgreSQL, MongoDB
- **Tools & UI/UX**: VS Code, Figma, Vite
- **CS Fundamentals**: DS & Algorithms, OOP, DBMS, Computer Networks
- **Soft Skills**: Communication, Problem Solving, Team Collaboration

### Experience Section
- **Backend Intern** at McCarthy (2025)
- **AI Intern (Virtual)** at Edunet Foundation (2025)

### Projects Section
- **Inaikka**: Video calling web app built with Next.js and WebRTC
- **Ytheys**: Hackathon project connecting corporations with startups
- **Hospital Management System**: Complete system with PHP and MySQL

### Contact Section
- Interactive contact form
- Email integration
- Location and contact details

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   cd your-portfolio-repo
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
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 🎨 Customization

### Personal Information
Update `src/config/config.ts` with your details:
```typescript
const config = {
  information: {
    name: "Your Name",
    helloText: "Hello",
    welcomeText: "✨ Welcome to my universe",
    title: "Your Title",
  },
  // ... other configurations
};
```

### Skills & Experience
- Update skills in `src/pages/Skills/page.tsx`
- Modify experience in `src/pages/Experience/page.tsx`
- Add your projects in `src/pages/Projects/page.tsx`

### Contact Form
Update the Web3Forms access key in `src/pages/Contact/page.tsx`:
```typescript
form.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices
- 📱 Tablets
- 💻 Desktop computers
- 🖥️ Large screens

## 🌙 Theme Support

- **Dark Mode**: Default theme with black background
- **Light Mode**: Clean white background
- **Auto-switching**: Smooth transitions between themes

## 📧 Contact

- **Email**: mvnsandeepsandeep@gmail.com
- **Location**: Chennai, Tamil Nadu, India
- **GitHub**: https://github.com/SandeepNaidu228

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Made with ❤️ by M V N Sandeep Naidu**
