import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
    return (
        <Router basename='/r-weather'>
            <div className="global-container">
                {/* <Popup /> */}
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/month-statistics"
                            element={<MonthStatistics />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
