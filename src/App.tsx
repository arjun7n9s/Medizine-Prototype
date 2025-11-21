import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import DoctorSearch from "@/pages/DoctorSearch"
import DoctorProfile from "@/pages/DoctorProfile"
import SymptomChecker from "@/pages/SymptomChecker"
import Dashboard from "@/pages/Dashboard"
import FirstAid from "@/pages/FirstAid"
import Emergency from "@/pages/Emergency"
import MedicineDelivery from "@/pages/MedicineDelivery"
import Booking from "@/pages/Booking"
import ReportAnalysis from "@/pages/ReportAnalysis"
import SignUp from "@/pages/SignUp"

import { CartProvider } from "@/context/CartContext"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorSearch />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            <Route path="/symptoms" element={<SymptomChecker />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/medicines" element={<MedicineDelivery />} />
            <Route path="/first-aid" element={<FirstAid />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/report-analysis" element={<ReportAnalysis />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
