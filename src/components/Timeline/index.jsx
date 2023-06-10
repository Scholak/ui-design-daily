import React from 'react'
import weight1 from './assets/weight1.png'
import weight2 from './assets/weight2.png'
import dimension from './assets/dimension.png'
import styles from './Timeline.module.css'

const index = () => {
  return (
		<>
			<p className='project-description'>
				access figma file from{' '}
				<a
					href='https://uidesigndaily.com/posts/figma-timeline-ui-design-card-day-1578'
					target='_blank'
				>
					here
				</a>
			</p>
			<div className={styles.wrapper}>
				<div className={styles.cardContainer}>
          <div className={styles.shape}></div>
					<div className={styles.card}>
						<div className={styles.info}>
							<h3 className={styles.title}>Package Details</h3>
							<div className={styles.details}>
								<div className={styles.detail}>
									<p className={styles.type}>
										<img src={weight1} alt='icon' />
										Weight
									</p>
									<p className={styles.value}>373325383577912985</p>
								</div>
								<div className={styles.detail}>
									<p className={styles.type}>
										<img src={weight2} alt='icon' />
										Weight
									</p>
									<p className={styles.value}>0.3 kg</p>
								</div>
								<div className={styles.detail}>
									<p className={styles.type}>
										<img src={weight2} alt='icon' />
										Dimensions
									</p>
									<p className={styles.value}>37 x 26 x 7 cm</p>
								</div>
							</div>
						</div>
						<div className={styles.timeline}>
							<div className={`${styles.time} ${styles.active}`}>
								<div className={styles.progress}>
									<span className={styles.circle}></span>
									<span className={styles.line}></span>
								</div>
								<div className={styles.content}>
									<p className={styles.text}>
										The shipment has arrived at the terminal.
									</p>
									<span className={styles.date}>
										March 23 at 08.20 - 5020 BERGEN
									</span>
								</div>
							</div>
							<div className={styles.time}>
								<div className={styles.progress}>
									<span className={styles.circle}></span>
									<span className={styles.line}></span>
								</div>
								<div className={styles.content}>
									<p className={styles.text}>The shipment is in transit.</p>
									<span className={styles.date}>
										March 22 at 07.20 - 0024 OSLO
									</span>
								</div>
							</div>
							<div className={styles.time}>
								<div className={styles.progress}>
									<span className={styles.circle}></span>
									<span className={styles.line}></span>
								</div>
								<div className={styles.content}>
									<p className={styles.text}>
										The broadcast is sorted and forwarded.
									</p>
									<span className={styles.date}>
										March 22 at 00.38 - 0024 OSLO
									</span>
								</div>
							</div>
							<div className={styles.time}>
								<div className={styles.progress}>
									<span className={styles.circle}></span>
									<span className={styles.line}></span>
								</div>
								<div className={styles.content}>
									<p className={styles.text}>
										Consignment has been dispatched to the terminal and
										forwarded.
									</p>
									<span className={styles.date}>
										March 22 at 00.33 - 0024 OSLO
									</span>
								</div>
							</div>
							<div className={styles.time}>
								<div className={styles.progress}>
									<span className={styles.circle}></span>
									<span className={styles.line}></span>
								</div>
								<div className={styles.content}>
									<p className={styles.text}>
										We have received information about the shipment, which is
										currently with the sender or is on its way to Bring's
										terminal. The tracking is updated when the shipment has
										arrived at the terminal in the receiving country.
									</p>
									<span className={styles.date}>March 21 at 07.35</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default index
