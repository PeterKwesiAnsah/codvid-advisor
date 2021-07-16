import React from 'react';
import { Typography, Button } from '@material-ui/core';
const colors = {
	high: '#C70039',
	low: '#87FF33',
};
const Diagnosis = ({ value = 0 }) => {
	const state = Number(value) > 50 ? 'high' : 'low';
	return (
		<section className="diagnosis">
			<Typography
				color="textPrimary"
				style={{
					fontSize: '20px',
				}}
			>
				You stand a{' '}
				<Typography
					style={{
						color: colors[state],
						textTransform: 'capitalize ',
						fontSize: '30px',
					}}
				>
					{state + '- risk'}
				</Typography>{' '}
				of been infected.
			</Typography>
			<div
				style={{
					marginTop: '20px',
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					justifyContent: 'space-evenly',
				}}
			>
				<a href="/" target="_self">
					<Button to="/" variant="contained" color="primary">
						Go Home
					</Button>
				</a>
				<a
					href="https://en.wikipedia.org/wiki/COVID-19"
					target="_blank"
					rel="noreferrer"
				>
					<Button variant="contained" color="secondary">
						Educational Resources
					</Button>
				</a>
				<a href="/centers">
					<Button variant="contained" color="textSecondary">
						Nearest Centers
					</Button>
				</a>

				<a
					href="https://www.ghanahealthservice.org/covid19/archive.php"
					rel="noreferrer"
					target="_blank"
				>
					<Button variant="contained" color="secondary" to="/">
						Emergency Contacts
					</Button>
				</a>
			</div>
		</section>
	);
};

export default Diagnosis;
