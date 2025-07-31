class Calculator {

    private result: number;

    private ERROR_CODES = {
        DIVIDE_BY_ZERO: "Division by zero is not allowed"
    }
    
    constructor(value: number) {
        this.result = value
    }
    
    add(value: number): Calculator {
        this.result += value
        return this
    }
    
    subtract(value: number): Calculator {
        this.result -= value
        return this
    }
    
    multiply(value: number): Calculator {
        this.result *= value
        return this
    }
    
    divide(value: number): Calculator {
        if (!value) {
            throw this.ERROR_CODES.DIVIDE_BY_ZERO
        }
        this.result /= value
        return this
    }
    
    power(value: number): Calculator {
        this.result = Math.pow(this.result, value)
        return this
    }
    
    getResult(): number {
        return this.result
    }
}