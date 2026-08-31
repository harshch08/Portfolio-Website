// Portfolio data extracted directly from Harsh Chauhan's Resume
export const portfolioData = {
  personal: {
    name: "Harsh Chauhan",
    title: "Full Stack Developer",
    tagline: "Building scalable microservices, full-stack architectures & ML-enabled solutions",
    email: "harsh.main0810@gmail.com",
    phone: "+91-8273790108",
    location: "Kolkata, India",
    bio: "Full Stack Developer skilled in building scalable microservices-based applications using Java, Spring Boot, and Angular. Experienced in REST API design, performance optimization, and developing data-driven and ML-enabled solutions. Strong foundation in DSA, focused on building efficient, production-ready systems.",
    social: {
      linkedin: "https://linkedin.com/in/harsh0810",
      github: "https://github.com/harshch08",
      leetcode: "https://leetcode.com/harshch08",
      portfolio: "#"
    }
  },
  
  skills: {
    languages: ["Java", "Python", "C++", "SQL", "TypeScript", "JavaScript"],
    frameworks: ["Spring Boot", "Angular", "Node.js", "Express.js", "REST APIs", "React"],
    aiMl: ["Gen AI & LLMs", "RAG Systems", "Transformer Models", "CLIP Embeddings", "NLP (TF-IDF)", "Recommendation Systems", "Scikit-Learn", "Pandas & NumPy"],
    databases: ["MySQL", "MongoDB", "NoSQL"],
    tools: ["Git & GitHub", "Apache Kafka", "CI/CD Pipelines", "Tomcat", "Jboss", "AWS"],
    concepts: ["Data Structures & Algorithms", "Microservices Architecture", "System Design", "Monolith Migration", "OOP", "RCA & Performance Tuning"]
  },
  
  experience: [
    {
      company: "Tata Consultancy Services",
      position: "Full Stack Developer",
      duration: "July 2025 – Present",
      location: "Kolkata, India",
      technologies: ["Java", "Spring Boot", "Microservices", "Angular", "MySQL", "CI/CD Pipelines", "REST APIs", "RCA"],
      achievements: [
        "Designed and implemented microservices end-to-end during a monolithic-to-microservices migration using Java Spring Boot, improving system scalability and fault isolation across distributed services.",
        "Developed RESTful APIs with inter-service communication patterns, reducing average API response time by ~30% through query optimization and service decoupling.",
        "Engineered GST and multi-rate tax computation engine for a Travel Invoice Management System, automating bulk invoice processing and reducing manual effort by 45% within Agile delivery cycles.",
        "Led RCA for critical production incidents, coordinating cross-team fixes and deployments via CI/CD pipelines to maintain system uptime and reliability."
      ]
    }
  ],
  
  projects: [
    {
      id: "joota-junction",
      title: "Joota Junction",
      category: "Full-Stack AI-Powered E-Commerce",
      tagline: "Intelligent footwear commerce with CLIP visual search & Gemini AI",
      image: "/projects/JootaJunction.png",
      accent: "#818cf8",
      gradient: "from-indigo-500/20 via-purple-600/10 to-transparent",
      badgeGradient: "from-indigo-500 to-purple-600",
      description: "Architected and developed a full-stack AI-powered footwear retail platform featuring CLIP embedding image search, Gemini-automated catalog generation, and real-time operations analytics.",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB", "Gemini API", "CLIP Embeddings", "Cosine Similarity", "REST APIs"],
      metrics: [
        { label: "Manual Overhead", value: "-60%" },
        { label: "Discovery Efficiency", value: "+75%" },
        { label: "AI Search", value: "CLIP / Gemini" }
      ],
      features: [
        "Architected and developed a scalable admin operations dashboard with real-time order tracking, inventory management, and sales analytics, streamlining internal workflows and reducing manual operational overhead by 60%.",
        "Engineered an AI-powered visual product search pipeline using CLIP embeddings and cosine similarity, enabling image-based shoe discovery with highly relevant matching results.",
        "Integrated automated Gemini-powered product content generation to accelerate catalog management and improve product discovery efficiency by 75%."
      ],
      github: "https://github.com/harshch08",
      demo: "https://joota-junciton.vercel.app/"
    },
    {
      id: "movie-recommender",
      title: "Movie Recommender System",
      category: "AI & Machine Learning",
      tagline: "Content-based movie recommendation engine with interactive AI chatbot",
      image: "/projects/MovieRecommendationSystem.png",
      accent: "#38bdf8",
      gradient: "from-sky-500/20 via-blue-600/10 to-transparent",
      badgeGradient: "from-sky-500 to-blue-600",
      description: "Built and optimized a high-accuracy content-based movie recommendation engine leveraging TF-IDF vectorization across 5,000+ titles with live TMDB integration and conversational discovery.",
      technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "NLP (TF-IDF)", "Streamlit", "TMDB API", "REST APIs"],
      metrics: [
        { label: "Dataset Scale", value: "5,000+ Movies" },
        { label: "Vector Ranking", value: "TF-IDF + Cosine" },
        { label: "Workflow", value: "AI Chatbot" }
      ],
      features: [
        "Built and optimized a content-based movie recommendation engine leveraging TF-IDF vectorization and cosine similarity across a dataset of 5,000+ movies, improving recommendation relevance and similarity ranking accuracy.",
        "Integrated TMDB APIs for real-time poster and metadata retrieval to deliver rich multimedia recommendations.",
        "Engineered an interactive chatbot-driven recommendation workflow in Streamlit to deliver contextual and personalized movie discovery conversations."
      ],
      github: "https://github.com/harshch08",
      demo: "https://cinematic-ai-movie-recommendor.streamlit.app/"
    },
    {
      id: "voice-of-bharat",
      title: "Voice of Bharat",
      category: "Freelance Digital Platform",
      tagline: "Real-time news platform with client-side caching & Supabase",
      image: "/projects/VoiceOfBharat.png",
      accent: "#f43f5e",
      gradient: "from-rose-500/20 via-orange-600/10 to-transparent",
      badgeGradient: "from-rose-500 to-orange-600",
      description: "Delivered an end-to-end digital media application with client-side caching, optimized REST endpoints, and secure cloud content management for seamless high-volume reading.",
      technologies: ["React", "Node.js", "Express.js", "Supabase", "REST APIs", "Tailwind CSS"],
      metrics: [
        { label: "Page Load Speed", value: "+60%" },
        { label: "API Efficiency", value: "+45%" },
        { label: "Uptime", value: "99.9%" }
      ],
      features: [
        "Implemented client-side caching in React, reducing repeated API requests and improving article load times by 60%.",
        "Created secure authentication and editorial content management with Supabase cloud infrastructure.",
        "Delivered scalable architecture and performance optimization independently as a freelance project."
      ],
      github: "https://github.com/harshch08",
      demo: "https://voiceofbharat.live"
    },
    {
      id: "doctor-appointment",
      title: "Doctor Appointment System",
      category: "Freelance Healthcare Solution",
      tagline: "Smart clinic management & intuitive patient booking SaaS",
      image: "/projects/doctor-appointment.jpg",
      accent: "#14b8a6",
      gradient: "from-teal-500/20 via-emerald-600/10 to-transparent",
      badgeGradient: "from-teal-500 to-emerald-600",
      description: "A comprehensive medical clinic SaaS platform featuring real-time doctor schedule availability, multi-role authentication, and end-to-end patient record workflows.",
      technologies: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3", "Bootstrap"],
      metrics: [
        { label: "Booking Speed", value: "-65% time" },
        { label: "Admin Efficiency", value: "+75%" },
        { label: "Reliability", value: "99.5%" }
      ],
      features: [
        "Implemented an intuitive appointment booking interface with real-time doctor availability checking.",
        "Developed secure user authentication system with role-based access control for doctors, patients, and admins.",
        "Built comprehensive administrative dashboard for managing patient records, schedules, and billing."
      ],
      github: "https://github.com/harshch08",
      demo: "https://github.com/harshch08"
    }
  ],
  
  education: [
    {
      degree: "Master of Computer Applications",
      institution: "Graphic Era University",
      duration: "2023 - 2025",
      cgpa: "8.4"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Kumaun University", 
      duration: "2020 - 2023",
      percentage: "73.6%"
    }
  ],

  achievements: [
    {
      title: "Freelance Solutions Delivery",
      description: "Delivered multiple end-to-end freelance web applications, translating client requirements into scalable solutions while independently handling system architecture, deployment, and performance optimization to improve digital presence and user engagement."
    },
    {
      title: "Monolithic-to-Microservices Migration",
      description: "Spearheaded end-to-end microservices migration and engineered automated multi-rate tax computation engines for high-volume invoice processing at TCS."
    },
    {
      title: "AI & Machine Learning Innovation",
      description: "Engineered innovative AI solutions including CLIP visual embedding pipelines, Gemini-driven catalog generation, and TF-IDF conversational recommender systems."
    }
  ]
};