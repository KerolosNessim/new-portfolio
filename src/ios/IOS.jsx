import { useEffect, useState } from "react"
import { BatteryFull, SignalHigh, Wifi } from "lucide-react"
import dayjs from "dayjs"
import { apps, dockIds } from "./registry"

const StatusBar = ({ dark }) => {
  const [now, setNow] = useState(dayjs())
  useEffect(() => {
    const t = setInterval(() => setNow(dayjs()), 15000)
    return () => clearInterval(t)
  }, [])
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 z-30 flex h-12 items-end justify-between px-7 pb-1 text-[15px] font-semibold ${
        dark ? "text-black" : "text-white"
      }`}
    >
      <time>{now.format("h:mm")}</time>
      <div className="flex items-center gap-1.5">
        <SignalHigh size={17} />
        <Wifi size={17} />
        <BatteryFull size={22} />
      </div>
    </div>
  )
}

const AppIcon = ({ app, onOpen, label = true }) => (
  <button type="button" onClick={() => onOpen(app.id)} className="flex flex-col items-center gap-1.5 active:scale-90 transition-transform">
    <span
      className="flex size-16 items-center justify-center overflow-hidden rounded-[18px] bg-white/90"
      style={app.bg ? { backgroundColor: app.bg } : undefined}
    >
      <img src={app.icon} alt="" className={app.bg ? "size-9" : "size-full object-cover"} />
    </span>
    {label && <span className="text-xs text-white drop-shadow">{app.name}</span>}
  </button>
)

const IOS = () => {
  const [active, setActive] = useState(null)
  const [closing, setClosing] = useState(false)

  const open = (id) => setActive(id)
  const close = () => {
    setClosing(true)
    setTimeout(() => {
      setActive(null)
      setClosing(false)
    }, 250)
  }

  const current = apps.find((a) => a.id === active)
  const dock = dockIds.map((id) => apps.find((a) => a.id === id))

  return (
    <div className="fixed inset-0 overflow-hidden bg-black select-none">
      <img src="/images/me.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-black/30" />

      <StatusBar dark={!!current && !closing} />

      {/* Home screen */}
      <div
        className={`absolute inset-0 flex flex-col px-6 pt-20 pb-6 transition-all duration-300 ${
          current && !closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="mb-8 rounded-3xl bg-white/20 p-5 text-white backdrop-blur-xl">
          <p className="text-sm opacity-80">Hey, I'm Kerolos 👋</p>
          <h1 className="text-3xl font-bold">Frontend Engineer</h1>
          <p className="mt-1 text-sm opacity-80">Welcome to my portfolio</p>
        </div>

        <div className="grid grid-cols-4 gap-x-3 gap-y-6">
          {apps.map((app) => (
            <AppIcon key={app.id} app={app} onOpen={open} />
          ))}
        </div>

        <div className="mt-auto mb-5 rounded-[28px] bg-white/25 p-3 backdrop-blur-xl">
          <div className="grid grid-cols-4 gap-3">
            {dock.map((app) => (
              <AppIcon key={app.id} app={app} onOpen={open} label={false} />
            ))}
          </div>
        </div>
      </div>

      {/* Open app */}
      {current && (
        <div
          className={`absolute inset-0 z-20 overflow-hidden rounded-t-[0px] ${
            closing ? "animate-[ios-down_250ms_ease-in_forwards]" : "animate-[ios-up_300ms_ease-out]"
          }`}
        >
          <current.Component onClose={close} />
          <button
            type="button"
            aria-label="Go home"
            onClick={close}
            className="absolute inset-x-0 bottom-0 z-30 flex h-8 items-center justify-center"
          >
            <span className="h-1.5 w-36 rounded-full bg-black/80" />
          </button>
        </div>
      )}

      {!current && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center">
          <span className="h-1.5 w-36 rounded-full bg-white/80" />
        </div>
      )}
    </div>
  )
}

export default IOS
