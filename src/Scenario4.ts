import { UnboundedASyncQueue } from "./queue";
import { Publisher } from "./publisher/Publisher";
import { Observer, Subscriber } from "./subscriber/Subscriber";
import { Ventilator } from "./ventilator/Ventilator";
import { Broker } from "broker/Broker";

async function scenario3() {

    let broker = new Broker();

    let p1 = new Publisher();
    let p2 = new Publisher();
    let p3 = new Publisher();

    let subscriber_1 = new Observer('subscriber_1')
    let subscriber_2 = new Observer('subscriber_2')
    let subscriber_3 = new Observer('subscriber_3')



    broker.addPublisher(p1);
    broker.addPublisher(p2);
    broker.addPublisher(p3);

    broker.addSubscriberToPublisher(subscriber_1, p1)
    broker.addSubscriberToPublisher(subscriber_2, p1)
    broker.addSubscriberToPublisher(subscriber_2, p2)
    broker.addSubscriberToPublisher(subscriber_3, p3)
    broker.addSubscriberToPublisher(subscriber_3, p2)
    broker.addSubscriberToPublisher(subscriber_3, p1)


    p1.push(broker.getQueue[p1.getId()], 'Lorem ipsum ')
    p1.push(broker.getQueue[p1.getId()], 'dolor sit amet ')
    p1.push(broker.getQueue[p1.getId()], ' consectetur adipiscing elit.')

    p2.push(broker.getQueue[p2.getId()], 'Lorem ipsum ')
    p2.push(broker.getQueue[p2.getId()], 'dolor sit amet ')
    p2.push(broker.getQueue[p2.getId()], ' consectetur adipiscing elit.')

    p3.push(broker.getQueue[p3.getId()], 'Lorem ipsum ')
    p3.push(broker.getQueue[p3.getId()], 'dolor sit amet ')
    p3.push(broker.getQueue[p3.getId()], ' consectetur adipiscing elit.')

}
scenario3()