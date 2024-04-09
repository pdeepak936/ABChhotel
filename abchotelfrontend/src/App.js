import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route,Outlet, Form } from "react-router-dom";
import Home from './components/homepage';
import NotAccepted from './components/not_accepted';
import Scheduled from './components/scheduled';
import Delayed from './components/delayed';
import Completed from './components/completed';
import Ongoing from './components/ongoing';
import Ontime from './components/ontime';
import Alltask from "./components/alltask";



function App() {
  return (
    <BrowserRouter>
      <Home />
      {/* <Routes>
                <Route path="/" element={<Alltask />} />
                <Route path="/notaccepted" element={<NotAccepted />} />
                <Route path="/scheduled" element={<Scheduled />} />
                <Route path="/delayed" element={<Delayed />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/ongoing" element={<Ongoing />} />
                <Route path="/ontime" element={<Ontime />} />
                <Route path="/taskform" element={<Form />} />
                <Route path="/form" element={<></>} />
              </Routes> */}
    </BrowserRouter>
  );
}

export default App;
