// export const catalog = (harvestedFood) => {
//     let plantHTML = '';

//     for (const plant of harvestedFood) {
//         plantHTML += `
//         <section class= "plantType"> 
//             ${plant.type}
//         </section>`
//     }
//     return plantHTML

// }

export const catalog = (harvestedFood) => {
    let plantHTML = '';

    for (const plant of harvestedFood) {
        plantHTML += `
        <section class= "plant-type"> 
            ${plant.type}
        </section>`
    }
    return plantHTML

}

