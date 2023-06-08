import React, { useState } from 'react'
import selected from './assets/selected.png'
import unselected from './assets/unselected.png'
import paypal from './assets/paypal.png'
import styles from './PricingCard.module.css'

const offerList = [
	{
		id: 1,
		type: 'Monthly',
		main: '4 weeks for free',
		price: 'Then $3 every month for the first year',
		active: true,
	},
	{
		id: 2,
		bestValue: true,
		type: 'Yearly',
		main: '4 weeks for free',
		price: 'Then $30 for the first year',
		active: false,
	},
]

const index = () => {
	const [offers, setOffers] = useState(offerList)

	const handleClick = id => {
		const newOffers = offers.map(offer => {
			if(offer.id === parseInt(id)) {
				return {...offer, active: true}
			} else {
				return { ...offer, active: false }
			}
		})

		setOffers(newOffers)
	}

  return (
		<>
			<p className='project-description'>
				access figma file from{' '}
				<a
					href='https://uidesigndaily.com/posts/figma-pricing-card-subscribe-day-1566'
					target='_blank'
				>
					here
				</a>
			</p>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<div className={styles.heading}>
						<h1 className={styles.title}>Try FREE for 4 weeks</h1>
						<h3 className={styles.subtitle}>
							We uncover the facts around the clock, all over the globe.
						</h3>
					</div>
					<div className={styles.offers}>
					{offers.map(offer => (
						<div key={offer.id} className={`${styles.offer} ${offer.active ? styles.active : ''}`} onClick={() => handleClick(offer.id)}>
							<div className={styles.icon}>
								<img src={offer.active ? selected : unselected} alt='icon' />
							</div>
							<div className={styles.content}>
								{offer.bestValue && <p className={styles.bestValue}>Best value</p>}
								<p className={styles.type}>{offer.type}</p>
								<p className={styles.main}>{offer.main}</p>
								<p className={styles.price}>{offer.price}</p>
							</div>
						</div>
					))}
					</div>
					<div className={styles.cta}>
						<button>continue</button>
						<button>
							continue with <img src={paypal} alt='paypal logo' />
						</button>
					</div>
					<a href='#' className={styles.link}>
						View more offers
					</a>
				</div>
			</div>
		</>
	)
}

export default index
