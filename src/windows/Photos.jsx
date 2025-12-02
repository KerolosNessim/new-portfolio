import React from 'react'
import WindowContrrols from "#components/WindowContrrols"
import WindowWrapper from "#hoc/WindowWrapper"
import { Mail, Search } from 'lucide-react'
import { gallery, photosLinks } from '#constants'
import useWindowStore from '#store/window'

const Photos = () => {
  const { openWindow } = useWindowStore()
  return (
    <>
      <div id="window-header">
        <WindowContrrols target={"photos"} />
        <div className="w-full flex items-center justify-end gap-2">
          <Mail className='icon' />
          <Search className='icon' />
        </div>
      </div>
      <div className='w-full flex'>
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='gallery'>
          <ul>
            {gallery.map(({ id, img }) => (
              <li key={id}
                onClick={() => openWindow("imgfile", {
                  id,
                  name: "Gallery image",
                  icon: "/images/image.png",
                  kind:"file",
                  fileType:"img",
                  imageUrl:img
                })}
              >
                <img src={img} alt={`image-gallery-${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default WindowWrapper(Photos, "photos")