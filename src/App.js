import './App.css';
import { useState } from 'react';

import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Button,
} from '@material-ui/core';
const App = () => {
	const [stage, setStage] = useState(0);
	const [value, setValue] = useState('');
	const [userData, setData] = useState([]);
	const handleChange = (event) => {
		setValue(event.target.value);
	};
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

	return (
		<div className="App">
			<h3 style={{ textTransform: 'capitalize' }}>
				{Object.keys(questions)[0]}
			</h3>

			<p>{questions.general[stage].question}</p>
			<FormControl component="fieldset">
				<FormLabel
					component="legend"
					style={{ flexDirection: 'row', display: 'flex' }}
				>
					{options.map((item, index) => (
						<RadioGroup
							aria-label="gender"
							name="general"
							value={value}
							onChange={handleChange}
						>
							<FormControlLabel
								value={item.label}
								control={<Radio color="primary" />}
								label={item.label}
							/>
						</RadioGroup>
					))}
				</FormLabel>
			</FormControl>
			<div>
				<Button
					variant="contained"
					color="primary"
					style={{ marginRight: '50%' }}
					onClick={() =>
						stage > 0 ? setStage(stage - 1) : console.log('vibes')
					}
				>
					back
				</Button>

				<Button
					variant="contained"
					color="primary"
					onClick={() =>
						stage < questions.general.length - 1
							? setStage(stage + 1)
							: console.log('vibes')
					}
				>
					next
				</Button>
			</div>
		</div>
	);
};

export default App;
