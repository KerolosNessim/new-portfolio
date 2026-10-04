import {
  ProjectsApp,
  AboutApp,
  SkillsApp,
  ArticlesApp,
  GalleryApp,
  ContactApp,
  ResumeApp,
} from "./apps"

export const apps = [
  { id: "projects", name: "Projects", icon: "/images/finder.png", Component: ProjectsApp },
  { id: "about", name: "About", icon: "/icons/info.svg", bg: "#34aadc", Component: AboutApp },
  { id: "skills", name: "Skills", icon: "/images/terminal.png", Component: SkillsApp },
  { id: "articles", name: "Articles", icon: "/images/safari.png", Component: ArticlesApp },
  { id: "photos", name: "Photos", icon: "/images/photos.png", Component: GalleryApp },
  { id: "contact", name: "Contact", icon: "/images/contact.png", Component: ContactApp },
  { id: "resume", name: "Resume", icon: "/images/pdf.png", Component: ResumeApp },
]

export const dockIds = ["projects", "articles", "contact", "resume"]
