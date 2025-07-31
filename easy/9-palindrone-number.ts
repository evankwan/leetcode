function isPalindrome(x: number): boolean {
    const stringVersion = String(x);
    for (let char = 0; char <= stringVersion.length; char++) {
        if (stringVersion[char] !== stringVersion[stringVersion.length - 1 - char]) {
            return false;
        }
    }
    return true;
}