import { Project } from "@/app/entities/project";

export const projects: Project[] = [
  {
    title: "Resume screener",
    slug: "resume-screener",
    description:
      "AI-powered resume screening tool that analyses how well a candidate's resume matches a job description. Users upload a PDF resume, paste a job description, and receive an instant match score, skills gap analysis, and AI-generated resume bullet rewrites",
    concept:
      "AI resume screener that scores resume-to-job-description fit, surfaces missing skills, and rewrites weak bullet points using streaming AI responses.",
    displayTechnologies: ["Next.js", "TypeScript", "PostgreSQL", "Open AI API"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Open AI API",
      "Tanstack Query",
    ],
    features: [
      {
        title: "AI Match Score",
        description:
          "Analyses resume against a job description and returns a percentage match score",
      },
      {
        title: "Skills Gap Analysis",
        description:
          "Identifies matched and missing skills from the job description",
      },
      {
        title: "AI Bullet Rewriter",
        description:
          "Rewrites weak resume bullet points inline with streaming AI responses.",
      },
      {
        title: "Cover Letter Generator",
        description:
          "Generates a tailored cover letter based on the uploaded resume and job description. Stream the output in real time and copy the result.",
      },
      {
        title: "Analysis History",
        description:
          "Saves all past analyses with match scores, resume filename, job title, and company. Click any card to reopen the full report.",
      },
    ],
    futureImprovements: [
      {
        title: "ATS Score Simulation",
        description:
          "Simulate how an Applicant Tracking System would parse and rank the resume independently of the AI score.",
      },
      {
        title: "Stripe Free Tier",
        description:
          "Gate usage to 3 free analyses per month with a Stripe-powered pro subscription for unlimited access.",
      },
    ],
    thumbnail: {
      src: "/projects/resumatch/result.png",
      alt: "Resumatch — home",
    },
    gallery: [
      {
        src: "/projects/resumatch/upload.png",
        alt: "Upload page — resume PDF drop zone and job description input",
        type: "feature",
      },
      {
        src: "/projects/resumatch/analyse.png",
        alt: "Generating screen for results",
        type: "feature",
      },
      {
        src: "/projects/resumatch/cover-letter.png",
        alt: "Generate a tailored cover letter for the job",
        type: "feature",
      },
      {
        src: "/projects/resumatch/history.png",
        alt: "Analysis history — saved scans with scores and dates",
        type: "feature",
      },
      {
        src: "/projects/resumatch/dashboard.png",
        alt: "Bullet rewriter — streaming AI rewrite with accept and regenerate",
        type: "feature",
      },
      {
        src: "/projects/resumatch/auth.png",
        alt: "Authentication login/signup screen",
        type: "card",
      },
    ],
    live: "https://resume-screener-xi-beryl.vercel.app/",
    github: "https://github.com/Dev-EthanR/resume-screener",
  },
  {
    title: "Entertainment Web App",
    slug: "entertainment-web-app",
    description:
      "Entertainment Web App is a full-stack application that allows users to discover, search, and explore trending movies and TV series in real time. The platform features responsive layouts, infinite scrolling for seamless browsing, and bookmarking functionality so users can save their favorite content. Optimized search with debounced input improves performance while reducing unnecessary API calls.",
    concept:
      "Lets users discover, search, and explore movies and TV series, showing sections like trending titles and popular content. Users can also save content to their bookmarks.",
    displayTechnologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
    ],
    features: [
      {
        title: "Real-Time Trending Discovery",
        description: "Discover trending movies and TV series in real time.",
      },
      {
        title: "Infinite Scrolling Experience",
        description: "Seamlessly browse content with infinite scrolling.",
      },
      {
        title: "Bookmark Management",
        description: "Save and manage bookmarks for your favorite titles.",
      },
      {
        title: "Fully Responsive Design",
        description:
          "Optimized for all devices with a fully responsive design.",
      },
      {
        title: "Debounced Smart Search",
        description:
          "Optimized search with debounced input to reduce API calls.",
      },
    ],
    futureImprovements: [
      {
        title: "Detailed Content Pages",
        description:
          "Full detail pages including cast, crew, ratings, trailers, and reviews.",
      },
    ],
    thumbnail: {
      src: "/projects/entertainment-web-app/home.png",
      alt: "Entertainment Web App homepage showing trending movies and TV series",
    },
    gallery: [
      {
        src: "/projects/entertainment-web-app/bookmarks.png",
        alt: "Bookmarks page — saved movies and TV series",
        type: "desktop",
      },
      {
        src: "/projects/entertainment-web-app/search.png",
        alt: "Search — live filtering across all titles",
        type: "desktop",
      },
      {
        src: "/projects/entertainment-web-app/mobile.png",
        alt: "Mobile layout — responsive browsing experience",
        type: "mobile",
      },
      {
        src: "/projects/entertainment-web-app/auth.png",
        alt: "Authentication — login and sign up screen",
        type: "card",
      },
    ],
    live: "https://entertainment-web-app-silk.vercel.app/",
    github: "https://github.com/Dev-EthanR/entertainment-web-app",
  },

  {
    title: "Job Application Tracker",
    slug: "job-application-tracker",
    description:
      "Job Application Tracker is a full-stack productivity app designed to help users manage their job search workflow. Users can move applications between stages using drag-and-drop interactions, visualize progress through analytics, and manage entries through intuitive modal forms.",
    concept:
      "Helps users manage job applications using a Kanban-style workflow with drag-and-drop functionality and analytics.",
    displayTechnologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
    ],
    features: [
      {
        title: "Kanban Workflow",
        description:
          "Track applications across Applied, Interview, Offer, and Rejected stages.",
      },
      {
        title: "Drag and Drop Interactions",
        description:
          "Move job applications seamlessly between workflow columns.",
      },
      {
        title: "Application Analytics",
        description: "Visualize application progress using charts and graphs.",
      },
    ],
    futureImprovements: [
      {
        title: "User Authentication",
        description: "Add secure credentials-based authentication.",
      },
      {
        title: "Introduce caching",
        description:
          "Implement caching to improve performance and reduce API calls.",
      },
    ],
    thumbnail: {
      src: "/projects/job-tracker/desktop.png",
      alt: "Job Application Tracker desktop Kanban board",
    },
    gallery: [
      {
        src: "/projects/job-tracker/analytics.png",
        alt: "Analytics — applications broken down by stage",
        type: "feature",
      },
      {
        src: "/projects/job-tracker/modal.png",
        alt: "Add application modal — form with validation",
        type: "card",
      },
      {
        src: "/projects/job-tracker/application-details.png",
        alt: "Application detail — status, date and notes",
        type: "card",
      },
      {
        src: "/projects/job-tracker/mobile.png",
        alt: "Mobile layout — kanban on small screen",
        type: "mobile",
      },
    ],
    live: "https://job-tracker-fullstack-two.vercel.app",
    github: "https://github.com/Dev-EthanR/job-tracker-fullstack",
  },

  {
    title: "Note Taking App",
    slug: "note-taking-app",
    description:
      "Note Taking App is a full-stack productivity platform that enables users to create, organize, and manage notes efficiently. The application includes tagging, archiving, customizable themes, advanced search, and accessibility-focused interactions.",
    concept:
      "Allows users to create, organize, archive, search, and customize notes with a focus on accessibility and productivity.",
    displayTechnologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      {
        title: "Complete Note Management",
        description: "Create, update, archive, and delete notes with ease.",
      },
      {
        title: "Advanced Search and Filtering",
        description: "Search notes by title, content, and tags.",
      },
      {
        title: "Customizable Themes",
        description: "Personalize the app with custom colors and fonts.",
      },
    ],
    futureImprovements: [
      {
        title: "Version History",
        description: "Restore previous note versions when needed.",
      },
      {
        title: "Auto-save with debounce",
        description:
          "Implement auto-saving of notes with debounce to improve performance.",
      },
      {
        title: "Forgot Password",
        description:
          "Allow users to reset their passwords if they forget them.",
      },
      {
        title: "WYSIWYG editor",
        description: "Allow users to create rich text content for their notes.",
      },
      {
        title: "Performance optimizations",
        description:
          "Improve the app's performance under various usage scenarios.",
      },
    ],
    thumbnail: {
      src: "/projects/note-taking/home.png",
      alt: "Note Taking App homepage with notes dashboard",
    },
    gallery: [
      {
        src: "/projects/note-taking/create.png",
        alt: "Create note — title, body and tag input",
        type: "card",
      },
      {
        src: "/projects/note-taking/archived.png",
        alt: "Archived notes — soft-deleted with restore option",
        type: "desktop",
      },
      {
        src: "/projects/note-taking/settings.png",
        alt: "Settings — theme and font customisation",
        type: "card",
      },
      {
        src: "/projects/note-taking/search.png",
        alt: "Search — filter notes by title, content and tags",
        type: "feature",
      },
      {
        src: "/projects/note-taking/mobile1.png",
        alt: "Mobile layout — notes list on small screen",
        type: "mobile",
      },
      {
        src: "/projects/note-taking/auth.png",
        alt: "Authentication — login and sign up screen",
        type: "card",
      },
    ],
    live: "https://note-taking-nine-blond.vercel.app",
    github: "https://github.com/Dev-EthanR/note-taking",
  },

  {
    title: "Movie Watchlist",
    slug: "movie-watchlist",
    description:
      "Movie Watchlist is a React-based application that allows users to search for movies and TV shows, then save them into a personal watchlist. The app provides persistent local storage support, responsive layouts, and an intuitive browsing experience for tracking entertainment content users want to watch later.",
    concept:
      "Allows users to search for movies and TV series and save them into a personalized watchlist.",
    displayTechnologies: ["JavaScript", "React"],
    technologies: ["JavaScript", "React", "TailwindCSS", "API"],
    features: [
      {
        title: "Movie and TV Search",
        description: "Search entertainment content by title.",
      },
      {
        title: "Personal Watchlist",
        description: "Save movies and TV series into a custom watchlist.",
      },
      {
        title: "Persistent Storage",
        description: "Keep watchlist data saved using local storage.",
      },
      {
        title: "Responsive Design",
        description: "Optimized layouts across desktop and mobile devices.",
      },
    ],
    futureImprovements: [
      {
        title: "Detailed Movie Pages",
        description:
          "Display additional information including ratings and overviews.",
      },
      {
        title: "Filtering and Sorting",
        description: "Allow sorting by genre, year, and ratings.",
      },
    ],
    thumbnail: {
      src: "/projects/movie-watchlist/homep.png",
      alt: "Movie Watchlist homepage interface",
    },
    gallery: [
      {
        src: "/projects/movie-watchlist/mobile.png",
        alt: "Mobile layout — responsive watchlist experience",
        type: "mobile",
      },
      {
        src: "/projects/movie-watchlist/search.png",
        alt: "Search — find movies and TV shows by title",
        type: "desktop",
      },
      {
        src: "/projects/movie-watchlist/watchlist.png",
        alt: "Watchlist — saved movies and series",
        type: "desktop",
      },
    ],
    live: "https://movie-watchlist-plum-pi.vercel.app/",
    github: "https://github.com/Dev-EthanR/Movie-Watchlist/tree/main",
  },

  {
    title: "Password Generator",
    slug: "password-generator",
    description:
      "Password Generator is a simple web application focused on helping users create secure passwords quickly and efficiently. Users can customize password length, evaluate password strength, and copy generated passwords directly to the clipboard with a single click.",
    concept:
      "Generates strong and secure passwords with customizable settings and password strength feedback.",
    displayTechnologies: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      {
        title: "Secure Password Generation",
        description: "Generate randomized secure passwords instantly.",
      },
      {
        title: "Adjustable Password Length",
        description: "Customize password length based on user preferences.",
      },
      {
        title: "Clipboard Support",
        description: "Copy generated passwords with one click.",
      },
      {
        title: "Password Strength Indicator",
        description: "Display password strength feedback visually.",
      },
    ],
    futureImprovements: [],
    thumbnail: {
      src: "/projects/password-generator/home.png",
      alt: "Password Generator homepage with generated password",
    },
    gallery: [
      {
        src: "/projects/password-generator/generate.png",
        alt: "Generator — character options and length slider",
        type: "feature",
      },
      {
        src: "/projects/password-generator/copy.png",
        alt: "Copy to clipboard — one-click copy interaction",
        type: "feature",
      },
      {
        src: "/projects/password-generator/weak.png",
        alt: "Strength indicator — weak password visual feedback",
        type: "feature",
      },
    ],
    live: "https://password-generator-app-pearl.vercel.app/",
    github: "https://github.com/Dev-EthanR/password-generator-app",
  },

  {
    title: "BMI Calculator",
    slug: "bmi-calculator",
    description:
      "BMI Calculator is a clean and user-friendly application that helps users calculate their Body Mass Index based on height and weight inputs. The application supports both metric and imperial systems, provides instant feedback, and displays BMI categories with corresponding health messages.",
    concept:
      "Allows users to calculate BMI instantly using metric or imperial measurement systems.",
    displayTechnologies: ["JavaScript"],
    technologies: ["HTML", "SASS", "JavaScript"],
    features: [
      {
        title: "Instant BMI Calculation",
        description:
          "Calculate BMI immediately after entering height and weight.",
      },
      {
        title: "BMI Category Feedback",
        description: "Display BMI category and result messaging.",
      },
      {
        title: "Dual Measurement Support",
        description: "Supports both metric and imperial systems.",
      },
      {
        title: "Responsive Interface",
        description: "Optimized for mobile, tablet, and desktop devices.",
      },
    ],
    futureImprovements: [],
    thumbnail: {
      src: "/projects/bmi-calculator/home.png",
      alt: "BMI Calculator homepage interface",
    },
    gallery: [
      {
        src: "/projects/bmi-calculator/mobile.png",
        alt: "Mobile layout — calculator on small screen",
        type: "mobile",
      },
      {
        src: "/projects/bmi-calculator/tablet.png",
        alt: "Tablet layout — mid-size responsive view",
        type: "card",
      },
      {
        src: "/projects/bmi-calculator/page.png",
        alt: "Full page — complete calculator interface",
        type: "desktop",
      },
      {
        src: "/projects/bmi-calculator/metric.png",
        alt: "Metric mode — height and weight in cm and kg",
        type: "card",
      },
      {
        src: "/projects/bmi-calculator/imperial.png",
        alt: "Imperial mode — height and weight in ft and lbs",
        type: "card",
      },
    ],
    live: "https://bmi-calculator-seven-kappa.vercel.app/",
    github: "https://github.com/Dev-EthanR/bmi-calculator/tree/main",
  },

  {
    title: "Frontend Quiz App",
    slug: "frontend-quiz-app",
    description:
      "Frontend Quiz App is an engaging educational application that allows users to test their understanding of frontend topics including HTML, CSS, JavaScript, and Accessibility. The app provides instant answer feedback, score summaries, and responsive layouts for a smooth experience across all devices.",
    concept:
      "Tests users on frontend development topics through interactive multiple-choice quizzes.",
    displayTechnologies: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      {
        title: "Multiple Choice Questions",
        description: "Answer frontend-related quiz questions interactively.",
      },
      {
        title: "Instant Feedback",
        description: "Receive immediate feedback after each answer.",
      },
      {
        title: "Final Score Summary",
        description: "Review quiz performance at the end of each session.",
      },
      {
        title: "Responsive Design",
        description: "Optimized for mobile, tablet, and desktop screens.",
      },
    ],
    futureImprovements: [
      {
        title: "Question Timer",
        description: "Introduce countdown timers for each question.",
      },
      {
        title: "Score Tracking",
        description: "Store and display previous quiz scores.",
      },
    ],
    thumbnail: {
      src: "/projects/frontend-quiz/home.png",
      alt: "Frontend Quiz App homepage",
    },
    gallery: [
      {
        src: "/projects/frontend-quiz/select.png",
        alt: "Answer selection — multiple choice question",
        type: "card",
      },
      {
        src: "/projects/frontend-quiz/correct.png",
        alt: "Correct answer — instant feedback state",
        type: "card",
      },
      {
        src: "/projects/frontend-quiz/incorrect.png",
        alt: "Incorrect answer — error feedback state",
        type: "card",
      },
      {
        src: "/projects/frontend-quiz/endscreen.png",
        alt: "End screen — final score summary",
        type: "card",
      },
    ],
    live: "https://frontend-quiz-app-jade.vercel.app/",
    github: "https://github.com/Dev-EthanR/frontend-quiz-app",
  },
];
