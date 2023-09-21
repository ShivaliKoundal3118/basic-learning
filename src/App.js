import logo from './logo.svg';
import './App.css';
import Table from './Table';


import 'bootstrap/dist/css/bootstrap.min.css';

import "./Table.css"
import "./Single.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleView from './SingleView';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './component/Navbar';



function App() {
  return (

  <>
 
  <BrowserRouter>
 <NavbarComp/>

  <Table/>\
  <Routes>
    <Route path='/singleView/:id' element={<SingleView/>}/>
  </Routes>
  </BrowserRouter>

  </>
  


  );
}

export default App;
