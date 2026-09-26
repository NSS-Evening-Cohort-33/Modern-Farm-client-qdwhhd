/*
Plant Properties Table
Type	    Height	Output      Type	    Height	Output
Asparagus	24	    4           Soybean	    20	    4
Corn	    180	    6           Sunflower	380	    3
Potato	    32	    2           Wheat	    230	    6
*/

import { createPlan } from './plan.js'
import {addPlant, usePlants} from './field.js'

// imported seed functions
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

// assignment of plant properties
const asparagusSeed = createAsparagus("asparagus", 24, 4)
const cornSeed = createCorn("corn", 180, 6)
const potatoSeed = createPotato("potato", 32, 2)
const soybeanSeed = createSoybean("soybean", 20, 4)
const sunflowerSeed = createSunflower("sunflower", 380, 3)
const wheatSeed = createWheat("wheat", 230, 6)

// test-logging of plant objects
// console.log(asparagusSeed)
// console.log(cornSeed)
// console.log(potatoSeed)
// console.log(soybeanSeed)
// console.log(sunflowerSeed)
// console.log(wheatSeed)

// test-logging of The Plan
const yearlyPlan = createPlan()
// console.log(yearlyPlan)


addPlant(asparagusSeed)
addPlant(potatoSeed)
addPlant(wheatSeed)
addPlant(cornSeed)


const field = usePlants()
console.log(field)