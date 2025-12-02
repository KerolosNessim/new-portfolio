import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React, { useEffect, useEffectEvent, useRef } from 'react'

const WindowWrapper = (Component, windowKey) => {
  const wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore()
    const { isOpen, zIndex } = windows[windowKey]
    const ref = useRef(null)

    // Handle open animation
    useGSAP(() => {
      const el = ref.current
      if (!el || !isOpen) return
      el.style.display = "block"
      gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" })
    }, [isOpen])

    // Handle close (hide when not open)
    useEffect(() => {
      const el = ref.current
      if (!el) return
      if (!isOpen) {
        el.style.display = "none"
      }
    }, [isOpen])

    // Setup draggable
    useGSAP(() => {
      const el = ref.current
      if (!el) return

      const [instance] = Draggable.create(el, {
        onPress: () => {
          focusWindow(windowKey)
        }
      })

      return () => instance.kill()
    }, [])

    useEffectEvent(() => {
      const el = ref.current
      if (!el) return
      el.style.display = isOpen ? 'block' : 'none'
    }, [isOpen])

    return (
      <section
        id={windowKey}
        ref={ref}
        className={"absolute"}
        style={{ zIndex, display: isOpen ? 'block' : 'none' }}>
        <Component {...props} />
      </section>
    )
  }
  wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`
  return wrapped
}

export default WindowWrapper