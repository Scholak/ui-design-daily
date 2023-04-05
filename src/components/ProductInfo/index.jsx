import React from 'react'
import styles from './ProductInfo.module.css'
import productImg from './assets/product.png'
import addToCarTIcon from './assets/addToCartIcon.png'
import addToWhistlistIcon from './assets/addToWhistlistIcon.png'

const index = () => {
  return (
		<>
			<p className='project-description'>
				access figma file from {' '}
				<a href='https://uidesigndaily.com/posts/figma-product-info-ui-design-card-day-1575' target='_blank'>here</a>
			</p>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<div className={styles.cardImg}>
						<img src={productImg} alt='product image' />
					</div>
					<div>
						<div className={styles.badgets}>
							<p>Free shipping</p>
						</div>
						<h1 className={styles.productName}>
							Razer Kraken Kitty Edt Gaming Headset Quartz
						</h1>
						<div className={styles.price}>
							<p className={styles.oldPrice}>1 599,-</p>
							<p className={styles.newPrice}>799,-</p>
							<p className={styles.availableDate}>
								The offer is valid until April 3 or as long as stock lasts!
							</p>
						</div>
						<button className={styles.addToCartBtn}>Add to cart</button>
						<div className={styles.stock}>
							<span className={styles.circle}></span>
							<span className={styles.stockText}>50+ pcs. in stock.</span>
						</div>
						<div className={styles.buttons}>
							<button>
								<img src={addToCarTIcon} alt='add to cart icon' />
								Add to cart
							</button>
							<button>
								<img src={addToWhistlistIcon} alt='add to whistlist icon' />
								Add to whistlist
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default index
