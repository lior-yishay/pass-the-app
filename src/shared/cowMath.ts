import { Cow, GrassPreference, BeerType, Breed } from "./types"
import { specialHerd } from "../proxyServer/Data";

const scientificRacism = [
    {
        breed: Breed.AberdeenAngus,
        importance: 3
    },
    {
        breed: Breed.BelgianBlue,
        importance: 4
    },
    {
        breed: Breed.HerefordCattle,
        importance: 2
    },
    {
        breed: Breed.HolsteinFriesian,
        importance: 2
    },
    {
        breed: Breed.LimousinCattle,
        importance: 5
    },
    {
        breed: Breed.SimmentalCattle,
        importance: 1
    }
]

const areaPerGrassTypePerMinute = [
    {
        grassType: GrassPreference.RottenBrown,
        areaPerMinute: 3
    },
    {
        grassType: GrassPreference.DeepGreen,
        areaPerMinute: 4
    },
    {
        grassType: GrassPreference.ExtraTall,
        areaPerMinute: 5
    },
    {
        grassType: GrassPreference.SoyGrass,
        areaPerMinute: 8
    }
];

const beerPartyPower = [
    {
        BeerType: BeerType.CreamAle,
        partyPower: 50
    },
    {
        BeerType: BeerType.IndiaPaleAle,
        partyPower: 200
    },
    {
        BeerType: BeerType.LowCarb,
        partyPower: 0
    },
    {
        BeerType: BeerType.OatmealStout,
        partyPower: 70
    },
    {
        BeerType: BeerType.RedLager,
        partyPower: 20
    }
]

export const calculateCowPrice = (cow:Cow): number => {
    const isLifeOfTheParty = Math.max(...specialHerd.map(herdCow => getPartyKingScore(herdCow))) === getPartyKingScore(cow) ? 100 : 0;
    const yearsKickin = 100 - cow.age
    const cowBreedImportance = (scientificRacism.find(race => race.breed === cow.breed)?.importance ?? 0) * 60
    const cowBMI = cow.weightInKg / Math.pow(cow.heightInMeters, 2)
    return isLifeOfTheParty + yearsKickin + cowBreedImportance + (cowBMI > 18.5 ? cowBMI < 24.9 ? 400 : cowBMI < 30? 200: 0: 0)
}

export const calculateCowGrassEattingEfficiancy = (cow: Cow) => {
    const relevantAPM = areaPerGrassTypePerMinute.find(apgtpm => apgtpm.grassType === cow.grassPreference)?.areaPerMinute ?? 0
    return cow.weightInKg * 0.8 * cow.heightInMeters * relevantAPM
}

export const getPartyKingScore = (cow:Cow) => {
    const BPP = beerPartyPower.find(vee => vee.BeerType === cow.favoriteBeer)?.partyPower ?? 0
    const hasCoolName = cow.name.endsWith('apropo'.slice(-3))
    return BPP * 100 + (1 - Math.sin(cow.age * 2.2)) + (hasCoolName ? 1 : 0) * 420;
}