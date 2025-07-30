interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function(fn) {
    const groups = {}
    for (let i = 0; i < this.length; i++) {
        const res = fn(this[i])
        if (groups[res]) {
            groups[res].push(this[i])
        } else {
            groups[res] = [this[i]]
        }
    }
    return groups
}