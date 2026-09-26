const allPlants = []

export const addPlant = (seed) => {
    allPlants.push(seed)
    return allPlants
}

export const usePlants = () => {
    return structuredclone(allPlants)
}
