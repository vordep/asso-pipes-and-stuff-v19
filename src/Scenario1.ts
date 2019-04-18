import { UnboundedASyncQueue } from "./queue";
import { Publisher } from "./publisher/Publisher";
import {Subscriber} from "./subscriber/Subscriber";

async function scenario1() {   
    let Queue = new UnboundedASyncQueue<string>()
    let p1 = new Publisher()
    let s1 = new Subscriber('subscriber_1')
    s1.pull(Queue)
    p1.push(Queue, 'Lorem ipsum ')
} 
scenario1()