enum LogAction {
	START = "start",
	END = "end",
}

type AccLog = {
	id: number;
	acc: number;
	startTime: number;
};

function exclusiveTime(n: number, logs: string[]): number[] {
	// create a map to track function times
	const times: number[] = [];
	// create a pause stack
	const paused: AccLog[] = [];
	// go through the stack
	let active: AccLog;
	logs.forEach((log, index) => {
		const [id, logAction, time] = log.split(":");
		const functionId = Number(id);
		const logTime = Number(time);
		// accumulate time for the function id
		if (!active) {
			active = {
				id: functionId,
				acc: 0,
				startTime: 0,
			};
			return;
		}
		// if another id starts, add the last function id and times to the paused stack
		if (logAction === LogAction.START) {
			paused.push({
				...active, // start time doesn't need resetting
				acc: logTime - active.startTime + active.acc,
			});
			active = {
				id: functionId,
				acc: 0,
				startTime: logTime,
			};
			return;
		}

		if (logAction === LogAction.END) {
			const executionTime = active.acc + (logTime - active.startTime + 1); // start 6/end6 is 1 unit of execution, so we need to add 1 to the end)
			times[active.id] = executionTime + (times[active.id] ?? 0);
			const unpaused = paused.pop();
			active = {
				...unpaused,
				startTime: logTime + 1, // if this does start, it's on the next unit of time (end on 6, start on 7), this also protects from another fn starting at the next unit of time
			} as AccLog;
			return;
		}
	});
	return times;
}
