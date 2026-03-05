import { FC } from "react"
import { Letter } from "../../shared/types"

type LetterButtonProps = {
    letter: Letter
    index: number
    handleLetterPicked: () => void
}

export const LetterButton: FC<LetterButtonProps> = ({
    letter,
    index,
    handleLetterPicked
}) => {

    return (
        <button
            id={`letter-${index}`}
            onClick={handleLetterPicked}
            style={{
                position: "absolute",
                left: letter.x,
                top: letter.y,
                fontSize: "20px",
                cursor: "pointer",
                pointerEvents: "all",
            }}
        >
            {letter.letter}
        </button>
    )
}