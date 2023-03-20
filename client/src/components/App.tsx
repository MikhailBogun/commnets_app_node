import React from 'react';
// import logo from './logo.svg';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";


import './App.css';

const Footer = () => (
  <footer> Footer </footer>
)

const Header = () => (
  <header className="App-header"> Footer </header>
)

const MainRouter = () => {
  return <BrowserRouter>
    <div className="container">
    <Routes>
        <Route path="/" element={<Main />}/>
    </Routes>
    </div>
  </BrowserRouter>
}

const App = () => (
  // const dispatch = useDispatch();

  <div className="App">
    <MainRouter></MainRouter>
    <Footer></Footer>
</div>
)


export default App;
