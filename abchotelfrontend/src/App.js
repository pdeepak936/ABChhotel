import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import Home from './components/homepage';



function App() {
  return (
    <BrowserRouter>

      <Home />
    </BrowserRouter>
  );
}

export default App;
