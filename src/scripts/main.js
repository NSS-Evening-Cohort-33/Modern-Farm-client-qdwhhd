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
import { catalog } from './catalog.js'
import { plantSeeds } from './tractor.js' // sowing the field


const yearlyPlan = createPlan()

const field = usePlants()

const plantedSeeds = plantSeeds(yearlyPlan)

const plantsHarvested = harvestPlants(plantedSeeds)

const plantHTML = document.querySelector(".container")
plantHTML.innerHTML = catalog(plantsHarvested)

console.log(plantedSeeds)
