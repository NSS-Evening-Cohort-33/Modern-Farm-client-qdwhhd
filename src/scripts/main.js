/*
Plant Properties Table
Type	    Height	Output      Type	    Height	Output
Asparagus	24	    4           Soybean	    20	    4
Corn	    180	    6           Sunflower	380	    3
Potato	    32	    2           Wheat	    230	    6
*/

import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js'

// imported seed functions
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

// sowing the field
import { plantSeeds } from './tractor.js'

// assignment of plant properties
export const asparagusSeed = createAsparagus("asparagus", 24, 4)
export const cornSeed = createCorn("corn", 180, 6)
export const potatoSeed = createPotato("potato", 32, 2)
export const soybeanSeed = createSoybean("soybean", 20, 4)
export const sunflowerSeed = createSunflower("sunflower", 380, 3)
export const wheatSeed = createWheat("wheat", 230, 6)


const yearlyPlan = createPlan()

const field = usePlants()

const plantedSeeds = plantSeeds(yearlyPlan)

const plantsHarvested = harvestPlants(plantedSeeds)

console.log(plantsHarvested)
