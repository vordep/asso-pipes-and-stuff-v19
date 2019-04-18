import { UnboundedASyncQueue } from "../queue";


export class Subscriber {
    constructor(public name: string) { }

    async pull(queue: UnboundedASyncQueue<any>): Promise<void> {
        queue.dequeue().then(res => console.log(this.name + " " + res))
    }
}