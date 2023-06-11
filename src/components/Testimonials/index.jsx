import React, { useRef } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import profile1 from './assets/profile1.png'
import profile2 from './assets/profile2.png'
import styles from './Testimonials.module.css'

const index = () => {
  let index = 0

  const sliderEl = useRef()

  const slideEl = useRef()

  const itemsEl = useRef()

  const handlePrev = e => {
		if (index > 0) {
      index--
      const width = slideEl.current.offsetWidth * index + index * 30
      sliderEl.current.style.transform = `translateX(-${width}px)`
      updateItems()
    }
	}

  const handleNext = e => {
    if (index < 2) {
      index++
      const width = slideEl.current.offsetWidth * index + index * 30
      sliderEl.current.style.transform = `translateX(-${width}px)`
      updateItems()
    }
  }

  const handleChange = number => {
    index = number
    const width = slideEl.current.offsetWidth * index + index * 30
		sliderEl.current.style.transform = `translateX(-${width}px)`

    updateItems()
  }

  const updateItems = () => {
    const items = itemsEl.current.children
		for (let i = 0; i < 3; i++) {
			i === index
				? items[i].classList.add(styles.active)
				: items[i].classList.remove(styles.active)
		}
  }

  return (
		<>
			<p className='project-description'>
				access figma file from{' '}
				<a
					href='https://uidesigndaily.com/posts/figma-testimonials-day-1456'
					target='_blank'
				>
					here
				</a>
			</p>
			<div className={styles.wrapper}>
				<section className={styles.testimonials}>
					<h3>What our customers have to say</h3>
					<div className={styles.slider}>
						<div className={styles.slideArea}>
							<div className={styles.frame} ref={sliderEl}>
								<div className={styles.slide} ref={slideEl}>
									<p className={styles.text}>
										“ Thank you! Your product descriptions are amazing and your
										service is wonderful. “
									</p>
									<div className={styles.profile}>
										<img src={profile1} alt='profile' />
										<div className={styles.profileInfo}>
											<p>Ronald A. Freeman</p>
											<span>Electronic technician</span>
										</div>
									</div>
								</div>
								<div className={styles.slide}>
									<p className={styles.text}>
										“ Would definitely recommend ItemScribe and will definitely
										be ordering again. “
									</p>
									<div className={styles.profile}>
										<img src={profile2} alt='profile' />
										<div className={styles.profileInfo}>
											<p>Alice L. Tinker</p>
											<span>Marine equipment mechanic</span>
										</div>
									</div>
								</div>
								<div className={styles.slide}>
									<p className={styles.text}>
										“ Thank you! Your product descriptions are amazing and your
										service is wonderful. “
									</p>
									<div className={styles.profile}>
										<img src={profile1} alt='profile' />
										<div className={styles.profileInfo}>
											<p>Ronald A. Freeman</p>
											<span>Electronic technician</span>
										</div>
									</div>
								</div>
								<div className={styles.slide}>
									<p className={styles.text}>
										“ Would definitely recommend ItemScribe and will definitely
										be ordering again. “
									</p>
									<div className={styles.profile}>
										<img src={profile2} alt='profile' />
										<div className={styles.profileInfo}>
											<p>Alice L. Tinker</p>
											<span>Marine equipment mechanic</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.items} ref={itemsEl}>
							<span onClick={() => handleChange(0)} className={styles.active}></span>
							<span onClick={() => handleChange(1)}></span>
							<span onClick={() => handleChange(2)}></span>
						</div>
						<div className={styles.navigation}>
							<FaChevronLeft onClick={handlePrev} />
							<FaChevronRight onClick={handleNext} />
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default index
