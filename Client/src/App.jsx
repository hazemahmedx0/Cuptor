import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <div className=" 	 bg-[#090C25]">
        <main className=" bg-[#090C25] w-full">
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
