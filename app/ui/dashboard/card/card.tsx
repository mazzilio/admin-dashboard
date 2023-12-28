import React from 'react';
import styles from './card.module.css';
import { MdSupervisedUserCircle } from 'react-icons/md';

type Props = {};
// Todo: Create props to pass in to get information to be displayed here

const Card = (props: Props): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<MdSupervisedUserCircle size={24} />
			<div className={styles.texts}>
				<span className={styles.title}>Total Users</span>
				<span className={styles.number}>90,813</span>
				<span className={styles.detail}>
					<span className={styles.positive}>17%</span> more than the
					previous month.
				</span>
			</div>
		</div>
	);
};

export default Card;
