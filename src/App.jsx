import React from 'react';
import Base from './components/Base';
import Home from './components/Home';
import Contact from './components/Contact';
import Teacher from './components/Teacher';
import Course from './components/Course';
import Footer from './components/Footer';
import About from './components/About';
import Noo from './components/Noo';
import {Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Base /> 
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/contact' element={<Contact/>} exact/>
                <Route path='/staff' element={<Teacher/>} exact/>
                <Route path='/about' element={<About/>} exact/>
                <Route path='/course' element={<Course/>} exact/>
                <Route path='/*' element={<Noo/>} />
            </Routes>
            <Footer />
        </>
    )
};
export default App;
