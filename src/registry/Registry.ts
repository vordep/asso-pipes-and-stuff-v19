export abstract class Registry {
    id: number;
    static lastId: number = 0;

    constructor() {
        Registry.lastId++;
        this.id = Registry.lastId;
    }

    getId(): number {
        return this.id;
    }
}