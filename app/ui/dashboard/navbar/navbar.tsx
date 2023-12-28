'use client';
import React from 'react';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import {
	MdNotifications,
	MdOutlineChat,
	MdPublic,
	MdSearch,
} from 'react-icons/md';

type Props = {};

const NavBar = (props: Props): React.JSX.Element => {
	const pathname = usePathname();
	const currentLocation = pathname.split('/').pop();
	return (
		<div className={styles.container}>
			<div className={styles.title}>{currentLocation}</div>
			<div className={styles.menu}>
				<div className={styles.search}>
					<MdSearch />{' '}
					<input
						type='text'
						placeholder='Search...'
						className={styles.input}
					/>
					<div className={styles.icons}>
						<MdOutlineChat size={20} />
						<MdNotifications size={20} />
						<MdPublic size={20} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
