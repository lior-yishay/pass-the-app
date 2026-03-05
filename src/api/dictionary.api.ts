import get from "axios"

const prefix = "https://api.dictionaryapi.dev/api/v2/entries/en/"

export const dictionaryApi = {
    isValidWord: async (word: string) => {
        try {
            await get(`${prefix}${word}`)
            return true
        }
        catch {
            return false
        }
    }
}