import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/app/dashboard'
import AppLayout from './pages/_layout/app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
])
