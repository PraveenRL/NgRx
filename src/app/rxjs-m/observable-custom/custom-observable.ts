export class CustomObservable {

    public subscribeArray = [];

    constructor(subscriber) {
        setTimeout(() => {
            subscriber(this)
        }, 0);
    }

    subscribe(method) {
        this.subscribeArray.push(method);
    }

    next(value) {
        this.subscribeArray.forEach(x => {
            x(value);
        })
    }

}