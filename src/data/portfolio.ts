/**
 * Portfolio Data Configuration
 * 
 * Edit this file to update any content displayed on the website.
 * You should never need to modify component code just to change text or links.
 */

export const portfolioData = {
  // Personal Details
  personal: {
    name: "Sana Firdous",
    // These roles rotate automatically with a typing effect in the Hero section
    roles: [
      "Software Engineer",
      "Java Developer",
      "Backend Developer",
      "Problem Solver"
    ],
    // The short pitch displayed below the roles
    shortBio: "Software Engineer with expertise in Java, Python, SQL, and modern web technologies. Experienced in developing full-stack and AI-powered applications, with a passion for designing scalable solutions, writing clean code, and continuously expanding technical knowledge.",
    // The detailed bio displayed in the About section
    longBio: "I am a passionate software engineer with a deep foundation in backend development and computer science principles. Over the years, I have focused on building highly concurrent, distributed systems primarily using Java and the Spring Boot ecosystem. I enjoy solving complex architectural challenges, optimizing database performance, and designing clean APIs. When I'm not writing code, I mentor other developers, contribute to open-source libraries, and explore modern web standards to build rich, end-to-end applications.",
    // Profile statistics shown in the About section
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "20+", label: "Projects Completed" },
      { value: "500+", label: "LeetCode Solved" },
      { value: "99.9%", label: "System Uptime" }
    ],
    // Path to resume (e.g. placed inside the public folder as /resume.pdf)
    resumeUrl: "/Sana_Firdous_Resume.pdf"
  },

  // Social Profile Links
  socialLinks: {
    github: "https://github.com/SanaFirdous-105",
    linkedin: "https://www.linkedin.com/in/sana-firdous-b244892b3/",
    twitter: "https://twitter.com",
    email: "sanafirdous.105@gmail.com"
  },

  // Categories of Skills
  skills: [
    {
      category: "Programming Languages",
      items: ["Java ", "Python", "SQL"]
    },
    {
      category: "Core Concepts",
      items: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "Software Development Life Cycle (SDLC)"]
    },
    {
    category: "Frameworks & Tools",
      items: ["GIT", "Power BI", "Excel"]
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScrip", "React", "Node.js", "REST APIs"]
    },
    {
      category: "Data Science & Machine Learning:",
      items: ["Machine Learning", "NumPy", "Pandas ", "Scikit-learn"]
    }
  ],

  // Projects Showcased (Make sure image paths exist in public/ or use external URLs)
  projects: [
    {
      title: "WellTrack AI",
      description: "AI-powered Health & Wellness Monitoring Platform built using React, Node.js, Express, FastAPI, MongoDB, and Scikit-learn. Features personalized health insights, nutrition analysis, sleep assessment, activity recommendations, and NLP-powered wellness monitoring.",
      tags: ["React", "Node.js", "FastAPI", "MongoDB", "Python","Machine Learning"],
      githubUrl: "https://github.com/SanaFirdous-105/WellTrack-AI",
      liveUrl: "https://coursera.org/share/f248c6fc4ae4de4fa058f976911106aa"
    },
    {
      title: "Smart Study Scheduler – AI-Based Study Planning System",
      description: "An intelligent study planning application that generates personalized study schedules using machine learning. The platform analyzes task priority, deadlines, workload, and subject difficulty to create optimized study plans while helping students improve productivity and time management.",
      tags: ["React", "FastAPI", "Python", "Scikit-learn", "Machine Learning"],
      githubUrl: "https://github.com/SanaFirdous-105/SmartStudyScheduler",
      liveUrl: "https://example.com"
    },
    {
      title: "NexaWell – AI-Powered Health & Wellness Platform",
      description: "AI-powered health and wellness platform that provides personalized health insights, activity recommendations, sleep assessment, nutrition tracking, and wellness analytics using machine learning.",
      tags: ["React", "Node.js", "Express.js", "FastAPI", "MongoDB","Python","Scikit-learn"],
      githubUrl: "https://github.com/SanaFirdous-105/nexawell",
      liveUrl: "https://example.com"
    }
  ],

  // Professional Work Experience
  experience: [
    {
      role: "Generative AI Intern",
      company: "Synycs Group",
      location: "Hyderabad, India",
      duration: "June 2025 – July 2025",
      description: [
        "Gained practical experience in Machine Learning, Deep Learning, and Generative AI concepts through hands-on projects and guided learning.",
      "Worked with TensorFlow and Keras to build, train, and evaluate small-scale deep learning models while understanding data preprocessing and model optimization techniques.",
      "Explored neural networks, model training workflows, and AI development best practices to strengthen practical implementation skills."
      ]
    }
    
  ],

  // Academic History
  education: [
    {
      degree: "BTach in Information Technology",
      institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
      duration: "2022 - 2026",
      details: "Specialized in Information Technology"
    },
    {
      degree: "Intermediate",
      institution: "Sri sanjeevni junior college",
      duration: "2020 - 2022",
      details: "MPC(Mathematics, Physics, and Chemistry)"
    },
    {
      degree: "High school",
      institution: "Geetham High School",
      duration: "2019 - 2020",
      details: "Education"
    }

  ],

  // Certifications
  certificates: [
    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI, Stanford University",
      date: "2025",
      url: "https://coursera.org/share/f248c6fc4ae4de4fa058f976911106aa"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "2025",
      url: "https://www.coursera.org/account/accomplishments/records/VTOFPIJHP1LO"
    },
    {
      title: "DevOps on AWS: Operate and Monitor",
      issuer: "Amazon Web Services",
      date: "2025",
      url: "https://www.coursera.org/account/accomplishments/records/A9LUBVURXE78"
    },
    {
      title: "GIT, GitLab, GitHub Fundamentals for Software Developers ",
      issuer: "Udemy",
      date: "2025",
      url: "https://www.udemy.com/certificate/UC-e2a5f8ab-57c6-4ea7-a34c-d2bf97904deb/"
    }
    

  ],

  // Contact Information & Setup
  contact: {
    email: "sanafirdous.105@gmail.comm",
    phone: "+91 (6281188656)",
    location: "Hyderabad , India"
  }
};
