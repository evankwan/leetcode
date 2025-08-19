function plusOne(digits: number[]): number[] {
    const newDigits = [...digits]
    let carry = 1
    for (let i = newDigits.length - 1; i >= -1; i--) {
        if (i === -1) {
            newDigits.unshift(1)
        }

        newDigits[i] = newDigits[i] + carry
        carry = 0

        if (newDigits[i] === 10) {
            newDigits[i] = 0
            carry = 1
        }
        
        if (!carry) break
    }
    return newDigits
};