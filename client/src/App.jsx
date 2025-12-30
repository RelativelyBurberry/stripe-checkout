import { BrowserRouter, Routes, Route } from "react-router-dom"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"

import "./App.css"

export default function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pricing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  )
}
