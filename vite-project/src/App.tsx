import React, { Suspense } from 'react'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  )
}

export default App
