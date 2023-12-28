import React from 'react';
import styles from './footer.module.css';

type Props = {};

const Footer = (props: Props): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>mazzilio</div>
			<div className={styles.copyright}>© All rights reserved.</div>
		</div>
	);
};

export default Footer;
