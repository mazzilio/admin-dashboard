import React from 'react';
import styles from './sidebar.module.css';
import {
	MdDashboard,
	MdSupervisedUserCircle,
	MdShoppingBag,
	MdAttachMoney,
	MdWork,
	MdAnalytics,
	MdPeople,
	MdOutlineSettings,
	MdHelpCenter,
	MdLogout,
} from 'react-icons/md';
import { SideBarMenuItemDetails, SideBarMenuItems } from '@/app/types/sidebar';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems: SideBarMenuItems[] = [
	{
		title: 'Pages',
		list: [
			{
				title: 'Dashboard',
				path: '/dashboard',
				icon: <MdDashboard />,
			},
			{
				title: 'Users',
				path: '/dashboard/users',
				icon: <MdSupervisedUserCircle />,
			},
			{
				title: 'Products',
				path: '/dashboard/products',
				icon: <MdShoppingBag />,
			},
			{
				title: 'Transactions',
				path: '/dashboard/transactions',
				icon: <MdAttachMoney />,
			},
		],
	},
	{
		title: 'Analytics',
		list: [
			{
				title: 'Revenue',
				path: '/dashboard/revenue',
				icon: <MdWork />,
			},
			{
				title: 'Reports',
				path: '/dashboard/reports',
				icon: <MdAnalytics />,
			},
			{
				title: 'Teams',
				path: '/dashboard/teams',
				icon: <MdPeople />,
			},
		],
	},
	{
		title: 'User',
		list: [
			{
				title: 'Settings',
				path: '/dashboard/settings',
				icon: <MdOutlineSettings />,
			},
			{
				title: 'Help',
				path: '/dashboard/help',
				icon: <MdHelpCenter />,
			},
		],
	},
];

type Props = {};
const SideBar = (props: Props): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.user}>
				<Image
					src='/noiconuser.png'
					alt=''
					width='50'
					height='50'
					className={styles.userImage}
				/>
				<div className={styles.userDetails}>
					<span className={styles.username}>John Doe</span>
					<span className={styles.userTitle}>Administrator</span>
				</div>
			</div>
			<ul className={styles.list}>
				{menuItems.map((menuItem: SideBarMenuItems) => (
					<li key={menuItem.title}>
						<span className={styles.category}>
							{menuItem.title}
						</span>
						{menuItem.list.map(
							(details: SideBarMenuItemDetails) => (
								<MenuLink item={details} key={menuItem.title} />
							)
						)}
					</li>
				))}
			</ul>
			<button className={styles.logout}>
				<MdLogout />
				Logout
			</button>
		</div>
	);
};

export default SideBar;
