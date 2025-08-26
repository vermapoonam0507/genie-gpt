import React from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";

// import Login from './pages/Login'
// import Loading from './pages/Loading'

import Community from "./pages/Community";

const App = () => {
  return (
    <>
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white"> {/* //I add this div and line for mode property dark/white */}
        <div className="flex h-screen w-screen">

           {/* Always visible */}
          <Sidebar /> 

          
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
    </>
  );
};

export default App;
