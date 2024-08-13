import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from './signup.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let data = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path: '/signup',
    element: <Signup/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={data}>
    <App/>
  </RouterProvider>
)
