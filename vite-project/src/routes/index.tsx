import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const LandingPage = lazy(() => import('../pages/Home'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const ErrorBoundary = lazy(() => import('../pages/ErrorBoundary'))
const LoginPage = lazy(() => import('../pages/Login'))
const RegisterPage = lazy(() => import('../pages/Register'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <ErrorBoundary />,
  },
])
