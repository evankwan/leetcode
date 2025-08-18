function clamp(num: number): number {
    const max = 2**31 - 1
    const min = -(2**31)
    if (num > max) {
        return max
    } else if (num < min) {
        return min
    }
    return num
}

function myAtoi(s: string): number {
    const trimmed = s.trim()
    let newString = ""
    let multiplier = 1
    for (let i = 0; i < trimmed.length; i++) {
        if (trimmed[i] === "-" && i === 0) {
            multiplier = -1
            continue
        } else if (trimmed[i] === "+" && i === 0) {
            multiplier = 1
            continue
        } else if (!Number.isInteger(Number(trimmed[i])) || trimmed[i] === " ") {
            break
        }
        newString += trimmed[i]
    }

    return clamp(Number(newString) * multiplier)
};