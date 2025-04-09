// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import AddCoffee from './components/AddCoffee.jsx';
// import UpdateCoffee from './components/UpdateCoffee.jsx';
// import AddCoffee1 from './components/AddCoffee1.jsx';
// import SignUp from './components/SignUp/SignUp.jsx';
// import SignIn from './components/SignIn/SignIn.jsx';
// import AuthProvider from './providers/AuthProvider.jsx';
// import Users from './components/Users.jsx';
// import Main from './components/layout/Main.jsx';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Main></Main>,
//     children:[
//       {
//         path: "/",
//         element: <App></App>,
//         loader: () => fetch('http://localhost:5000/coffee')
//       },
//       {
//         path: "/addCoffee",
//         element: <AddCoffee></AddCoffee>,
//       },
//       {
//         path: "/addCoffee1",
//         element: <AddCoffee1></AddCoffee1>,
//       },
//       {
//         path: "/updateCoffee/:id",
//         element: <UpdateCoffee></UpdateCoffee>,
//         loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
//       },
//       {
//         path: "/signup",
//         element: <SignUp></SignUp>,
//         // loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
//       },
//       {
//         path: "/signin",
//         element: <SignIn></SignIn>,
//         // loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
//       },
      
//       // {
//       //   path: "/users",
//       //   element: <Users />,
//       //   loader: async () => {
//       //     try {
//       //       const res = await fetch('http://localhost:5000/user');
//       //       if (!res.ok) throw new Error('Failed to fetch users');
//       //       return res.json();
//       //     } catch (err) {
//       //       console.error(err);
//       //       throw err;
//       //     }
//       //   },
//       //   errorElement: <div className="text-red-500 p-4">🚨 Failed to load users!</div>
//       // }
    
//       {
//         path: "/users",
//         element: <Users />,
//         loader: async () => {
//           try {
//             const res = await fetch('http://localhost:5000/user');
//             if (!res.ok) {
//               const errorData = await res.json().catch(() => ({}));
//               throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
//             }
//             return res.json();
//           } catch (err) {
//             console.error("Loader error:", err);
//             throw new Error("Failed to load user data. Please try again later.");
//           }
//         },
//         errorElement: <div className="text-red-500 p-4">🚨 Error loading users: {error.message}</div>
//       }
//     ]
//   }
  
// ]);



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider > 
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>,
// )










// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import AddCoffee from './components/AddCoffee.jsx';
// import UpdateCoffee from './components/UpdateCoffee.jsx';
// import AddCoffee1 from './components/AddCoffee1.jsx';
// import SignUp from './components/SignUp/SignUp.jsx';
// import SignIn from './components/SignIn/SignIn.jsx';
// import AuthProvider from './providers/AuthProvider.jsx';
// import Users from './components/Users.jsx';
// import Main from './components/layout/Main.jsx';
// import ErrorPage from './components/ErrorPage.jsx'; // Create this component

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     errorElement: <ErrorPage />, // Add error boundary at the root level
//     children: [
//       {
//         path: "/",
//         element: <App></App>,
//         loader: async () => {
//           try {
//             const response = await fetch('http://localhost:5000/coffee');
//             if (!response.ok) {
//               throw new Error(`Failed to fetch coffee data: ${response.status}`);
//             }
//             return await response.json();
//           } catch (error) {
//             console.error("Coffee loader error:", error);
//             throw error;
//           }
//         }
//       },
//       {
//         path: "/addCoffee",
//         element: <AddCoffee></AddCoffee>,
//       },
//       {
//         path: "/addCoffee1",
//         element: <AddCoffee1></AddCoffee1>,
//       },
//       {
//         path: "/updateCoffee/:id",
//         element: <UpdateCoffee></UpdateCoffee>,
//         loader: async ({ params }) => {
//           try {
//             const response = await fetch(`http://localhost:5000/coffee/${params.id}`);
//             if (!response.ok) {
//               throw new Error(`Failed to fetch coffee details: ${response.status}`);
//             }
//             return await response.json();
//           } catch (error) {
//             console.error("Update coffee loader error:", error);
//             throw error;
//           }
//         }
//       },
//       {
//         path: "/signup",
//         element: <SignUp></SignUp>,
//       },
//       {
//         path: "/signin",
//         element: <SignIn></SignIn>,
//       },
//       {
//         path: "/users",
//         element: <Users />,
//         loader: async () => {
//           try {
//             const response = await fetch('http://localhost:5000/user');
//             if (!response.ok) {
//               const errorData = await response.json().catch(() => ({}));
//               throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//             }
//             return await response.json();
//           } catch (error) {
//             console.error("Users loader error:", error);
//             throw new Error("Failed to load user data. Please try again later.");
//           }
//         },
//         errorElement: <ErrorPage /> // Use the shared error component
//       }
//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider> 
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>
// );


















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
import Main from './components/layout/Main.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: async () => {
          try {
            const response = await fetch('http://localhost:5000/coffee', {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            });
            if (!response.ok) throw new Error('Failed to fetch');
            return await response.json();
          } catch (error) {
            throw new Error('Network error: ' + error.message);
          }
        },
        hydrateFallbackElement: <div>Loading...</div>
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
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:5000/coffee/${params.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch coffee details');
          }
          return response.json();
        }
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/users",
        element: <Users />,
        loader: async () => {
          const response = await fetch('http://localhost:5000/user');
          if (!response.ok) {
            throw new Error('Failed to load user data');
          }
          return response.json();
        }
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);