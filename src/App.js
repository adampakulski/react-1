import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MainSection from './components/MainSection';
import Workers from './components/Workers';
import Offerts from './components/Offerts';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Nav/>
    <MainSection/>
    <Workers/>
    <Offerts/>
    <Footer/>  
    </div>
  ) 
}

export default App;
