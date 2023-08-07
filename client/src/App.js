import React from "react";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar/Calendar";
import Odd from "./pages/odd/Odd";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Diary from "./pages/diary/Diary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/:date" element={<Calendar />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/odd" element={<Odd />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
