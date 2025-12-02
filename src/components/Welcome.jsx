import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const FONT_WEIGHT = {
  subTitle: {
    min: 200,
    max: 400,
    defualt: 200
  },
  title: {
    min: 400,
    max: 900,
    defualt: 400
  }
}

const renderText = (text, className, fontWight = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={className} style={{
      fontVariationSettings: `'wght' ${fontWight}`
    }}>
      {char === " " ? "\u00a0" : char}
    </span>
  ))
}

const handledHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, defualt: base } = FONT_WEIGHT[type];
  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`
    })
  }

  const handledMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000)
      animateLetter(letter, min + (max - min) * intensity)
    })
  }

  const handledMouseLeave = () =>
    letters.forEach((letter) =>
    animateLetter(letter,base,0.3)
    )

  container.addEventListener("mousemove", handledMouseMove);
  container.addEventListener("mouseleave", handledMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handledMouseMove);
    container.removeEventListener("mouseleave", handledMouseLeave);
  }

}

const Welcome = () => {
  const subTitle = useRef(null)
  const title = useRef(null)

  useGSAP(() => {
    const subTitleCleanUp=handledHover(subTitle.current, "subTitle");
    const titleCleanUp=handledHover(title.current, "title");
    return ()=>{
      subTitleCleanUp();
      titleCleanUp();
    }
  },[])
  return (
    <section id="welcome">
      <p ref={subTitle}>
        {
          renderText("Hey, I'm Kerolos, welcome to my", "text-2xl  font-georama", 200)
        }
      </p>
      <h1 ref={title} className='mt-7 italic'>
        {
          renderText("Portfolio", "text-9xl  font-georama italic")
        }
      </h1>

      <div className='small-screen'>
        <p className="text-black">this portfolio is designed for desktop/tablet screens only</p>
      </div>
    </section>
  )
}

export default Welcome
