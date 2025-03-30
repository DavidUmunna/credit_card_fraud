import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import FraudDetectionForm from './components/FraudDetectionForm.js';
import './index.css'

const App = () => {
    return (
        <Router>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/fraud-detection" element={<FraudDetectionForm />} />
            </Routes>
        </Router>
    );
};

export default App;