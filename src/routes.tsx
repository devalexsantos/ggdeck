import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/app/profile-dashboard'
import AppLayout from './pages/_layout/profile-app'
import ProfileGame from './pages/app/profile-game'
import RegisterGame from './pages/app/register-game'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/:userId', element: <Dashboard /> },
      { path: '/:userId/:gameId', element: <ProfileGame /> },
      { path: '/register-game', element: <RegisterGame /> },
    ],
  },
])
