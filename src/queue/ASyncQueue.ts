

export interface ASyncQueue<T> {
    enqueue(val: T): void
    dequeue(): Promise<T>
    
}
