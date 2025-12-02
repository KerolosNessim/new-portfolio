import { navIcons, navLinks } from "#constants"
import useWindowStore from "#store/window"
import dayjs from "dayjs"

const Navbar = () => {
  const { openWindow } = useWindowStore()
  return (
    <nav>
      <div>
        {/* logo */}
        <img src="/images/logo.svg" alt="logo" />
        {/* title */}
        <p className="font-bold">Kerolos' Portfolio </p>
        {/* nav links */}
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* nav icons */}
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        {/* date */}
        <time>
          {dayjs().format("ddd, MMM D: h:mm A")}
        </time>


      </div>
    </nav>
  )
}

export default Navbar


