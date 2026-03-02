import { CorruptionStage } from "./enums/corruptionStage"

export interface UserExample {
    firstName: string,
    lastName: string
}


export interface Corruption {
    value: number,
    stage: CorruptionStage
}