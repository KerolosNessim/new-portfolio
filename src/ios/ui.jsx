import { ChevronLeft, ChevronRight } from "lucide-react"

// iOS-style large-title screen with a back button.
export const Screen = ({ title, backLabel = "Home", onBack, children }) => (
  <div className="flex h-full flex-col bg-[#f2f2f7] text-black">
    <div className="shrink-0 bg-[#f2f2f7]/90 px-2 pt-12 pb-2 backdrop-blur-xl">
      <div className="relative flex h-10 items-center">
        <button
          type="button"
          onClick={onBack}
          className="z-10 flex items-center text-[17px] text-[#007aff] active:opacity-50"
        >
          <ChevronLeft size={26} strokeWidth={2.5} />
          {backLabel}
        </button>
        <h1 className="pointer-events-none absolute inset-x-0 truncate px-20 text-center text-[17px] font-semibold">
          {title}
        </h1>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-2 pb-24">{children}</div>
  </div>
)

// Inset grouped list container (Settings-style).
export const Group = ({ title, children }) => (
  <section className="mb-6">
    {title && (
      <h2 className="mb-1.5 px-4 text-[13px] font-normal text-gray-500 uppercase">{title}</h2>
    )}
    <div className="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white">{children}</div>
  </section>
)

export const Row = ({ icon, title, subtitle, href, onClick, chevron = true }) => {
  const Tag = href ? "a" : "button"
  const props = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { type: "button", onClick }
  return (
    <Tag
      {...props}
      className="flex w-full items-center gap-3 px-4 py-3 text-left active:bg-gray-100"
    >
      {icon}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[16px]">{title}</span>
        {subtitle && <span className="block truncate text-[13px] text-gray-500">{subtitle}</span>}
      </span>
      {chevron && <ChevronRight size={18} className="shrink-0 text-gray-400" />}
    </Tag>
  )
}
