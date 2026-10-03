const plantsHarvested = []

export const harvestPlants = (plants) => {

    for (const plant of plants) {
        if (plant.type === "corn") {
            for (let counter = 0; counter < plant.output / 2; counter++) { 
                plantsHarvested.push(plant) 
            }

        } else {

            for (let counter = 0; counter < plant.output; counter++) { 
                plantsHarvested.push(plant) 
            }
        }
    } return plantsHarvested

}