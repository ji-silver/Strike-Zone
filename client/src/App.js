import React from "react";
import "./index.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Calendar from "./pages/calendar/Calendar";
import Odd from "./pages/odd/Odd";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/record" />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/record" element={<Calendar />} />
        <Route path="/write" element={<Write />} />
        <Route path="/odd" element={<Odd />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
