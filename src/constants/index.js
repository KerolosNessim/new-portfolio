const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 2, 2025",
    title: "Global Loading and Error Handling with React Query",
    image: "/images/tanstack.png",
    link: "https://www.linkedin.com/posts/kerolosnessim_reactquery-frontend-reactjs-activity-7303519922628759552-ggo9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmo26QBm-q_O1gHmGzfrJdI-Wy7S4l0jZY",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Context API vs Redux vs Zustand",
    image: "/images/zustand.png",
    link: "https://www.linkedin.com/posts/abdelrahman-hassan-b09b80250_reactjs-frontenddevelopment-statemanagement-activity-7286061839283576834-iPpA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmo26QBm-q_O1gHmGzfrJdI-Wy7S4l0jZY",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "Formik vs React Hook Form",
    image: "/images/reacthookform.png",
    link: "https://www.linkedin.com/posts/yasmin-lotfy_reactjs-formik-reacthookform-activity-7353199007696830465-J2jc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmo26QBm-q_O1gHmGzfrJdI-Wy7S4l0jZY",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Axios",
      "React Query",
    ],
  },
  {
    category: "State Management",
    items: ["Context API", "Redux", "Zustand"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "CSS", "Shadcn UI"],
  },
  {
    category: "Animation",
    items: ["Framer Motion", "GSAP", "Animate.css"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Claude.ai"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "black",
    link: "https://github.com/KerolosNessim",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077B6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
  {
    id: 3,
    text: "Facebook",
    icon: "/icons/facebook.svg",
    bg: "#1877f2",
    link: "https://www.facebook.com/kero.nessim.9?rdid=bi00LHAs0O9dd3hf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BnEZYyCrX%2F#",
  },
  {
    id: 4,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#e1306c",
    link: "https://www.instagram.com/keronessim/?igsh=MWE2ZzJlbTFqODBuMA%3D%3D#",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal3.jpg",
  },
  {
    id: 2,
    img: "/images/me.png",
  },
  {
    id: 3,
    img: "/images/gal1.jpg",
  },
  {
    id: 4,
    img: "/images/me.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Courses platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Courses.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            " Developed a medical courses website using Next JS 15, Shadcn UI, and next-intel for supporting multi language",
            "Using Zustand for handling user information ,cart ,favorites and courses history",
            "Developing payment with points and verification discount with coupons",
          ],
        },
        {
          id: 2,
          name: "Courses.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://drnadasalma.com/en",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Courses.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/projects/courses.png",
        },
      ],
    },
    // ▶ Project 2
    {
      id: 6,
      name: "Subcode Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[20vh] left-5",
      children: [
        {
          id: 1,
          name: "Subcode.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed company portfolio website supporting multi language using Next JS 15, ShadcnUI, React Bites and scrolled animation",
          ],
        },
        {
          id: 2,
          name: "Subcode.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://subcodeco.com",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Subcode.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/projects/subcode.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Shgarde E-commerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-5",
      children: [
        {
          id: 1,
          name: "Shgarde.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed an e-commerce website using Next JS 15, Shadcn UI, Zustand for handling user, cart and favorites states and next-intel for supporting multi language",
            "developed an affiliate platform with admin features to create products’ links and points system",
            "Implemented an online and cash payment system ",
          ],
        },
        {
          id: 2,
          name: "Shgarde.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://shgarde.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Shgarde.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/projects/shgarde.png",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "Sea Tourism",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-5",
      windowPosition: "top-[47vh] left-5",
      children: [
        {
          id: 1,
          name: "Sea.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed hotels and Visa Booking website using React JS 19, Shadcn UI",
            " Using Framer motion for handling animation",
            "Using React Hook Form and Zod for building functionality for booking",
          ],
        },
        {
          id: 2,
          name: "Sea.sa",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://seatourism.sa/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Sea.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/projects/sea.png",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 9,
      name: "Anonymous Defenders",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-40",
      windowPosition: "top-[62vh] left-5",
      children: [
        {
          id: 1,
          name: "Anonymous.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed a Malware detection and analysis website using Next JS 15, Shadcn UI ",
            "Using React Hook Form and Zod for building functionality for analysis uploaded files",
            "Using Zustand for handling user information and files’ history",
            "Using Magic-Ui library for 3D animated object",
          ],
        },
        {
          id: 2,
          name: "Anonymous.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://anonymous-defenders.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Anonymous.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/projects/anony.png",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 10,
      name: "ME-Pharmacies",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-80",
      windowPosition: "top-[5vh] left-40",
      children: [
        {
          id: 1,
          name: "ME-Pharmacies.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed a role-based pharmacy operations dashboard for Super Admin, Supervisor, and Pharmacist users with secure authentication and protected routing.",
            "Built inventory management, bulk product import, inter-pharmacy transfers, cash and delivery tracking, stock requests, and task workflows, including Excel export and print reporting.",
            "Implemented staff administration, real-time chat, and Firebase push notifications to support cross-pharmacy coordination.",
          ],
        },
        {
          id: 2,
          name: "ME-Pharmacies.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mepharmacies.com",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ME-Pharmacies.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/projects/me-pharm.png",
        },
      ],
    },
    // ▶ Project 6
    {
      id: 11,
      name: "Hala Wa Sahla",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-70 left-5",
      windowPosition: "top-[20vh] left-40",
      children: [
        {
          id: 1,
          name: "Hala Wa Sahla.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed a multilingual contract renewal platform with a multi-step wizard for employer and worker data collection, document validation, signature capture, pricing, and review/confirmation workflows.",
            "Implemented robust frontend flows for order tracking, payment initiation, and session-aware status updates using React Hook Form, Zod validation, TanStack Query, and persisted draft/session management",
            "Integrated real-time communication and notifications with Firebase Cloud Messaging, Laravel Echo, and Pusher to push status changes and support chat updates across the user journey.",
            "Built responsive, API-driven landing, blog, and tracking experiences using Next.js App Router, server/client data fetching, localization, reusable UI components, and PDF/print export for final contract delivery.",
          ],
        },
        {
          id: 2,
          name: "Hala Wa Sahla.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://halawasahla.ittlt.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Hala Wa Sahla.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/projects/hala.png",
        },
      ],
    },
    // ▶ Project 7
    {
      id: 12,
      name: "Iwash",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-70 left-40",
      windowPosition: "top-[33vh] left-40",
      children: [
        {
          id: 1,
          name: "Iwash.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built a bilingual (Arabic/English) customer web app with Next.js App Router, enabling on-location car wash bookings, monthly subscription packages, and integrated online payments.",
            "Delivered authenticated user flows—registration/login, profile management, booking history, active packages, and wash requests—with React Query, Zustand, and a typed REST API client (Bearer auth,locale-aware requests)",
            "Integrated real-time communication and notifications with Firebase Cloud Messaging, Laravel Echo, and Pusher to push status changes and support chat updates across the user journey.",
            "mplemented real-time push notifications via Firebase Cloud Messaging, a responsive UI (Tailwind CSS,shadcn/ui), and feature-based architecture for marketing pages, services, and blog content.",
          ],
        },
        {
          id: 2,
          name: "Iwash.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://iwash.co/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Iwash.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/projects/iwash.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.png",
    },
    {
      id: 2,
      name: "dark.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 3,
      name: "instructor.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.png",
      description: [
        "Hey! I’m Kerolos 👋, a Frontend Engineer passionate about building modern, high-performance web applications with clean architecture and great user experiences.",
        "I have 2+ years of hands-on experience with React.js and Next.js, building scalable dashboards, business platforms, and interactive web applications from idea to production.",
        "I focus on clean, maintainable code, responsive UI, accessibility, performance, and smooth user experiences — while using modern tools and best practices to build products that are reliable and easy to scale.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/projects/old.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/projects/oldcon.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
