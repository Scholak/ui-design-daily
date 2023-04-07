import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const ProductInfo = React.lazy(() => import('./components/ProductInfo'))
const DetailsCard = React.lazy(() => import('./components/DetailsCard'))
const SubscriptionSection = React.lazy(() => import('./components/SubscriptionSection'))
const RentACar = React.lazy(() => import('./components/RentACar'))

const App = () => {
  return (
		<Suspense>
			<BrowserRouter>
				<Routes>
					<Route path='/product-info-ui-design' element={<ProductInfo />} />
					<Route path='/details-card' element={<DetailsCard />} />
					<Route path='/subscription-section' element={<SubscriptionSection />} />
					<Route path='/rent-a-car-ui-design-card-search' element={<RentACar />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
