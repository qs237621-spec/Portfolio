export const projects = [
  {
    id: "1",
    slug: "react-todo-app",
    title: "Modern Todo Application",
    description: "A feature-rich todo application built with React and Tailwind CSS, featuring drag-and-drop functionality, local storage persistence, and beautiful animations.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Web App", "Productivity"],
    image: "/images/projects/todo-app.webp",
    featured: true,
    links: {
      live: "https://todo-app-demo.vercel.app",
      github: "https://github.com/namangupta/todo-app"
    },
    tech: ["React", "Tailwind CSS", "HTML5", "LocalStorage", "Framer Motion"],
    challenges: "Implementing smooth drag-and-drop while maintaining performance with large todo lists.",
    learnings: "Learned advanced React state management and CSS transitions."
  },
  {
    id: "2",
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment integration using modern web technologies.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Full Stack"],
    image: "/images/projects/ecommerce.webp",
    featured: true,
    links: {
      live: "https://ecommerce-demo.vercel.app",
      github: "https://github.com/namangupta/ecommerce-platform"
    },
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
    challenges: "Building secure payment integration and managing complex state across multiple components.",
    learnings: "Gained experience with full-stack development and payment processing."
  },
  {
    id: "3",
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive charts, and beautiful weather visualizations using multiple API integrations.",
    tags: ["React", "API Integration", "Charts", "Weather App", "Data Visualization"],
    image: "/images/projects/weather-dashboard.webp",
    featured: false,
    links: {
      live: "https://weather-dashboard.vercel.app",
      github: "https://github.com/namangupta/weather-dashboard"
    },
    tech: ["React", "Chart.js", "OpenWeather API", "Geolocation API", "Tailwind CSS"],
    challenges: "Handling multiple API calls and creating responsive chart visualizations.",
    learnings: "Mastered API integration and data visualization techniques."
  },
  {
    id: "4",
    slug: "task-management",
    title: "Task Management System",
    description: "Collaborative task management system with real-time updates, team collaboration features, and Kanban board interface.",
    tags: ["React", "Firebase", "Real-time", "Collaboration", "Productivity"],
    image: "/images/projects/task-management.webp",
    featured: true,
    links: {
      live: "https://task-manager-demo.vercel.app",
      github: "https://github.com/namangupta/task-management"
    },
    tech: ["React", "Firebase", "Firestore", "Authentication", "Tailwind CSS"],
    challenges: "Implementing real-time synchronization between multiple users.",
    learnings: "Learned Firebase integration and real-time database management."
  },
  {
    id: "5",
    slug: "ml-image-classifier",
    title: "ML Image Classifier",
    description: "Machine learning web application for image classification using TensorFlow.js, allowing users to upload and classify images in real-time.",
    tags: ["Machine Learning", "TensorFlow.js", "React", "AI", "Image Processing"],
    image: "/images/projects/ml-classifier.webp",
    featured: false,
    links: {
      live: "https://ml-classifier.vercel.app",
      github: "https://github.com/namangupta/ml-image-classifier"
    },
    tech: ["TensorFlow.js", "React", "Canvas API", "Node.js", "Python"],
    challenges: "Integrating ML models in the browser and optimizing performance.",
    learnings: "Explored the intersection of web development and machine learning."
  },
  {
    id: "6",
    slug: "blog-platform",
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, code syntax highlighting, comments system, and admin dashboard for content management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Markdown", "Blog"],
    image: "/images/projects/blog-platform.webp",
    featured: false,
    links: {
      live: "https://blog-platform.vercel.app",
      github: "https://github.com/namangupta/blog-platform"
    },
    tech: ["React", "Node.js", "Express", "MongoDB", "MDX", "Prism.js"],
    challenges: "Building a rich text editor and implementing markdown rendering.",
    learnings: "Developed content management systems and markdown processing."
  }
]

export const projectTags = [
  "React",
  "Node.js",
  "JavaScript",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "Firebase",
  "Machine Learning",
  "API Integration",
  "Full Stack",
  "Web App",
  "Productivity",
  "AI",
  "Data Visualization"
]