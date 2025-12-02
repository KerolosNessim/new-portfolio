import WindowContrrols from '#components/WindowContrrols'
import { techStack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react'
import React from 'react'

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowContrrols target='terminal' />
        <p>tech stack</p>
      </div>

      <div className='techstack'>
        <p>
          <span className='font-bold'>@Kerolos</span>
          {" "}
          show tech stack
        </p>

        <div className='label'>
          <p className='w-50'>Category</p>
          <p>Technologies</p>
        </div>

        <ul className='content'>
          {techStack.map(({ category, items }) => (
            <li key={category} className='flex items-center'>
              <Check className='check' size={20} />
              <h3 className='w-50'>{category}</h3>
              <ul className='flex-1'>
                {items.map((item, i) => (
                  <li key={i}>{item} {i < items.length - 1 ? "," : ""}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className='footnote'>
          <p>
            <Check className='check' size={20} />
            {" "}
            {techStack.length} of {techStack.length} staks are loaded successfully 
          </p>
          <p className='text-black'>
            <Flag  size={16} fill='black' />
            {" "}
            render at 6ms
          </p>
        </div>
      </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')


export default TerminalWindow