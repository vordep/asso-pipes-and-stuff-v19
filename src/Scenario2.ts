import { UnboundedASyncQueue } from "./queue";
import { Publisher } from "./publisher/Publisher";
import { Subscriber } from "./subscriber/Subscriber";

async function scenario2() {
    let Queue = new UnboundedASyncQueue<string>()
    let p1 = new Publisher()
    let subscriber_1 = new Subscriber('subscriber_1')
    let subscriber_2 = new Subscriber('subscriber_2')
    let subscriber_3 = new Subscriber('subscriber_3')
    subscriber_1.pull(Queue)
    subscriber_2.pull(Queue)
    subscriber_3.pull(Queue)

    p1.push(Queue, 'Lorem ipsum ')
    p1.push(Queue, 'dolor sit amet ')
    p1.push(Queue, ' consectetur adipiscing elit.')
}
scenario2()