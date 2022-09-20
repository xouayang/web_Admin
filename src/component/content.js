import React from "react";
import Dashboard from "./dashboard";
import { FcTimeline } from 'react-icons/fc'
import { FcNegativeDynamic } from 'react-icons/fc'
import { FcBusinessman } from 'react-icons/fc'
import { FcMoneyTransfer } from 'react-icons/fc'
const content = () => {
  return (

    <>
      <div >
        <Dashboard />
      </div>
      <div className=" bg-light d-flex justify-content-evenly align-items-center mt-1">
        <div style={{ width: '200px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
          <div class="d-flex flex-column h-auto ms-md-2 mt-1" style={{width:'40%'}}>
            <FcTimeline className="p-2"
             style={{ width: '60%', height: '50%', background:'#FF0', borderRadius:'10px'  }} />
            <h6 className="mt-2">Order</h6>
          </div>
        </div >

        <div style={{ width: '200px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
          <div class="d-flex flex-column h-auto ms-md-2 mt-1" style={{width:'40%'}}>
            < FcNegativeDynamic className="p-2" 
            style={{ width: '60%', height: '50%', background:'#F00', borderRadius:'10px'  }} />        
            <h6 className="mt-2">Ative</h6>
          </div>
        </div>

        <div style={{ width: '200px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
          <div className="d-flex flex-column h-auto ms-md-2 mt-1 " style={{ width:'40%'}} >
            <FcBusinessman className="p-2" 
               style={{ width: '60%', height: '50%', background:'#477FE0', borderRadius:'10px' }} />
            <h6 className="mt-2">User</h6>
          </div>
        </div>

        <div style={{ width: '200px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
          <div className="d-flex flex-column h-auto ms-md-2 mt-1 " style={{ width:'40%'}}>
            <FcMoneyTransfer className=" p-2  "
              style={{ width: '60%', height: '50%', background:'#0FE040 ', borderRadius:'10px' }} />
            <h6 className="mt-2">monney</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default content;
