'use client';
import React, { useState } from 'react';
import styles from './transactions.module.css';
import Image from 'next/image';
import { Transactions } from '@/app/types/transactions';

type Props = {};

const transactionDetails: Transactions[] = [
	{ name: 'John Doe', status: 'Pending', date: '31/01/2023', amount: 3200 },
	{ name: 'Jane Doe', status: 'Done', date: '31/01/2023', amount: 3200 },
	{ name: 'Joe Mama', status: 'Cancelled', date: '31/01/2023', amount: 3200 },
];

const Transactions = (props: Props): React.JSX.Element => {
	const [transactions, setTransactions] =
		useState<Transactions[]>(transactionDetails);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Latest Transactions</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Name</td>
						<td>Status</td>
						<td>Date</td>
						<td>Amount</td>
					</tr>
				</thead>
				<tbody>
					{transactions?.map(
						(transaction: Transactions, index: number) => (
							<tr key={index}>
								<td>
									<div className={styles.user}>
										<Image
											src='/noiconuser.png'
											alt=''
											width={40}
											height={40}
											className={styles.userImage}
										/>
										{transaction.name}
									</div>
								</td>
								<td>
									{/* Todo: Make this as a component with a passable icon */}
									<span
										className={`${styles.status} ${styles.pending}`}
									>
										{transaction.status}
									</span>
								</td>
								<td>{transaction.date}</td>
								<td>{transaction.amount}</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Transactions;
