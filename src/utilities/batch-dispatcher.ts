export class BatchDispatcher<T = unknown, S = unknown> {
	data: Array<T> = [];

	// variable to store our intervalID
	nIntervId;

	/**
	 * Creates a batch dispatcher that batches data and then dispatches array based updates
	 * at the given interval
	 * @param delayInMs The delay in milliseconds between dispatches
	 * @param dispatch The dispatch method to call (e.g. a vuex action)
	 */
	constructor(private delayInMs: number, private dispatch: (data: Array<T>) => S | Promise<S>) {
		this.nIntervId = setInterval(() => this.executeDispatch(), delayInMs);
	}

	batch(data: T): void {
		this.data.push(data);
	}

	executeDispatch(): void {
		if (this.data.length > 0) {
			void this.dispatch(this.data);
			this.data = [];
		}
	}

	resetBatchInterval(delayMs: number): void {
		clearInterval(this.nIntervId);
		// release our intervalID from the variable
		this.nIntervId = null;
		this.nIntervId = setInterval(() => this.executeDispatch(), delayMs);
	}

    close() {
		clearInterval(this.nIntervId);
		// release our intervalID from the variable
		this.nIntervId = null;
    }
}
