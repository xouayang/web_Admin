import React from 'react'
import Content from './content';
import Table_main from './Table_main';
import Navbars from './Navbar';
import { Row } from "react-bootstrap";
import Calendar from './calendar/calendar';
import Social from './social/social';

function Showall() {
  return (
    <>
      <div>
        <Navbars />
      </div>

      <div>
        <Content />
      </div>
      <div>
        <Table_main />
      </div>

      {/*  ແບ່ງຫນ້າເພຈຫຼັກໂຊ ປະຕິທີນ */}
      <div className='d-flex justify-content-evenly mt-3'>
        <Row  className='d-flex justify-content-center w-auto bg-light 'md={8} style={{width:'80%'}}>
       <Calendar />
        </Row>
        <Row md={4} className="bg-light" style={{width:'50%'}}>
           <Social />
        </Row>
      </div>

    </>



  )
}

export default Showall;