import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Reservations from './pages/Reservations'

// Layouts
import RootLayout from './layouts/RootLayout'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='Reservations' element={<Reservations />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
