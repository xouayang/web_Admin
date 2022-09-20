import React from 'react'
import {Row,Col , } from 'react-bootstrap'
import Main from './TimeLine';
// table_user show in page show all  frist page
import Chart1 from './Allchart/chart_payment'
const Table_main = () => {

    return (
    <>
        <div className='d-flex justify-content-between p-0 h-25 mt-3' >
            
        <Row  className="bg-light d-flex justify-content-md-start" md={8} style={{ width:'80%'}}  >
            <Col  > 
            {/* chart in frist page */}
            <Chart1/>
            </Col>
        </Row>
         <Row className="bg-light d-flex justify-content-md-start" md={4} style={{width:'40%'}}>
          <Col >
          {/* import from  Timlink*/}
         <Main/>
         </Col>
        </Row>
         </div>
                  
                       
                        </>
                       
    )
}

export default Table_main