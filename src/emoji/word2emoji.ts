import { random, search } from "node-emoji";

export const word2emoji = (word: string): string =>
    search(word).map(({ emoji }) => emoji)[0] ?? random().emoji