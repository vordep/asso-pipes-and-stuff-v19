import { UnboundedASyncQueue } from "../queue";
import { Registry } from "registry/Registry";



export class Subscriber {
    constructor(public name: string) {  }

    async pull(queue: UnboundedASyncQueue<any>): Promise<void> {
        queue.dequeue().then(res => console.log(this.name + " " + res))
    }

    printMessage(message: any): void {
        console.log(this.name + " " + message);
    }
}

export class Observer extends Subscriber {

    constructor(name: string) {
        super(name);

    }
    //notifiy 
    notify(message: string) {
        this.printMessage(message);
    }


}


