import React from 'react';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';

const tableHeadings: string[] = [
	'Name',
	'Email',
	'Created at',
	'Role',
	'Status',
	'Action',
];

const data = [
	{
		name: 'John Doe',
		email: 'john.doe@gmail.com',
		created: '30 Oct 2023',
		role: 'client',
		status: 'Pending',
	},
];

const UsersPage = (): React.JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder='Search for a user...' />
				{/*  TODO - ADD LINKS IN AN ENUM */}
				<Link href='/dashboard/users/add'>
					<button className={styles.addButton}>Add User</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						{tableHeadings?.map((h: string, index: number) => (
							<td key={index}>{h}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{data?.map((d, index) => (
						<tr key={index}>
							<td>
								<div className={styles.user}>
									<Image
										src='/noiconuser.png'
										alt=''
										width={40}
										height={40}
										className={styles.userIcon}
									/>
									{d.name}
								</div>
							</td>
							<td>{d.email}</td>
							<td>{d.created}</td>
							<td>{d.role}</td>
							<td>{d.status}</td>
							<td>
								<div className={styles.buttons}>
									<Link href={''}>
										<button
											className={`${styles.button} ${styles.view}`}
										>
											View
										</button>
									</Link>
									<button
										className={`${styles.button} ${styles.delete}`}
									>
										Delete
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UsersPage;
