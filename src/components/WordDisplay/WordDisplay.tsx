import { word2emoji } from "../../emoji/word2emoji"
import { EmojiParticle } from "../../shared/types"
import "./WordDisplay.css"

type Props = {
    chosenLetters: string[]
    isValidWord: boolean
    setParticles: (emojiParticle: EmojiParticle[]) => void
    clearChosenLetters: () => void
}

export default function WordDisplay({
    chosenLetters,
    isValidWord,
    setParticles,
    clearChosenLetters
}: Props) {

    const explodeEmoji = (emojiChar: string) => {
        const count = 20
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const newParticles = []

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2
            const speed = 200 + Math.random() * 200
            newParticles.push({
                emoji: emojiChar,
                x: centerX,
                y: centerY,
                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed,
            })
        }

        setParticles(newParticles)
        setTimeout(() => setParticles([]), 2000)
    }

    const submitWord = () => {
        const word = chosenLetters.join("").toLowerCase()
        const wordElement = document.getElementById("word")
        if (!word) return

        if (!isValidWord) {
            if (wordElement) {
                wordElement.classList.add("invalid-shake")
                setTimeout(() => {
                    wordElement.classList.remove("invalid-shake")
                }, 400)
            }
            clearChosenLetters()
            return
        }

        const emojiChar = word2emoji(word)
        explodeEmoji(emojiChar)
        clearChosenLetters()
    }

    return (
        <div
            id="word"
            onClick={submitWord}
            className={`word ${isValidWord ? "valid-word" : ""}`}
        >
            {chosenLetters.length > 0 ? chosenLetters.join("") : "_"}
        </div>
    )
}