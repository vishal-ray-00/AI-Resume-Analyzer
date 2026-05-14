import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom'
import {Home,Analyzer,Results} from './pages'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/analyzer' element={<Analyzer/>} />
      <Route path='/results' element={<Results/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
