function sortVowels(s: string): string {
    let string = s.split("");
    let vowelIndices: number[] = [],
        vowelsArray: string[] = [];
    const vowels = "aeiou"
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowelIndices.push(i)
            vowelsArray.push(s[i])
        }
    }

    vowelsArray.sort(function(a: string, b: string)  {
        return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1
    })

    for (let i = 0; i < vowelsArray.length; i++) {
        const indexToReplace = vowelIndices[i]
        string[indexToReplace] = vowelsArray[i]
    }

    return string.join("")
};