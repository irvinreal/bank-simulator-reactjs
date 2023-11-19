import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Account from './pages/Account/Account'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/account',
    element: <Account />
  }
])

function App() {
  return (
    <main className='relative h-full flex items-center'>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
