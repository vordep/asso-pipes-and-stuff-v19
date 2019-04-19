import { Observer } from "subscriber/Subscriber";
import { UnboundedASyncQueue } from "queue";

export class Ventilator {
    private subscribers: Array<Observer>

    constructor() {
        this.subscribers= new  Array<Observer>();
    }

    notifySubscribers(msg: any): void {
        for (let subscriber of this.subscribers)
            subscriber.notify(msg)
    }

    addSubscriber(subscriber: Observer): void {
        this.subscribers.push(subscriber)
    }

    async pull(queue: UnboundedASyncQueue<any>): Promise<void> {
         this.notifySubscribers(await queue.dequeue())
    }
}