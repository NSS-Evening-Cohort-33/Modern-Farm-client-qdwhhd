import { usePlants } from './field.js'
import { addPlant } from './field.js'

// imported seeds
import { asparagusSeed } from './seeds/asparagus.js'
import { cornSeed } from './seeds/corn.js'
import { potatoSeed } from './seeds/potato.js'
import { soybeanSeed } from './seeds/soybean.js'
import { sunflowerSeed } from './seeds/sunflower.js'
import { wheatSeed } from './seeds/wheat.js'

export const plantSeeds = (plan) => {
        for (const row of plan) {
            for (const plant of row) {
                if (plant === 'Asparagus') {
                    addPlant(asparagusSeed)
                    }
                if (plant === 'Corn') {
                   addPlant(cornSeed)
                    }
                if (plant === 'Potato') {
                    addPlant(potatoSeed)
                    }
                if (plant === 'Soybean') {
                    addPlant(soybeanSeed)
                    }
                if (plant === 'Sunflower') {
                    addPlant(sunflowerSeed)
                    }
                if (plant === 'Wheat') {
                    addPlant(wheatSeed)
                    }
            }
        }
    return usePlants()
}


