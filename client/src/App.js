import React from "react";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar/Calendar";
import Odd from "./pages/odd/Odd";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import DiaryList from "./pages/diaryList/DiaryList";
import DiaryContent from "./pages/diaryContent/DiaryContent";
import DiaryForm from "./pages/diaryForm/DiaryForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/:date" element={<Calendar />} />
        <Route path="/diary" element={<DiaryList />} />
        <Route path="/diary/:id" element={<DiaryContent />} />
        <Route path="/diary/new" element={<DiaryForm />} />
        <Route path="/diary/edit/:id" element={<DiaryForm />} />
        <Route path="/odd" element={<Odd />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
