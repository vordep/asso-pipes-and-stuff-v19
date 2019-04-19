import { UnboundedASyncQueue } from '../queue'
import { ASyncQueue } from '../queue'
import { Registry } from '../registry/Registry';

export class Publisher extends Registry {
    constructor() {
        super();
    }
    async push(queue: UnboundedASyncQueue<any>, message: any): Promise<void> {
        await queue.enqueue(message)
    }

}