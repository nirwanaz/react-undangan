import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Order from "./pages/order/Order"
import ThemeBW from "./theme/bw"
import Landing from "./pages/landing/Landing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/themebw" element={<ThemeBW />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
