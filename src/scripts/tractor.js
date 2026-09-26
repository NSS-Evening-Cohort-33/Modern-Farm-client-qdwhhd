import { usePlants } from './field.js'
import { addPlant } from './field.js'
import {asparagusSeed} from './main.js'
import {cornSeed} from './main.js'
import {potatoSeed} from './main.js'
import {soybeanSeed} from './main.js'
import {sunflowerSeed} from './main.js'
import {wheatSeed} from './main.js'

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


