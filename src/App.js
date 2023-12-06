import React from 'react'
import './App.css';
import {Footer , Blog,Possibility,Features,WhatGPT3, Header} from './Container/index';
import {Cta,Brand,Navbar} from './Components/index';
const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App