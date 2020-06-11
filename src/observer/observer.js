/**
 * The Observer pattern offers a subscription model in which objects subscribe 
 * to an event and get notified when the event occurs. 
 * This pattern is the cornerstone of event driven programming, including JavaScript. 
 * The Observer pattern facilitates good object-oriented design and promotes loose coupling.
 */

class Observer {
    constructor() {
        this.observers = [];
    }
    subscribe(callback) {
        this.observers.push(callback)
    }
    notify(payload) {
        this.observers.forEach(callback => callback(payload))
    }
}

export default Observer;