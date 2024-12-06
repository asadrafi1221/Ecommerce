import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css"
import Contact from "./components/pages/Contact";
import Cart from "./components/UI/Cart";
import Login from "./components/UI/Login";
import Register from "./components/UI/Register";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div className="flex flex-col max-w-full overflow-hidden">
      <Header /> {/* Sticky Header */}
      <main className="flex-1 overflow-y-auto">
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
      </main>
      <Footer /> {/* Sticky Footer */}
    </div>
  );
}

export default App;
