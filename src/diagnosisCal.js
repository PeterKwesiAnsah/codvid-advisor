import { progressCalculater } from './ProgressCalculater';

export const diagnosisCal = (answers, total) => {
	let answersCount = 0;
	const values = [
		...Object.values(answers['general']),
		...Object.values(answers['symptoms']),
	];
	if (values.length === 0) {
		return 0;
	}
	for (const answer of values) {
		if (answer === 'Yes') {
			answersCount = answersCount + 1;
		}
	}

	return progressCalculater(answersCount - 1, total);
};
