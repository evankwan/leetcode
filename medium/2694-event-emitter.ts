type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}
type SubscriptionRecord = {
    id: number;
    callback: Callback;
}

class EventEmitter {

    private subscribers: Record<string, SubscriptionRecord[]>;
    private latestId: number;

    constructor() {
        this.subscribers = {} as Record<string, SubscriptionRecord[]>
        this.latestId = 0
    }
    
    subscribe(eventName: string, callback: Callback): Subscription {
        const subscriptionId = this.latestId
        this.latestId++
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = []
        }
        this.subscribers[eventName].push({
            id: subscriptionId,
            callback,
        })
        return {
            unsubscribe: () => {
                const index = this.subscribers[eventName].findIndex(({ id }) => {
                    return id === subscriptionId
                })
                this.subscribers[eventName].splice(index, 1)
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        let results: any[] = []
        if (this.subscribers[eventName]) {
            this.subscribers[eventName].forEach((subscription, index) => {
                results[index] = subscription.callback(...args)
            })
        }
        return results
    }
}