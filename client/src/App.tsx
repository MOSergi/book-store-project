import { useState } from "react";
//estilos
import "./styles/App.css";
//react router dom imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//component imports
import Navbar from "./components/Navbar";
import HomeMain from "./components/HomeMain";

export default function App() {

        const [count, setCount] = useState<number>(0);

        return (
            <Router>
                <Routes>
                    <Route path="/" element={<><Navbar /> <HomeMain /></>}/>
                </Routes>
            </Router>
        );
}