import './App.css';
import { useState, useMemo } from 'react';

import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Button,
} from '@material-ui/core';
import { progressCalculater } from './ProgressCalculater';
import { ProgressIndicator } from './ProgressIndicator';
const options = [
	{ value: 0, label: 'No' },
	{ value: 1, label: 'Yes' },
];

//dollar man

const questions = {
	general: [
		{
			question:
				'Have you travelled out of the borders of Ghana in the past 14 days',
			options,
		},
		{
			question:
				'Have you within the past 14 days travelled in an area with known community spread of CODVID-19?',
			options,
		},
		{
			question:
				'Have you come in contact with someone,who has recently travelled outside Ghana within the past 14 days?',
			options,
		},
		{
			question:
				'Have you been in contact with a confirmed case of COVID-19 in the last 14 days',
			options,
		},
		// [
		// 	{ value: 0, label: 'No' },
		// 	{ value: 1, label: 'Yes' },
		// ],
	],
	symptoms: [
		{ question: 'Fever', options },
		{ question: 'Tiredness', options },
		{ question: 'Cough', options },
		{ question: 'Headache', options },
		{ question: 'Sneezing', options },
		{ question: 'Sore Throat', options },
		{ question: 'Runny Nose', options },
		{ question: 'Difficulty in Breathing and shortness of breath', options },
		{ question: 'Recent loss of smell  and taste', options },
		{
			question: 'Persistenet pain or pressure in the chest',
			options,
		},
	],
};

const App = () => {
	const [qIndex, setqIndex] = useState(0);
	const [qSet, setqSet] = useState('general');
	const question = questions[qSet][qIndex];
	const value = useMemo(
		() => progressCalculater(qIndex, questions[qSet].length),
		[qIndex, qSet]
	);

	const [answers, setAnswers] = useState({
		general: {},
		symptoms: {},
	});
	const handleChange = (event) => {
		const state = { ...answers };
		state[qSet][qIndex] = event.target.value;
		setAnswers(state);
	};
	const nextQuestion = () => {
		if (qIndex === Number(questions[qSet].length - 1)) {
			setqSet('symptoms');
			setqIndex(0);
		} else {
			setqIndex(qIndex + 1);
		}
	};
	const previousQuestion = () => {
		setqIndex(qIndex - 1);
	};

	return (
		<div className="App">
			<div className="appNav">
				<p className={`navItem ${qSet === 'general' ? 'activeNav' : ''}`}>
					General
				</p>
				<p className={`navItem ${qSet === 'symptoms' ? 'activeNav' : ''}`}>
					Symptoms
				</p>
			</div>
			<div className="linearPrgogress">
				<ProgressIndicator value={value}></ProgressIndicator>
			</div>
			<FormControl component="fieldset">
				<FormLabel component="legend">{question.question}</FormLabel>
				<RadioGroup
					aria-label={qSet}
					name={qSet}
					value={answers[qSet][qIndex] ?? ''}
					onChange={handleChange}
				>
					<FormControlLabel
						value={question.options[1].label}
						control={<Radio color="primary" />}
						label={question.options[1].label}
					/>
					<FormControlLabel
						value={question.options[0].label}
						control={<Radio color="primary" />}
						label={question.options[0].label}
					/>
				</RadioGroup>
			</FormControl>
			<div>
				<Button
					variant="contained"
					color="primary"
					style={{ marginRight: '50%' }}
					onClick={previousQuestion}
					disabled={qIndex === 0}
				>
					back
				</Button>

				<Button
					variant="contained"
					color="primary"
					onClick={nextQuestion}
					disabled={!answers[qSet][qIndex]}
				>
					next
				</Button>
			</div>
		</div>
	);
};

export default App;
