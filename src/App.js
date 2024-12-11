import {Routes, Route, Link, NavLink, Form} from 'react-router-dom';
import Home from './Companents3/Home';
import About from './Companents3/About';
import Contact from './Companents3/Contact';
import WorkSamples from './Companents3/WorkSamples';
import "./App.css"
export default function App() {
  return (
    <>
       <div className='menu'>

    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/WorkSamples">WorkSamples</NavLink>
    <NavLink to="/Contact">Contact</NavLink>
    </div>
<div className='blogText'>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/WorkSamples" element = {<WorkSamples/>}/>
    <Route path = "/Contact" element = {<Contact/>} />
    </Routes>
    </div>
    </>
  );
}