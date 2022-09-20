import React from 'react'
import Navbars from './Navbar'
import Dashboard from './dashboard'
import Chart_user from './Allchart/chart_user';
import Table_user from './All_table/table_user';
const User = () => {
  return (
    <>
      <div>
        <Navbars />
        <Dashboard />
        </div>
        <div>
        <div >
          <Table_user />
        </div >
        <div className=' d-flex justify-content-center mt-1'  style={{width:'100%', height:'400px'}}>
          <Chart_user  />
        </div>
        </div>
        </>
      )
}

      export default User