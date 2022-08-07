
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./component/Nav";
import Createpost from "./pages/Createpost";
import Home from "./pages/Home";
import Lifestyle from "./pages/Lifestyle";
import Sport from "./pages/Sport";




function App() {
 

  return (
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/tech" element={<Home/>}></Route>
   
    <Route path="/sport" element={<Sport/>}></Route>
    <Route path="/life" element={<Lifestyle/>}></Route>
    <Route path="/createpost" element={<Createpost/>}></Route>
  </Routes>
  
  
  </BrowserRouter>
  );
}

export default App;
