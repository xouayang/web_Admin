import React from 'react'
import { Row } from 'react-bootstrap';
import Chart1 from './Allchart/chart_payment'
import Dashboard from './dashboard';
import Navbars from './Navbar'
import Table_payment from './All_table/table_payment';
function payment() {
    return (

        <>
     {/* import component Navbar */}
            <Navbars />
            {/*  import component Dashboard */}
            <Dashboard />

            
            <dive className="bg-light d-flex justify-content-start">
                <Row md={7} style={{ width: "70%" }}>
                    {/*  import component table_payment */}
                    <Table_payment />
                </Row>
                <Row md={3} style={{ width: '30%',height:'auto'}}>
                    {/*  import component chart_payment */}
                    <div className=" justify-content-md-center " style={{width:'100%', height:'100px'}} >
                    <Chart1/>
                    </div>
                </Row>

            </dive>
        </>
    )
}

export default payment;