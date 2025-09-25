class TimeLimitedCache {
  private cache: Map<number, number>;
  private cacheToExpire: Map<number, number>;

  constructor() {
    this.cache = new Map();
    this.cacheToExpire = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let isKeyExists = false;
    if (this.cache.has(key)) {
      isKeyExists = true;
    }
    this.cache.set(key, value);
    this.setCacheExpiration(key, duration);
    return isKeyExists;
  }

  get(key: number): number {
    return this.cache.has(key) ? (this.cache.get(key) as number) : -1;
  }

  count(): number {
    return this.cache.size;
  }

  setCacheExpiration(key: number, duration: number): void {
    if (this.cacheToExpire.has(key)) {
      const clearId = this.cacheToExpire.get(key);
      clearTimeout(clearId);
    }
    const timeoutId = setTimeout(
      this.deleteCache.bind(this),
      duration,
      key,
    ) as unknown as number;
    this.cacheToExpire.set(key, timeoutId);
  }

  deleteCache(key: number): void {
    this.cache.delete(key);
    this.cacheToExpire.delete(key);
  }
}
