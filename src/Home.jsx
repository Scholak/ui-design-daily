import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
		<ul className='component-links'>
			<li>
				<Link to='/product-info-ui-design'>Product Info UI Design</Link>
			</li>
			<li>
				<Link to='/details-card'>Details Card</Link>
			</li>
			<li>
				<Link to='/subscription-section'>Subscription Section</Link>
			</li>
			<li>
				<Link to='/rent-a-car-ui-design-card-search'>
					Rent A Car UI Design Card Search
				</Link>
			</li>
			<li>
				<Link to='/billing-page'>Billing Page</Link>
			</li>
			<li>
				<Link to='/pricing-card'>Pricing Card</Link>
			</li>
			<li>
				<Link to='/timeline'>Timeline</Link>
			</li>
			<li>
				<Link to='/testimonials'>Testimonials</Link>
			</li>
		</ul>
	)
}

export default Home
