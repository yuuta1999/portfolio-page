import React, { useEffect, useState } from 'react'

import Slider from './slider'

const Typer: React.FC<TyperProps> = ({
  title = '',
  dataText,
  className
}: TyperProps) => {
  // Define state hooks
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(150)
  const [loop, setLoop] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)
  const [isScrolled, setIsScrolled] = useState(true)
  const [isShowing, setIsShowing] = useState(false)

  // Define some stuffs
  const i: number = loop % dataText.length
  const fullText: string = dataText[i]
  const str: string[] = [
    'a self-taught coder with huge curiosity about tech.',
    'I write stuff in Flask and Django.',
    'I visualize my stuff with HTML/CSS and React.'
  ]

  const handleScroll = () => {
    const currentHeight =
      window.pageYOffset || document.documentElement.scrollTop

    if (currentHeight > 50) {
      setIsScrolled(false)
    }

    if (currentHeight < 10) {
      setIsScrolled(true)
    }
  }

  // Type processing goes here.
  const handleTyping = () => {
    // Copy characters from the text taken from array (dataText).
    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    )

    // Make a pause after "Hi, "
    setIsWaiting(text === 'Hi' && !isDeleting ? true : false)

    // Type is faster than delete.
    if (isWaiting) {
      setSpeed(1000)
    } else {
      setSpeed(isDeleting ? 30 : 150)
    }
    /** 
    if (!isDeleting && isScrolled && text === fullText) {
      // Wait a sec before deleting if the text is fully displayed.
      setTimeout(() => setIsDeleting(true), 5000)
    } else if (isDeleting && isScrolled && text === '') {
      // After deleting, move to next text if existed.
      setIsDeleting(false)
      setLoop(loop + 1)
    }
    */
    if (!isDeleting && isScrolled && text === fullText) {
      setIsShowing(true)
      setTimeout(() => {
        setIsShowing(false)
        setIsDeleting(true)
      }, 7000)
    } else if (isDeleting && isScrolled && text === '') {
      setIsDeleting(false)
      setLoop(loop + 1)
      setIsShowing(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const timer = setTimeout(() => {
      handleTyping()
    }, speed)

    return () => clearTimeout(timer)
  })

  return (
    <>
      <h1 className={className}>
        {title}
        {text}
      </h1>
      <Slider
        classNames="sliding-text position-relative align-items-center"
        dataText={isShowing ? str[i] : ''}
      />
    </>
  )
}

interface TyperProps {
  dataText: string[]
  title?: string
  className: string
}

export default Typer
