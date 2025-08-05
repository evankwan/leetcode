// for readability
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    const basketMap: Set<number> = new Set()
    let unplaced = 0
    fruits.forEach((fruit) => {
        const newBasketIndex = baskets.findIndex((basket, basketIndex) => {
            return !basketMap.has(basketIndex) && basket >= fruit
        })
        if (newBasketIndex < 0) {
            unplaced++
        } else {
            basketMap.add(newBasketIndex)
        }
    })
    return unplaced
};
