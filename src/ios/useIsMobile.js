import { useSyncExternalStore } from "react"

const QUERY = "(max-width: 639px)"

const subscribe = (cb) => {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}

const useIsMobile = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  )

export default useIsMobile
