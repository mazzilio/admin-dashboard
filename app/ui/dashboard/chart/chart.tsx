'use client';
import React from 'react';
import styles from './chart.module.css';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

type Props = {};

const data = [
	{
		name: 'Mon',
		visit: 4000,
		clicks: 2400,
	},
	{
		name: 'Tues',
		visit: 3000,
		clicks: 1398,
	},
	{
		name: 'Wed',
		visit: 2000,
		clicks: 9800,
	},
	{
		name: 'Thurs',
		visit: 2780,
		clicks: 3908,
	},
	{
		name: 'Fri',
		visit: 1890,
		clicks: 4800,
	},
	{
		name: 'Sat',
		visit: 2390,
		clicks: 3800,
	},
	{
		name: 'Sun',
		visit: 3490,
		clicks: 4300,
	},
];

const Chart = (props: Props): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Weekly Recap</h2>
			<ResponsiveContainer width='100%' height='90%'>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 25,
						right: 1,
						left: 0,
						bottom: 5,
					}}
				>
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip
						contentStyle={{ background: '#151c2c', border: 'none' }}
					/>
					<Legend />
					<Line
						type='monotone'
						dataKey='visit'
						stroke='#8884d8'
						strokeDasharray='5 5'
					/>
					<Line
						type='monotone'
						dataKey='clicks'
						stroke='#82ca9d'
						strokeDasharray='3 4 5 2'
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
