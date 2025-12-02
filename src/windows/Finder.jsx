import WindowContrrols from "#components/WindowContrrols"
import { locations } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useLocationStore from "#store/location"
import useWindowStore from "#store/window"
import clsx from "clsx"
import { Search } from "lucide-react"

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore()
  const { openWindow } = useWindowStore()

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume")
    if (item.kind === "folder") return setActiveLocation(item)
    if (["url", "fig"].includes(item.fileType) && item.href) return window.open(item.href, "_blank")
    openWindow(`${item.fileType}${item.kind}`, item)
  }
  const renderList = (title, items) => {
    return (<>
      <div>
        <h3>{title}</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={() => setActiveLocation(item)}
              className={clsx(
                item.id === activeLocation.id ? "active" : "not-active"
              )}
            >
              <img src={item.icon} alt={item.name} className="w-4" />
              <p className="text-xs font-medium truncate">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
    )
  }


  return (
    <>
      <div id="window-header">
        <WindowContrrols target={"finder"} />
        <Search className="icon" />
      </div>

      <div className="h-full bg-white flex">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("My Projects", locations.work.children)}
        </div>

        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li key={item.id} className={item.position} onClick={() => openItem(item)}>
              <img src={item.icon} alt={item.name} />
              <p className="text-xs font-medium ">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow