import WindowContrrols from "#components/WindowContrrols"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile.data

  if (!data) return null

  const { name, imageUrl } = data

  return (
    <>
      <div id="window-header">
        <WindowContrrols target={"imgfile"} />
        <h2>{name}</h2>
      </div>

      <div className="p-4 w-full h-full flex items-center justify-center bg-gray-100/50">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
          />
        ) : (
          <div className="text-gray-500">No Image Available</div>
        )}
      </div>
    </>
  )
}

export default WindowWrapper(Image, "imgfile")
