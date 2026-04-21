import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import YogaPage from './pages/YogaPage.jsx'
import DancePage from './pages/DancePage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppCTA from './components/WhatsAppCTA.jsx'

function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen font-sans text-muted-black selection:bg-olive selection:text-white">
      <Navbar />
      {children}
      <Footer />
      <WhatsAppCTA />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><App /></Layout>} />
        <Route path="/yoga" element={<Layout><YogaPage /></Layout>} />
        <Route path="/dance" element={<Layout><DancePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
