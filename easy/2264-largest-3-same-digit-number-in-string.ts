function largestGoodInteger(num: string): string {
    let int = ""
    for (let i = 9; i >= 0; i--) {
        const test = `${i}${i}${i}`
        if (num.indexOf(test) === -1) {
            continue
        }
        int = test
        break
    }
    return int
}