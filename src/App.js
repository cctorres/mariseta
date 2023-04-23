import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='counter' element={<Counter />} />
            </Routes>
        </Router>

    );
}

export default App;
