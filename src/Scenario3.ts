import { UnboundedASyncQueue } from "./queue";
import { Publisher } from "./publisher/Publisher";
import { Observer } from "./subscriber/Subscriber";
import { Ventilator } from "./ventilator/Ventilator";

async function scenario3() {
    
    let Queue = new UnboundedASyncQueue<string>()
    
    let p1 = new Publisher()
    
    let subscriber_1 = new Observer('subscriber_1')
    let subscriber_2 = new Observer('subscriber_2')
    let subscriber_3 = new Observer('subscriber_3')

    let ventilator = new Ventilator();

    ventilator.addSubscriber(subscriber_1)
    ventilator.addSubscriber(subscriber_2)
    ventilator.addSubscriber(subscriber_3)

    ventilator.pull(Queue)
    ventilator.pull(Queue)
    ventilator.pull(Queue)

    p1.push(Queue, 'Lorem ipsum ')
    p1.push(Queue, 'dolor sit amet ')
    p1.push(Queue, ' consectetur adipiscing elit.')
}
scenario3()