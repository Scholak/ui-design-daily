import React from 'react'
import styles from './RentACar.module.css'
import infoIcon from './assets/info.png'
import tickIcon from './assets/tick.png'
import arrowDownIcon from './assets/arrowDown.png'
import dateIcon from './assets/date.png'

const index = () => {return (
	<>
		<p className='project-description'>
			access figma file from{' '}
			<a
				href='https://uidesigndaily.com/posts/figma-rent-a-car-ui-design-card-search-day-1579'
				target='_blank'
			>
				here
			</a>
		</p>
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.shapeYellow}></div>
				<div className={styles.shapeOrange}></div>
				<div className={styles.content}>
					<h2 className={styles.title}>Search for a rental car</h2>
					<div className={styles.location}>
						<label htmlFor='location'>Pick up location</label>
						<input
							type='text'
							name='location'
							placeholder='City, airport, region, district...'
						/>
					</div>
					<div className={styles.checkboxArea}>
						<input type='checkbox' name='checkbox' />
						<label htmlFor='checkbox'>Deliver the car somewhere else</label>
					</div>
					<div className={styles.row}>
						<div className={styles.dateDelivery}>
							<label htmlFor='pickup'>Date of pickup</label>
							<div className={styles.datePicker}>
								<img src={dateIcon} alt='date icon' />
								<span>Sat 26 Mar 2022</span>
								<img src={arrowDownIcon} alt='arrow down icon' />
							</div>
							<div className={styles.inlineRow}>
								<div className={styles.datePicker}>
									<img src={dateIcon} alt='date icon' />
									<span>10</span>
									<img src={arrowDownIcon} alt='arrow down icon' />
								</div>
								<div className={styles.datePicker}>
									<img src={dateIcon} alt='date icon' />
									<span>00</span>
									<img src={arrowDownIcon} alt='arrow down icon' />
								</div>
							</div>
						</div>
						<div className={styles.datePickup}>
							<label htmlFor='pickup'>Date of delivery</label>
							<div className={styles.datePicker}>
								<img src={dateIcon} alt='date icon' />
								<span>Tue 29 Mar 2022</span>
								<img src={arrowDownIcon} alt='arrow down icon' />
							</div>
							<div className={styles.inlineRow}>
								<div className={styles.datePicker}>
									<img src={dateIcon} alt='date icon' />
									<span>10</span>
									<img src={arrowDownIcon} alt='arrow down icon' />
								</div>
								<div className={styles.datePicker}>
									<img src={dateIcon} alt='date icon' />
									<span>00</span>
									<img src={arrowDownIcon} alt='arrow down icon' />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.checkboxArea}>
						<input type='checkbox' name='age' />
						<label htmlFor='age'>The driver’s age between 30 and 65?</label>
						<img src={infoIcon} alt='info icon' />
					</div>
					<div className={styles.features}>
						<ul>
							<li>
								<img src={tickIcon} alt='tick icon' />
								No credit card fees
							</li>
							<li>
								<img src={tickIcon} alt='tick icon' />
								No change fees
							</li>
							<li>
								<img src={tickIcon} alt='tick icon' />
								Price match guarantee
							</li>
						</ul>
					</div>
					<button className={styles.btn}>Search</button>
				</div>
			</div>
		</div>
	</>
)
}

export default index
