import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/homepage';
import Form from './components/form/Form';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/taskform" element={<Form />} />
    <Route path="/" element={<Home />} />

    </Routes>
    {/* <Header/>
    <Home/> */}
    {/* <Route path="/taskform" element={<Form />} /> */}
    </BrowserRouter>
  );
}

export default App;
