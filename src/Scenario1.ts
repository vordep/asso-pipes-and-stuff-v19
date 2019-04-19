import { UnboundedASyncQueue } from "./queue";
import { Publisher } from "./publisher/Publisher";
import { Subscriber } from "./subscriber/Subscriber";

async function scenario1() {
    let Queue = new UnboundedASyncQueue<string>()
    let p1 = new Publisher()
    let subscriber_1 = new Subscriber('subscriber_1')
    subscriber_1.pull(Queue)
    subscriber_1.pull(Queue)


    p1.push(Queue, 'Lorem ipsum ')
    p1.push(Queue, ' consectetur adipiscing elit.')
}
scenario1()