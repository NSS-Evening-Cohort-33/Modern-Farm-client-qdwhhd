

export const catalog = (harvestedFood) => {
    let plantHTML = '';
    for (const plant of harvestedFood) {
        plantHTML += `
        <section class= "plantType"> ${plant.type}
         </section>`
    }
    return plantHTML
}

