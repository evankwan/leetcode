class ArrayWrapper {

    private _val: number[];
    
    constructor(nums: number[]) {
        this._val = nums
    }
    
    valueOf(): number {
        let sum = 0
        for (let i = 0; i < this._val.length; i++) {
            sum += this._val[i]
        }
        return sum
    }
    
    toString(): string {
        return JSON.stringify(this._val)
    }
}