import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import GlobalStyles from "../GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
