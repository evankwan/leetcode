function mySqrt(x: number): number {
    if (x === 1) return 1
    let low = 0
    let high = x
    let mid = 0
    let isSearching = true
    while (isSearching) {
        mid = Math.floor((low + high) / 2)
        const isCorrect = mid * mid <= x && (mid + 1) * (mid + 1) > x
        if (isCorrect) {
            isSearching = false
            break
        }
        if (mid**2 > x) {
            high = Math.round(mid) - 1
        } else {
            low = Math.round(mid) + 1
        }
    }
    return Math.floor(mid)
};