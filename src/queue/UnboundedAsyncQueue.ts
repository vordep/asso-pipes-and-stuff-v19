import { ASyncQueue } from "queue";
import { AsyncSemaphore } from "../semaphore/AsyncSemaphore";


export class UnboundedASyncQueue<T> implements ASyncQueue<T>{
    private queue = Array<T>()
    private waitingEnqueue: AsyncSemaphore
    constructor() {
        this.waitingEnqueue = new AsyncSemaphore(0)
    }
    enqueue(val: T): void {
        console.log("enqueue")
        this.queue.unshift(val)
        this.waitingEnqueue.signal()
        
    }
    async dequeue(): Promise<T> {
        await this.waitingEnqueue.wait()
        return this.queue.pop()
    }
}
