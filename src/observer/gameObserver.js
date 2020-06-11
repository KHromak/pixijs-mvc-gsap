class GameObserver {
    constructor() {
        this.observers = [];
    }
    // add function-observer events addObserver
    subscribe(callback) {
        this.observers.push(callback)
    }
    // notify observers by event label emit
    broadcast(event) {
        this.observers.forEach((callback) => {
            callback(event);
        })
    }
}

export default GameObserver;