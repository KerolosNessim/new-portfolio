import WindowContrrols from "#components/WindowContrrols"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile.data

  if (!data) return null

  const { name, image, subtitle, description } = data

  return (
    <>
      <div id="window-header">
        <WindowContrrols target={"txtfile"} />
        <h2>{name}</h2>
      </div>
    
    
    
      <div className="p-4 max-h-[80vh] overflow-y-auto macos-scrollbar space-y-4">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover object-top rounded-xl  shadow-md"
          />
        )}

        <h1 className=" font-bold ">{name}</h1>

        {subtitle && (
          <h2 className="text-start font-medium ">{subtitle}</h2>
        )}

        <div className="space-y-2">
          {description && description.map((paragraph, index) => (
            <p key={index} className="  text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default WindowWrapper(Text, "txtfile")
