import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';



// Layouts
import RootLayout from './layouts/RootLayout';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Menu' element={<Menu />} />
        <Route path='Reservations' element={<Reservations />} />
        <Route path='OrderOnline' element={<OrderOnline />} />
        <Route path='Login' element={<Login />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
