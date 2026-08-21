import WindowContrrols from "#components/WindowContrrols"
import { socials } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowContrrols target={"contact"} />
        <h2>Contact Me</h2>
      </div>

      <div className="p-4 space-y-2">

        <img src="/images/me.png" alt="kerolos" className="size-25 rounded-full object-cover object-top " />
        <h3>let's connect</h3>
        <p>Got an idea?,a bug to squash,or just wanna talk tech ? i'm in.</p>
        <a href="mailto:keroness9@gmail.com" target="_blank" rel="noopener noreferrer" title="send me an email" className="text-blue-500 hover:underline block">keroness9@gmail.com</a>

        <ul>
          {socials.map(({ id, bg, icon, link, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                <img src={icon} alt={text} className="size-6" />
                <p>{text} </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WindowWrapper(Contact, "contact")