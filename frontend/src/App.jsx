import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {path:'/login',
    element:<Login/>
  },
  {path:'/register',
    element:<Register/>
  },

])

function App() {

  return (
    <>
    <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default App
