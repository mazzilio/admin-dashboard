import React from 'react';
import SideBar from '../ui/dashboard/sidebar/sidebar';
import NavBar from '../ui/dashboard/navbar/navbar';
import styles from '../ui/dashboard/dashboard.module.css';
import Footer from '../ui/dashboard/footer/footer';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<SideBar />
			</div>
			<div className={styles.content}>
				<NavBar />
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
