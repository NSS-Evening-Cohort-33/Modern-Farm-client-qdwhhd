
export const createCorn = (type, height, output) => {
    let cornItem = [
        {
            type: type,
            height: height,
            output: output
        },
        {
            type: type,
            height: height,
            output: output
        }
    ]
    return cornItem
}