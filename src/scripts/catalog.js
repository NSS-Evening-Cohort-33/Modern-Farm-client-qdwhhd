export const catalog = (harvestedFood) => {
    let plantHTML = '';

    for (const plant of harvestedFood) {
        plantHTML += `
        <article class= "plantType"> ${plant.type}

         </article>`



    }
    return plantHTML

}

