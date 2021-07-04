import './App.css';

//https://material-ui.com/components/radio-buttons/#radiogroup

const App = () => {
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
					'Have you been in contact with a confirmed case of CODVID 19 in the last 14 days',
				options,
			},
			[
				{ value: 0, label: 'No' },
				{ value: 1, label: 'Yes' },
			],
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
	return <div className="App"> <h1>lk';l'sal;</h1></div>;
};

export default App;
