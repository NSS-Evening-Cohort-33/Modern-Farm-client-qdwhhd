const allPlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const item of seed) {
            allPlants.push(item)
        }
    } else
    
    allPlants.push(seed)
    return allPlants
}

export const usePlants = () => {
    return structuredClone(allPlants)
}
