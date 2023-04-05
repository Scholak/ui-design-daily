import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const ProductInfo = React.lazy(() => import('./components/ProductInfo'))
const DetailsCard = React.lazy(() => import('./components/DetailsCard'))

const App = () => {
  return (
		<Suspense>
			<BrowserRouter>
				<Routes>
					<Route path='/product-info-ui-design' element={<ProductInfo />} />
					<Route path='/details-card' element={<DetailsCard />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
