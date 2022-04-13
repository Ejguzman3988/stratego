import React, { useEffect, useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import GameUI from "./components/game/GameUI";
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socket = io("http://localhost:3001");
    setSocket(socket);
  }, []);

  socket &&
    socket.on("connect", () => {
      console.log(`You Connected with id: ${socket.id}`);
    });

  useEffect(() => {
    socket && socket.emit("custom-event", 10, "Hi", { a: "a" });
  }, [socket]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play" element={<GameUI />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
