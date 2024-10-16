import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import GlobalStyles from "../GlobalStyle";
import { UserContextStorage } from "./Context/UserContext";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <UserContextStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserContextStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
