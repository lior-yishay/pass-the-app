export enum GrassPreference {
    DeepGreen = "Deep Green",
    RottenBrown = "Rotten Brown",
    ExtraTall = "Extra Tall",
    SoyGrass = "Soy Grass"
}

export enum Breed {
    HolsteinFriesian = "Holstein Friesian",
    HerefordCattle = "Hereford Cattle",
    AberdeenAngus = "Aberdeen Angus",
    SimmentalCattle = "Simmental Cattle",
    LimousinCattle = "Limousin Cattle",
    BelgianBlue = "Belgian Blue"
}

export enum BeerType {
    RedLager = "Red Lager",
    CreamAle = "Cream Ale",
    IndiaPaleAle = "India Pale Ale",
    OatmealStout = "Oatmeal Stout",
    LowCarb = "Low Carb"
}

export interface Cow {
    name: string
    age: number
    weightInKg: number
    heightInMeters: number
    grassPreference: GrassPreference
    breed: Breed,
    favoriteBeer: BeerType
    isReligious: boolean
    image: string,
    funFact: string
}