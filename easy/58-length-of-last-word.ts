function lengthOfLastWord(s: string): number {
    const trimmed = s.trimEnd()

    let solution = ""
    for (let i = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] === " ") {
            break
        }
        solution = `${trimmed[i]}${solution}`
    }
    return solution.length
};

function lengthOfLastWord2(s: string): number {
    const trimmed = s.trimEnd()
    const split = trimmed.split(" ")
    return split[split.length - 1].length
};