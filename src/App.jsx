import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import Community from "./pages/Community";
import Credits from "./pages/Credits";
import { assets } from "./assets/assets";
import "./assets/prism.css";
import Loading from "./pages/Loading";
import { useAppContext } from "./context/AppContext";
import Login from "./pages/Login";


// import Login from './pages/Login'
// import Loading from './pages/Loading'

const App = () => {
  const { user } = useAppContext();
  // for mobile view sidebar hide
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // for mobile view sidebar hide

  const { pathname } = useLocation();
  if (pathname === "/loading") return <Loading />;

  return (
    <>
      {!isMenuOpen && (
        <img
          src={assets.menu_icon}
          className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert"
          onClick={() => setIsMenuOpen(true)}
          alt=""
        />
      )}

      {user ? (
<div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
        {" "}
        {/* //I add this div and line for mode property dark/white */}
        <div className="flex h-screen w-screen">
          {/* Always visible */}
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

          {/* Changes per page */}
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            {/* <Route path='/login' element={<Login />} /> */}
            {/* <Route path='/loading' element={<Loading />} /> */}
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>

      ) : (

        <div className="bg-gradient-to-b from-[#242124] to-[#000000] flex items-center justify-center h-screen w-screen">
          <Login />
        </div>
      )}

      
    </>
  );
};

export default App;
