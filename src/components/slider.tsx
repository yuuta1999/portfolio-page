import React, { useRef, useState, useEffect } from 'react'

const Slider: React.FC<SliderProps> = ({
  dataText,
  classNames
}: SliderProps) => {
  const textRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')

  const handleChange = () => {
    textRef.current!.style.transform = 'translateY(-100%)'
    textRef.current!.style.opacity = '0'

    setTimeout(() => {
      textRef.current!.style.transitionDuration = '0.5s'
      textRef.current!.style.transform = 'translateY(-100%)'
      textRef.current!.style.opacity = '0'

      setText(text !== dataText ? dataText : '')

      setTimeout(() => {
        textRef.current!.style.transitionDuration = '0.5s'
        textRef.current!.style.transform = 'translateY(0)'
        textRef.current!.style.opacity = '1'
      }, 20)
    }, 250)
  }

  useEffect(() => {
    const timer = setTimeout(
      () => {
        handleChange()
      },
      text === '' ? 10 : 14500
    )
    return () => clearTimeout(timer)
  }, [textRef, text, dataText])

  return (
    <div ref={textRef} className={classNames}>
      {text}
    </div>
  )
}

interface SliderProps {
  classNames: string
  dataText: string
}

export default Slider
