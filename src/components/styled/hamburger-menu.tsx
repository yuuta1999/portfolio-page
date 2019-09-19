import React, { useState, useRef, useEffect } from 'react'

const Menu: React.FC = () => {
  const [click, setClick] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setClick(!click)
  }

  useEffect(() => {
    if (click) {
      divRef.current!.classList.add('toggled')
    } else {
      divRef.current!.classList.remove('toggled')
    }
  }, [click, divRef])

  return (
    <div ref={divRef} className="navbar-toggle-hamburger" onClick={handleClick}>
      <div className="circle">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default Menu
