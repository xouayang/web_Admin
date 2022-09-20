import React from 'react'
import Navbars from './Navbar'
import Dashboard from './dashboard'
import Table_reviewer from './All_table/table_reviewer'
import Social from './social/social'
function reviewer() {
  return (
    <>
    <Navbars/>
    <Dashboard/>
    <div>
    <Table_reviewer/>
   </div>

  <div className="d-flex justify-content-center mt-2" style={{width:'auto'}}>
  <Social  className='me-ms-5'/>
  </div>
    </>
  )
}

export default reviewer;