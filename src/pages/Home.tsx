import { useRef, useState } from "react"
import { api } from "../api"
import { LetterButton } from "../components/LetterButton/LetterButton"
import WordDisplay from "../components/WordDisplay/WordDisplay"
import { EmojiParticle, Letter } from "../shared/types"
import "./Home.css"

export default function Home() {
  const [letters, setLetters] = useState<Letter[]>([])
  const [chosenLetters, setChosenLetters] = useState<string[]>([])
  const [isValidWord, setIsValidWord] = useState(false)
  const [particles, setParticles] = useState<EmojiParticle[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isInBounds = (buttonRect: DOMRect | undefined, x: number, y: number) =>
    buttonRect &&
    x > buttonRect.left &&
    x < buttonRect.right &&
    y > buttonRect.top &&
    y < buttonRect.bottom

  const spawnLetter = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect()
    let x = 0
    let y = 0
    do {
      x = Math.random() * window.innerWidth
      y = Math.random() * window.innerHeight
    } while (isInBounds(buttonRect, x, y))

    const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    setLetters((prev) => [...prev, { letter, x, y }])
  }

  const handleLetterPicked = async (letter: string, index: number) => {
    const word = chosenLetters.join("") + letter
    setLetters((prev) => prev.filter((_, i) => i !== index))
    setChosenLetters((prev) => [...prev, letter])
    setIsValidWord(word.length > 2 && await api.dictionaryApi.isValidWord(word))
  }

  const clearChosenLetters = () => {
    setChosenLetters([])
    setIsValidWord(false)
  }

  return (
    <div className="home">
      <WordDisplay
        chosenLetters={chosenLetters}
        isValidWord={isValidWord}
        setParticles={setParticles}
        clearChosenLetters={clearChosenLetters}
      />

      <button
        ref={buttonRef}
        className="red-button"
        onClick={spawnLetter}
      ></button>

      {letters.map((letter, index) => (
        <LetterButton
          key={index}
          index={index}
          letter={letter}
          handleLetterPicked={() => handleLetterPicked(letter.letter, index)}
        />
      ))}

      {particles.map((p, i) => (
        <div
          key={i}
          className="emoji-particle"
          style={{
            left: p.x,
            top: p.y,
            transform: `translate(${p.dx}px, ${p.dy}px)`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  )
}