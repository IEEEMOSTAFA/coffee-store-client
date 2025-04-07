import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee1 from './components/AddCoffee1.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/addCoffee1",
    element: <AddCoffee1></AddCoffee1>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
    // loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
    // loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/user')
   
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider > 
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
