import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import { Home } from './components/Home'
import { Index } from './components/Index'
import './styles/main.css'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/index',
      element: <Index/> 
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    

  </React.StrictMode>,
)
