import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showall from './component/Showall';
import User from './component/user';
import Hotel from './component/hotel';
import Payment from './component/Payment';
import Exel from './component/Exel';
import Invice from './component/invice';
import Reviewer from './component/reviewer';
import Content_reviewer from './component/page/content_reviewer';
import {
  Routes,
  Route,
} from "react-router-dom";
import Place from './component/place';
import Login from './component/login_signup/login';
import Sign_up from './component/login_signup/sign_up';


function App() {
  return (

    <>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/' element={<Showall />} />
        <Route path='/Showall' element={<Showall />} />
        <Route path='/Hotel' element={<Hotel />} />
        <Route path='/Reviewer' element={<Reviewer />} />
        <Route path='/User' element={< User />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Place' element={<Place />} />
        <Route path='/Exel' element={<Exel />} />
        <Route path='/Invice' element={<Invice />} />
        <Route path='/Content_reviewer' element={<Content_reviewer />} />
        <Route path='/Invice' element={<Invice />} />
        <Route path='/sign_up' element={<Sign_up />} />
      </Routes>
    </>
  );
}

export default App;
