import { Project } from "@/app/entities/project";

export const projects: Project[] = [
  {
    title: "Resume screener",
    slug: "resume-screener",
    description:
      "AI-powered resume screening tool that analyses how well a candidate's resume matches a job description. Users upload a PDF resume, paste a job description, and receive an instant match score, skills gap analysis, and AI-generated resume bullet rewrites",
    concept:
      "AI resume screener that scores resume-to-job-description fit, surfaces missing skills, and rewrites weak bullet points using streaming AI responses.",
    displayTechnologies: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API"],
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
    title: "Quizzly",
    slug: "quizzly",
    description:
      "Quizzly is a real-time multiplayer quiz platform where a host creates a quiz, players join via a room code, and everyone answers questions simultaneously. Live leaderboard updates after each round and an in-game chat channel run in parallel — all powered by WebSockets.",
    concept:
      "Real-time multiplayer quiz game with live scoring, presence, and in-game chat — all synced across players via WebSockets.",
    displayTechnologies: [
      "React",
      "TypeScript",
      "Socket.io",
      "Express",
      "OpenAI API",
      "PostgreSQL",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "TanStack Query",
      "TailwindCSS",
      "Socket.io",
      "Express",
      "Prisma",
      "PostgreSQL",
      "OpenAI API",
      "Auth.js",
      "Zod",
    ],
    features: [
      {
        title: "Room-code lobbies",
        description:
          "Players join any live game with a 6-character room code, a username, and an avatar color — no account required. Hosts can kick players, mute them from chat, and control late-join access.",
      },
      {
        title: "Live multiplayer gameplay",
        description:
          "Questions broadcast to every player in real time over Socket.io, with a synced countdown, answer submission, live answer-progress counts, and an instant reveal once everyone has answered or time runs out.",
      },
      {
        title: "AI-generated quizzes and answers",
        description:
          "Hosts can generate a full quiz from just a title, or generate plausible answer options for a single question, via structured OpenAI completions (gpt-4o with a gpt-4o-mini fallback) — with duplicate-question avoidance when regenerating.",
      },
      {
        title: "Quiz builder and publishing",
        description:
          "Drafts are autosaved as they're built, with multiple-choice, single-choice, and true/false question types, per-question time limits and point values, and a publish flow that adds a cover image, category, difficulty, tags, and visibility before it's listed.",
      },
      {
        title: "Discovery page",
        description:
          "Browse, search, and page through publicly published quizzes, view quiz details, and save quizzes to a personal library to re-host later.",
      },
      {
        title: "Live lobby chat",
        description:
          "Real-time chat alongside the lobby and game, with host controls to disable chat entirely or mute individual players.",
      },
      {
        title: "Leaderboard and podium",
        description:
          "A ranked leaderboard shown after every question and a final three-place podium screen at the end of the game.",
      },
      {
        title: "Host summary and analytics",
        description:
          "Post-game breakdown for hosts covering completion rate, average accuracy and response time, the fastest responder, and the hardest question, backed by persisted per-session game history.",
      },
      {
        title: "Reconnection handling",
        description:
          "Hosts and players who disconnect get a grace period to rejoin their in-progress room before being dropped, with dedicated UI for host-disconnected, reconnecting, removed-from-lobby, and room-not-found states.",
      },
      {
        title: "Accounts and dashboard",
        description:
          "Sign in with email/password or Google via Auth.js; signed-in users get a dashboard with games played, average score, best finish, wins, recent game results, previously hosted quizzes, and progress-tracked achievements (20+ unlockable badges).",
      },
      {
        title: "Profile settings",
        description:
          "Update display name and avatar color/image, change password, and manage a linked Google account.",
      },
    ],
    futureImprovements: [
      {
        title: "Alternate game modes",
        description:
          "Teams mode, Last One Standing elimination play, and a Speed-run scoring mode, each requiring their own state machine and scoring rules on top of the current single-round game loop.",
      },
      {
        title: "Chat reactions",
        description:
          "Lightweight emoji reactions on live chat messages during the lobby and game.",
      },
      {
        title: "Public shareable result screens",
        description:
          "A dedicated public URL for a completed game's results, rather than relying on copying the current page link.",
      },
      {
        title: "End-of-quiz star rating",
        description:
          "Let players rate a quiz out of 5 stars after it ends, feeding into quiz quality/discovery ranking.",
      },
      {
        title: "Dedicated file storage for uploads",
        description:
          "Cover images and avatars currently persist as base64 data URIs; moving to object storage (e.g. Uploadthing) would cut payload size and page weight.",
      },
    ],
    thumbnail: {
      src: "/projects/quizzly/thumbnail.png",
      alt: "Quizzly — live question screen with timer and answer results",
    },
    gallery: [
      {
        src: "/projects/quizzly/home.png",
        alt: "Home — room code entry to join a live game",
        type: "feature",
      },
      {
        src: "/projects/quizzly/lobby.png",
        alt: "Lobby — players joined with room code and live chat",
        type: "feature",
      },
      {
        src: "/projects/quizzly/reconnecting.png",
        alt: "Reconnecting — automatic recovery after a dropped connection",
        type: "card",
      },
      {
        src: "/projects/quizzly/question.png",
        alt: "Question screen — live timer, answer grid, and chat sidebar",
        type: "feature",
      },

      {
        src: "/projects/quizzly/answer-reveal.png",
        alt: "Answer reveal — correct answer highlighted green, incorrect red",
        type: "card",
      },
      {
        src: "/projects/quizzly/results.png",
        alt: "Round results — leaderboard update after each question",
        type: "card",
      },
      {
        src: "/projects/quizzly/final.png",
        alt: "Final results — podium and full leaderboard",
        type: "card",
      },
      {
        src: "/projects/quizzly/host-summary.png",
        alt: "Host summary — accuracy, response time, and question breakdown",
        type: "card",
      },
      {
        src: "/projects/quizzly/dashboard.png",
        alt: "Dashboard — player stats and recent games",
        type: "feature",
      },
      {
        src: "/projects/quizzly/achievements.png",
        alt: "Achievements — earned and locked badges",
        type: "feature",
      },

      {
        src: "/projects/quizzly/discovery.png",
        alt: "Discovery — browse and filter published quizzes",
        type: "feature",
      },
      {
        src: "/projects/quizzly/quiz-builder.png",
        alt: "Quiz builder — question list and live player preview",
        type: "feature",
      },
      {
        src: "/projects/quizzly/question-editor.png",
        alt: "Question editor — answers, timing, and points",
        type: "feature",
      },

      {
        src: "/projects/quizzly/ai-result.png",
        alt: "AI result — generated questions ready to review and add",
        type: "feature",
      },
      {
        src: "/projects/quizzly/publish-flow.png",
        alt: "Publish flow — category, difficulty, tags, and cover image",
        type: "feature",
      },
      {
        src: "/projects/quizzly/mobile-lobby.png",
        alt: "Mobile lobby — player roster and chat",
        type: "mobile",
      },
    ],
    live: "https://quizly-l514.onrender.com/",
    github: "https://github.com/Dev-EthanR/quizly",
  },
  {
    title: "Stash",
    slug: "stash",
    description:
      "Stash is a multi-vendor digital goods marketplace where sellers upload and sell digital products — UI kits, fonts, icon packs, code snippets, and templates. Buyers browse, purchase, and instantly download. Admins manage the platform, approve sellers, and handle refunds. Stripe Connect powers split payouts between sellers and the platform.",
    concept:
      "Multi-vendor digital goods marketplace with three-role access, Stripe Connect payouts, Uploadthing file storage",
    displayTechnologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "TanStack Query",
      "Recharts",
      "Uploadthing",
      "Zod",
    ],
    features: [
      {
        title: "Seller onboarding & product listings",
        description:
          "Multi-step seller signup wizard with Stripe Connect Express onboarding, plus product CRUD with draft/published states, file versioning, thumbnails, and preview image galleries uploaded via UploadThing.",
      },
      {
        title: "Marketplace browsing, cart & wishlist",
        description:
          "Category and price-range filtering, product search, a shopping cart, and a wishlist, all backed by React Query hooks and a dedicated browse API.",
      },
      {
        title: "Stripe Connect checkout & payouts",
        description:
          "Stripe Checkout sessions for cart purchases, with a 95/5 seller/platform revenue split via Stripe Transfers, self-purchase and unonboarded-seller safeguards, and idempotent order creation on the success page.",
      },
      {
        title: "Refunds & dispute handling",
        description:
          "Buyers can request refunds; admins approve or reject them; Stripe webhooks handle chargeback disputes end-to-end, revoking and later reinstating signed download links based on dispute outcome.",
      },
      {
        title: "Secure, expiring digital downloads",
        description:
          "Purchased files are served through UploadThing signed URLs with 24-hour expiry, reissued after successful purchase or a dispute won in the seller's favor.",
      },
      {
        title: "Product reviews & ratings",
        description:
          "Buyers can leave star ratings and written reviews per product, with aggregated rating summaries shown on product pages.",
      },
      {
        title: "Role-based dashboards",
        description:
          "A single role-aware dashboard shell for buyers (purchases, wishlist, cart), sellers (product/order management, revenue chart), and admins (user, product, order, and refund management with role changes).",
      },
      {
        title: "Admin management console",
        description:
          "Admins can view and manage all users (including role changes), products, orders, and refund requests through sortable, searchable data tables.",
      },
    ],
    futureImprovements: [
      {
        title: "Discount Codes",
        description:
          "Sellers can create Stripe discount codes for their own products, managed via the seller dashboard.",
      },
    ],
    thumbnail: {
      src: "/projects/stash/browse.png",
      alt: "Stash — product listing page with category filters and product cards",
    },
    gallery: [
      {
        src: "/projects/stash/browse.png",
        alt: "Browse products — category, price, and rating filters applied",
        type: "feature",
      },
      {
        src: "/projects/stash/payment.png",
        alt: "Payment processing — Stripe Checkout integration",
        type: "feature",
      },
      {
        src: "/projects/stash/reviews.png",
        alt: "Product reviews — star ratings and written buyer feedback",
        type: "feature",
      },
      {
        src: "/projects/stash/checkout-success.png",
        alt: "Checkout — Stripe payment confirmed and order created",
        type: "feature",
      },
      {
        src: "/projects/stash/seller-dashboard.png",
        alt: "Seller dashboard — revenue chart, product count, and order stats",
        type: "card",
      },
      {
        src: "/projects/stash/seller-onboarding.png",
        alt: "Seller onboarding — Stripe Connect payment setup step",
        type: "card",
      },
      {
        src: "/projects/stash/product-upload.png",
        alt: "Product upload — form with file drop zone and media fields",
        type: "card",
      },
      {
        src: "/projects/stash/product-draft.png",
        alt: "Seller product list — draft product alongside published listings",
        type: "card",
      },
      {
        src: "/projects/stash/cart.png",
        alt: "Cart — items, seller info, and running total",
        type: "card",
      },
      {
        src: "/projects/stash/wishlist.png",
        alt: "Wishlist — saved products grid",
        type: "card",
      },
      {
        src: "/projects/stash/buyer-dashboard.png",
        alt: "Buyer dashboard — purchase count and total spent",
        type: "card",
      },
      {
        src: "/projects/stash/buyer-purchases.png",
        alt: "Purchase history — orders with downloads and refund status",
        type: "card",
      },

      {
        src: "/projects/stash/admin-dashboard.png",
        alt: "Admin dashboard — platform-wide users, products, orders, and revenue",
        type: "card",
      },
      {
        src: "/projects/stash/admin-users.png",
        alt: "Admin user management table with role badges",
        type: "card",
      },
      {
        src: "/projects/stash/admin-products.png",
        alt: "Admin product management table across all sellers",
        type: "card",
      },

      {
        src: "/projects/stash/admin-refunds.png",
        alt: "Admin refund management — pending refund requests",
        type: "card",
      },
    ],
    live: "https://stash-green-iota.vercel.app/",
    github: "https://github.com/Dev-EthanR/stash",
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
];
