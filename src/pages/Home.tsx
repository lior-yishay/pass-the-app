import { useRef, useState } from 'react'
import './Home.css'

type Letter = {
  letter: string
  x: number
  y: number
}

export default function Home() {
  const [letters, setLetters] = useState<Letter[]>([])
  const [chosenLetters, setChosenLetters] = useState<String[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isInBounds = (buttonRect: DOMRect | undefined, x: number, y: number) =>
    buttonRect &&
    x > buttonRect.left &&
    x < buttonRect.right &&
    y > buttonRect.top &&
    y < buttonRect.bottom

  const handleButtonClick = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect()
    let x = 0
    let y = 0

    do {
      x = Math.random() * window.innerWidth
      y = Math.random() * window.innerHeight
    } while (isInBounds(buttonRect, x, y))

    const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    setLetters((previous) => [...previous, { letter, x, y }])
  }

  const chooseLetter = (letter: String, index: number) => {
    setChosenLetters((previous) => [...previous, letter])
    setLetters((previous) =>
      previous.filter((newLetter, newIndex) => newIndex !== index)
    )
  }

  return (
    <div className='home'>
      <div style={{ fontFamily: 'fantasy', fontSize: '30px', marginBottom: '5px' }}>
        {chosenLetters.length > 0 ? chosenLetters.join('') : '_'}
      </div>
      <button
        ref={buttonRef}
        className='red-button'
        onClick={handleButtonClick}></button>
      <div id='letter-overlay'>
        {letters.map((letter, index) => (
          <button
            key={index}
            onClick={() => chooseLetter(letter.letter, index)}
            style={{
              position: 'absolute',
              left: letter.x,
              top: letter.y,
              fontSize: '20px',
              cursor: 'pointer',
              pointerEvents: 'all',
            }}>
            {letter.letter}
          </button>
        ))}
      </div>
    </div>
  )
}
