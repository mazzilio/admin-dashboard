'use client';

import React from 'react';
import styles from './menuLink.module.css';
import { SideBarMenuItemDetails } from '@/app/types/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = { item: SideBarMenuItemDetails };

const MenuLink = ({ item }: Props): React.JSX.Element => {
	const pathname = usePathname();

	return (
		<Link
			href={item.path}
			className={`${styles.container} ${
				pathname === item.path && styles.active
			}`}
		>
			{item.icon} {item.title}
		</Link>
	);
};

export default MenuLink;
