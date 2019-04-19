import { Publisher } from "publisher/Publisher";
import { UnboundedASyncQueue } from "../queue";
import { Subscriber, Observer } from "../subscriber/Subscriber";
import { Registry } from "../registry/Registry";
import { Ventilator } from "../ventilator/Ventilator";

export class Broker {

    private registries: { [key: number]: UnboundedASyncQueue<any>; }
    private publisherSubscriber: { [key: number]: Ventilator; };

    constructor() {
        this.registries = {};
        this.publisherSubscriber = {};
    }

    addPublisher(pub: Publisher) {
        this.publisherSubscriber[pub.getId()] = new Ventilator();
        this.registries[pub.getId()] = new UnboundedASyncQueue<any>();
    };


    addSubscriberToPublisher(subscrib: Observer, pub: Publisher) {
        this.publisherSubscriber[pub.getId()].addSubscriber(subscrib);
    };

    getQueue(reg: Registry): UnboundedASyncQueue<any> {
        return this.registries[reg.getId()];
    }

    async pull(reg: Registry) {
        let queue = this.registries[reg.getId()];
        this.publisherSubscriber[reg.getId()].pull(queue);
    }

}