import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddSchool from './components/addSchool';
import ShowSchools from './components/showSchools';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/add">Add School</Link>
                    <Link to="/show">Show Schools</Link>
                </nav>
                <Routes>
                    <Route path="/add" element={<AddSchool />} />
                    <Route path="/show" element={<ShowSchools />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
