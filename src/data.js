export const skills = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Material UI"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT"] },
  { title: "Database", items: ["MongoDB", "Mongoose", "SQL Basics"] },
  { title: "Tools & Deployment", items: ["Git", "GitHub", "Postman", "Vite", "Netlify", "Vercel", "Render"] },
  { title: "AI & Integrations", items: ["Gemini API", "LLMs", "Embeddings", "RAG", "Stripe", "Cloudinary"] },
];

export const projects = [
  {
    name: "Money Metrics",
    type: "Personal finance dashboard",
    description: "A full-stack personal finance application for tracking income and expenses, exploring financial insights through interactive charts, and generating downloadable reports. Includes advanced filtering and secure email OTP password recovery.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Recharts"],
    live: "https://moneymetrics-fe.netlify.app",
    github: "https://github.com/gkesavan446/moneymetrics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Analytics dashboard displayed on a laptop screen",
    color: "money",
  },
  {
    name: "AskMyDoc",
    type: "AI document assistant",
    description: "An AI-powered document assistant that lets users upload PDF files and ask questions based on their content using retrieval-augmented generation, embeddings, vector search, and source-aware responses.",
    tags: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Gemini API", "Embeddings", "RAG"],
    live: "https://askmydoc-rag.netlify.app",
    github: "https://github.com/gkesavan446/askmydocfe",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Documents, notes and a laptop on a working desk",
    color: "docs",
  },
  {
    name: "Trendz",
    type: "Full-stack e-commerce",
    description: "A full-stack e-commerce application where users can browse and filter products, manage their cart, make secure online payments, and view orders. It includes an admin dashboard for managing products and inventory.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Stripe", "Cloudinary"],
    live: "https://trendz-fe.netlify.app",
    github: "https://github.com/gkesavan446/trendzFE",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Modern fashion retail store interior",
    color: "trendz",
  },
];
