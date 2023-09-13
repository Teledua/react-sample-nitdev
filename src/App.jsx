import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import { ViewWeather } from "./Pages/ViewWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState("dry")
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setWeather={setCurrentWeather}/>}/>
        <Route path="/view-weather" element={<ViewWeather currentWeather={currentWeather}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
