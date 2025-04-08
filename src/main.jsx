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
    loader: () => fetch('https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee')
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
    loader: ({ params }) => fetch(`https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
    // loader: ({params}) => fetch(`https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
    // loader: ({params}) => fetch(`https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee/${params.id}`)
  },
  
  {
    path: "/users",
    element: <Users />,
    loader: async () => {
      try {
        const res = await fetch('https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/user');
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    errorElement: <div className="text-red-500 p-4">🚨 Failed to load users!</div>
  }
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider > 
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
