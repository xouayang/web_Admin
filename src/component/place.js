import React from 'react'
import Navbars from './Navbar'
import Dashboard from './dashboard'
import Table_place from './All_table/table_place'
function cancelorder() {
  return (
    <>
      {/* import navbar */}
      <Navbars />
      {/* import dashboard */}
      <Dashboard />
 
      <div>
        <Table_place/>
      </div>
    </>
  )
}

export default cancelorder