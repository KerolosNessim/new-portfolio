import { useState } from "react"
import { ExternalLink, FileText, X } from "lucide-react"
import { locations, techStack, blogPosts, socials, gallery } from "#constants"
import { Screen, Group, Row } from "./ui"

const RESUME_URL = "/files/KerolosNessim-FrontendDeveloper.pdf"

const projects = locations.work.children.map((p) => ({
  id: p.id,
  name: p.name,
  description: p.children.find((c) => c.fileType === "txt")?.description ?? [],
  href: p.children.find((c) => c.fileType === "url")?.href,
  image: p.children.find((c) => c.fileType === "img")?.imageUrl,
}))

const about = locations.about.children.find((c) => c.name === "about-me.txt")

const LinkButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-xl bg-[#007aff] py-3 text-[17px] font-semibold text-white active:opacity-70"
  >
    {children}
  </a>
)

export const ProjectsApp = ({ onClose }) => {
  const [selected, setSelected] = useState(null)

  if (selected) {
    return (
      <Screen title={selected.name} backLabel="Projects" onBack={() => setSelected(null)}>
        <img
          src={selected.image}
          alt={selected.name}
          className="mb-4 w-full rounded-xl bg-white object-cover object-top"
        />
        <h2 className="mb-2 text-2xl font-bold">{selected.name}</h2>
        <ul className="mb-5 space-y-2 text-[15px] text-gray-700">
          {selected.description.map((d, i) => (
            <li key={i} className="rounded-xl bg-white p-3">
              {d.trim()}
            </li>
          ))}
        </ul>
        {selected.href && (
          <LinkButton href={selected.href}>
            Visit website <ExternalLink size={18} />
          </LinkButton>
        )}
      </Screen>
    )
  }

  return (
    <Screen title="Projects" onBack={onClose}>
      <Group>
        {projects.map((p) => (
          <Row
            key={p.id}
            onClick={() => setSelected(p)}
            title={p.name}
            icon={
              <img
                src={p.image}
                alt=""
                className="size-12 rounded-lg bg-gray-100 object-cover object-top"
              />
            }
          />
        ))}
      </Group>
    </Screen>
  )
}

export const AboutApp = ({ onClose }) => (
  <Screen title="About me" onBack={onClose}>
    <img src={about.image} alt="Kerolos" className="mb-4 h-72 w-full rounded-xl object-cover object-top" />
    <h2 className="mb-3 text-2xl font-bold">{about.subtitle}</h2>
    <div className="space-y-3 text-[15px] text-gray-700">
      {about.description.map((p, i) => (
        <p key={i} className="rounded-xl bg-white p-3">
          {p}
        </p>
      ))}
    </div>
  </Screen>
)

export const SkillsApp = ({ onClose }) => (
  <Screen title="Skills" onBack={onClose}>
    {techStack.map(({ category, items }) => (
      <Group key={category} title={category}>
        <div className="flex flex-wrap gap-2 p-3">
          {items.map((item) => (
            <span key={item} className="rounded-full bg-[#e5f1ff] px-3 py-1 text-sm text-[#007aff]">
              {item}
            </span>
          ))}
        </div>
      </Group>
    ))}
  </Screen>
)

export const ArticlesApp = ({ onClose }) => (
  <Screen title="Articles" onBack={onClose}>
    <div className="space-y-4">
      {blogPosts.map((post) => (
        <a
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-xl bg-white active:opacity-70"
        >
          <img src={post.image} alt="" className="h-40 w-full object-cover" />
          <div className="p-3">
            <p className="text-xs text-gray-500">{post.date}</p>
            <h2 className="font-semibold">{post.title}</h2>
          </div>
        </a>
      ))}
    </div>
  </Screen>
)

export const GalleryApp = ({ onClose }) => {
  const [open, setOpen] = useState(null)
  return (
    <Screen title="Photos" backLabel="Home" onBack={onClose}>
      <div className="grid grid-cols-3 gap-0.5">
        {gallery.map((g) => (
          <button key={g.id} type="button" onClick={() => setOpen(g.img)} className="aspect-square">
            <img src={g.img} alt="" className="size-full object-cover object-top" />
          </button>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black" onClick={() => setOpen(null)}>
          <button type="button" aria-label="Close" className="absolute top-12 right-4 text-white">
            <X size={28} />
          </button>
          <img src={open} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </Screen>
  )
}

export const ContactApp = ({ onClose }) => (
  <Screen title="Contact" onBack={onClose}>
    <div className="mb-6 flex flex-col items-center text-center">
      <img src="/images/me.png" alt="Kerolos" className="mb-3 size-28 rounded-full object-cover object-top" />
      <h2 className="text-2xl font-bold">Let's connect</h2>
      <p className="mt-1 text-[15px] text-gray-600">
        Got an idea, a bug to squash, or just wanna talk tech? I'm in.
      </p>
    </div>
    <Group>
      <Row href="mailto:keroness9@gmail.com" title="Email" subtitle="keroness9@gmail.com" />
      {socials.map(({ id, text, icon, link, bg }) => (
        <Row
          key={id}
          href={link}
          title={text}
          icon={
            <span className="flex size-9 items-center justify-center rounded-lg" style={{ backgroundColor: bg }}>
              <img src={icon} alt="" className="size-5" />
            </span>
          }
        />
      ))}
    </Group>
  </Screen>
)

export const ResumeApp = ({ onClose }) => (
  <Screen title="Resume" onBack={onClose}>
    <div className="flex flex-col items-center gap-4 pt-10 text-center">
      <img src="/images/pdf.png" alt="" className="size-28" />
      <h2 className="text-xl font-bold">KerolosNessim-FrontendDeveloper.pdf</h2>
      <div className="w-full">
        <LinkButton href={RESUME_URL}>
          <FileText size={18} /> Open resume
        </LinkButton>
      </div>
    </div>
  </Screen>
)
