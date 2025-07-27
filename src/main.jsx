import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';  
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Cars from './components/Cars.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='cars' element={<Cars />} />
    </Route>
  ),
  {
    basename: '/Tesla_CarshworoomWeb' // Add this line (no trailing slash)
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
