import React from "react";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar/Calendar";
import Odd from "./pages/odd/Odd";
import Write from "./pages/write/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/write" element={<Write />} />
        <Route path="/odd" element={<Odd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
