import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const ProductInfo = React.lazy(() => import('./components/ProductInfo'))

const App = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path='/product-info-ui-design' element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
