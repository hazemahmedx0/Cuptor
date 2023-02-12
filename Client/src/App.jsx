import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { Header } from "./Components";
function App() {
  return (
    <BrowserRouter>
      <div className=" 	 bg-[#090C25]">
        <main className=" bg-[#090C25] w-full min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
