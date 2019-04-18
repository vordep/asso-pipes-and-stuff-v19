import {UnboundedASyncQueue} from '../queue'
import {ASyncQueue} from '../queue'

export class Publisher{

    async push(queue : UnboundedASyncQueue<any>, message : any): Promise<void> {
        await queue.enqueue(message)
    }

}