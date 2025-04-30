import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router'
import Layout from './layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Quiz from './pages/quiz/Quiz.jsx'
import NotFound from './pages/not-found/NotFound.jsx'
import Contact from './pages/contact/Contact.jsx'
import AboutUs from './pages/about-us/AboutUs.jsx'
import Liver from './pages/organ/Liver.jsx'
import Cirrhosis from './pages/organ/cirrhosis/Cirrhosis.jsx'
import FattyLiver from './pages/organ/fatty-liver/FattyLiver.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Router } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='contacto' element={<Contact/>}/>
        <Route path='sobre-nosotros' element={<AboutUs/>}/>
        <Route path='organo' element={<Liver/>}/>
        <Route path='organo/higado-graso' element={<FattyLiver/>}/>
        <Route path='organo/cirrosis-hepatica' element={<Cirrhosis/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
)
