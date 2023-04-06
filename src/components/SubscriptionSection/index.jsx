import React from 'react'
import styles from './SubscriptionSection.module.css'
import plan1 from './assets/plan1.png'
import plan2 from './assets/plan2.png'
import plan3 from './assets/plan3.png'

const plans = [
	{
		id: 1,
		name: 'Ice Mobile 10GB',
		feature: 'Up to 100Mbit/s',
		amount: '299,-',
		img: plan1,
	},
	{
		id: 2,
		name: 'Telia Mobil 15GB',
		feature: 'Unlimited calls, SMS and MMS',
		amount: '953,-',
		img: plan2,
	},
	{
		id: 3,
		name: 'Telenor Next Fast',
		feature: 'Up to 100Mbit/s',
		amount: '1028,-',
		img: plan3,
	},
]

export default function index() {
  return (
		<>
			<p className='project-description'>
				access figma file from{' '}
				<a
					href='https://uidesigndaily.com/posts/figma-buy-subscription-section-pricing-card-day-1574'
					target='_blank'
				>
					here
				</a>
			</p>
			<div className={styles.wrapper}>
				<section>
					<h2 className={styles.sectionTitle}>
						Get the most out of your mobile with the right subscription
					</h2>
					<h3 className={styles.sectionSubTitle}>
						All devices come with free delivery or pickup as standard. See
						information on available shopping options for your location.
					</h3>
					<div className={styles.plans}>
						{plans.map(plan => (
							<div key={plan.id} className={styles.plan}>
								<img src={plan.img} alt='plan logo' />
								<p className={styles.title}>
									<span className={styles.name}>{plan.name}</span>
									<span className={styles.feature}>{plan.feature}</span>
								</p>
								<div className={styles.price}>
									<span className={styles.amount}>{plan.amount}</span>
									<span className={styles.month}>/month</span>
								</div>
								<button className={styles.btn}>Add subscription</button>
							</div>
						))}
					</div>
					<button className={styles.cta}>See all subscriptions</button>
				</section>
			</div>
		</>
	)
}
