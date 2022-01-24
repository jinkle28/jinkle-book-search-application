import "./styles.css";
import Error from "./pages/Error";
import SingleBook from "./pages/SingleBook";
import { BrowserRouter, Link } from "react-router-dom";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MuiAppBar from "./MuiAppBar";

export default function App() {
  return (
    <BrowserRouter>
    
      <div className="header">
      {/* <ReactAppBar/> */}
      
      </div>
      <Routes>
        <Route exact path="/" element={<MuiAppBar/>}/>
        <Route path="/book/:id" element={<SingleBook />}/>
        <Route path="*" element={<Error/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}
