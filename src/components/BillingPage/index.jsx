import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BillingPage.module.css'
import profile from './assets/profile.png'

import generalIcon from './assets/iconGeneral.png'
import passwordIcon from './assets/iconPassword.png'
import invitationsIcon from './assets/iconInvitations.png'
import billingIcon from './assets/iconBilling.png'
import appsIcon from './assets/iconApps.png'
import logoutIcon from './assets/iconLogout.png'

import visa from './assets/visa.png'

const index = () => {
  const tableData = [
		{
			id: 1,
			date: 'Oct. 21, 2021',
			type: 'Pro Annual',
			active: false,
		},
		{
			id: 2,
			date: 'Aug. 21, 2021',
			type: 'Pro Portfolio',
			active: true,
		},
		{
			id: 3,
			date: 'July. 21, 2021',
			type: 'Sponsored Post',
			active: false,
		},
		{
			id: 4,
			date: 'Jun. 21, 2021',
			type: 'Sponsored Post',
			active: false,
		},
	]

  return (
		<>
			<p className='project-description'>
				access figma file from{' '}
				<a
					href='https://uidesigndaily.com/posts/figma-billing-page-payment-day-1585'
					target='_blank'
				>
					here
				</a>
			</p>
			<div className={styles.wrapper}>
				<nav className={styles.sidebar}>
					<div className={styles.profile}>
						<img src={profile} alt='profile image' />
						<div className={styles.profileText}>
							<p>Ildiko Gaspar</p>
							<span>@igaspar</span>
						</div>
					</div>
					<ul>
						<li>
							<Link to='/billing-page'>
								<img src={generalIcon} alt='icon' />
								General
							</Link>
						</li>
						<li>
							<Link to='/billing-page'>
								<img src={passwordIcon} alt='icon' />
								Password
							</Link>
						</li>
						<li>
							<Link to='/billing-page'>
								<img src={invitationsIcon} alt='icon' />
								Invitations
							</Link>
						</li>
						<li className={styles.active}>
							<Link to='/billing-page'>
								<img src={billingIcon} alt='icon' />
								Billing
							</Link>
						</li>
						<li>
							<Link to='/billing-page'>
								<img src={appsIcon} alt='icon' />
								Apps
							</Link>
						</li>
						<li>
							<Link to='/billing-page'>
								<img src={logoutIcon} alt='logout icon' />
								Log out
							</Link>
						</li>
					</ul>
				</nav>
				<main className={styles.content}>
					<h1>Billing</h1>
					<div className={styles.row}>
						<div className={styles.order}>
							<div className={styles.orderDetails}>
								<p className={styles.title}>Order History</p>
								<span className={styles.subtitle}>
									Manage billing information and view receips
								</span>
								<table className={styles.orderTable}>
									<thead>
										<tr>
											<th>Date</th>
											<th>Type</th>
											<th>Receipt</th>
										</tr>
									</thead>
									<tbody>
										{tableData.map(data => (
											<tr
												key={data.id}
												className={`${data.active ? styles.active : ''}`}
											>
												<td>{data.date}</td>
												<td>{data.type}</td>
												<td>
													<button className={styles.btn}>Download</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
								<button className={styles.loadMoreBtn}>Load more</button>
							</div>
							<div className={styles.paymentDetails}>
								<p className={styles.title}>Payment Method</p>
								<span className={styles.subtitle}>
									Manage billing information and view receips
								</span>
								<div className={styles.payment}>
									<img src={visa} alt='visa logo' />
									<span>Visa ending in 2255</span>
									<button className={styles.btn}>Remove</button>
								</div>
							</div>
						</div>
						<div className={styles.planDetails}>
							<h5>Your Plan</h5>
							<h3>Pro Annual</h3>
							<p>Renews on Nov. 2021</p>
							<button>Cancel subscription</button>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default index
