import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'


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
  {path:'/jobs',
    element:<Jobs/>
  },
  {path:'/description/:id',
    element:<JobDescription/>
  },
  {path:'/browse',
    element:<Browse/>
  },
  {path:'/profile',
    element:<Profile/>
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
