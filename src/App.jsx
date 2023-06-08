import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./Home'))
const ProductInfo = React.lazy(() => import('./components/ProductInfo'))
const DetailsCard = React.lazy(() => import('./components/DetailsCard'))
const SubscriptionSection = React.lazy(() => import('./components/SubscriptionSection'))
const RentACar = React.lazy(() => import('./components/RentACar'))
const BillingPage = React.lazy(() => import('./components/BillingPage'))
const PricingCard = React.lazy(() => import('./components/PricingCard'))

const App = () => {
  return (
		<Suspense>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product-info-ui-design' element={<ProductInfo />} />
					<Route path='/details-card' element={<DetailsCard />} />
					<Route path='/subscription-section' element={<SubscriptionSection />} />
					<Route path='/rent-a-car-ui-design-card-search' element={<RentACar />} />
					<Route path='/billing-page' element={<BillingPage />} />
					<Route path='/pricing-card' element={<PricingCard />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
