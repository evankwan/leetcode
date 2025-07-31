function romanToInt(s: string): number {
    const numeralMap = new Map()
    numeralMap.set("I", 1)
    numeralMap.set("V", 5)
    numeralMap.set("X", 10)
    numeralMap.set("L", 50)
    numeralMap.set("C", 100)
    numeralMap.set("D", 500)
    numeralMap.set("M", 1000)

    const array = s.split("")
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (numeralMap.get(array[i]) > numeralMap.get(array[i - 1])) {
            continue
        } else if (numeralMap.get(array[i]) < numeralMap.get(array[i + 1])) {
            sum += numeralMap.get(array[i + 1]) - numeralMap.get(array[i]);
        } else {
            sum += numeralMap.get(array[i])
        }
    }
    return sum
}