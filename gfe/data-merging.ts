type Session = { user: number; duration: number; equipment: Array<string> };

export default function mergeData(sessions: Array<Session>): Array<Session> {
	// create a map to quickly track user id and index in the array
	const userMap = new Map<Session["user"], Session>();

	// loop through sessions
	sessions.forEach((session) => {
		// check for existing user
		if (userMap.has(session.user)) {
			const data = userMap.get(session.user) as Session;
			// if user exists, add duration and push equipment
			data.duration += session.duration;
			// ensure equipment are unique
			data.equipment = Array.from(
				new Set([...data.equipment, ...session.equipment])
			);
			return;
		}
		// track user in Map, spread into obj to not mutate data
		userMap.set(session.user, { ...session });
	});
	// return the Map values and run mapper func
	return Array.from(userMap.values(), (value) => {
		value.equipment?.sort();
		return value;
	});
}
