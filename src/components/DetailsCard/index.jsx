import React from 'react'
import styles from './DetailsCard.module.css'
import thumbnail from './assets/thumbnail.png'
import likeIcon from './assets/like.png'
import commentIcon from './assets/comment.png'
import starIcon from './assets/star.png'

const index = () => {
  return (
		<>
			<p className='project-description'>
				access figma file from{' '}
				<a
					href='https://uidesigndaily.com/posts/figma-details-card-day-1469'
					target='_blank'
				>
					here
				</a>
			</p>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<div className={styles.overview}>
						<div className={styles.thumbnail}>
							<img src={thumbnail} alt='thumbnail' />
						</div>
						<div className={styles.overviewText}>
							<h1>Ventana</h1>
							<p>Web Application UI Kit</p>
							<span>Live now</span>
						</div>
					</div>
					<div className={styles.ratings}>
						<div className={styles.ratingSingle}>
							<p className={styles.number}>27</p>
							<div className={styles.ratingText}>
								<img src={likeIcon} alt='like icon' />
								<span>Upvotes</span>
							</div>
						</div>
						<div className={styles.ratingSingle}>
							<p className={styles.number}>5</p>
							<div className={styles.ratingText}>
								<img src={commentIcon} alt='like icon' />
								<span>Comments</span>
							</div>
						</div>
						<div className={styles.ratingSingle}>
							<p className={styles.number}>0</p>
							<div className={styles.ratingText}>
								<img src={starIcon} alt='like icon' />
								<span>Reviews</span>
							</div>
						</div>
					</div>
					<div className={styles.buttons}>
						<button className={styles.viewPostBtn}>View Post</button>
						<button className={styles.viewDashboardBtn}>View Dashboard</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default index
