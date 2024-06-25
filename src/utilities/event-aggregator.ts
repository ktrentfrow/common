export class EventAggregator {
	events: Record<string, Array<(data: unknown) => void>> = {};

	publish<T>(event: string, data: T): void {
        if (event in this.events) {
            this.events[event].forEach((cb) => cb(data))
        }
	}

	subscribe<T>(event: string, callback: (data: unknown) => void): void {
        if (event in this.events) {
            this.events[event].push(callback);
        } else {
            this.events[event] = [callback];
        }
	}
}