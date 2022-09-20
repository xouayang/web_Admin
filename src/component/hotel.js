import React from 'react'
import Navbars from './Navbar'
import Dashboard from './dashboard'

// import icon FcSynchronize
import { FcSynchronize } from 'react-icons/fc'
// import from table_hotel in All_table
import Table_hotel from './All_table/table_hotel';
import { MdAutoGraph } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { HiOutlineKey } from 'react-icons/hi'
import Image_inhotel from './slide image/image_inhotel';
function hotel() {
  return (
    <>
      {/* import Navbar */}
      <Navbars />
      {/* import dashboard */}
      <Dashboard />

      <div className='d-flex justify-content-evenly'>
        {/*  */}
        <div className="d-flex justify-content-evenly align-items-center mt-5">
          <div style={{ width: '280px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
            <div className="text d-flex justify-content-evenly " style={{ width: 'auto' }}>
              <FcSynchronize
                style={{ width: '30%', height: '50%', background: '#FF0', borderRadius: '10px' }} />
              <div className='text'>
                <h4 className='me-ms-4' >$1223</h4>
                <h6 >Total incomes</h6>
              </div>
            </div>
          </div >
        </div>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
          <div style={{ width: '280px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
            <div className="text d-flex justify-content-evenly " style={{ width: 'auto' }}>
              <MdAutoGraph
                style={{ width: '40%', height: '50%', background: '#1E95E3', borderRadius: '10px' }} />
              <div >
                <h4 className='me-ms-4' >$1223</h4>
                <h6 className='text'>weeken</h6>
              </div>
            </div>
          </div >
        </div>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
          <div style={{ width: '280px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
            <div className="text d-flex justify-content-evenly " style={{ width: 'auto' }}>
              <IoMdPersonAdd color='Writh'
                style={{ width: '40%', height: '50%', background: '#E3CC5B', borderRadius: '10px' }} />
              <div >
                <h4 className='me-ms-4' >455</h4>
                <h6 className='text'>New Guest</h6>
              </div>
            </div>
          </div >
        </div>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
          <div style={{ width: '280px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
            <div className="text d-flex justify-content-evenly " style={{ width: 'auto' }}>
              <HiOutlineKey
                style={{ width: '40%', height: '50%', background: '#FF214A', borderRadius: '10px' }} />
              <div >
                <h4 className='me-ms-4' >223</h4>
                <h6 className='text'>Room</h6>
              </div>
            </div>
          </div >
        </div>
      </div>
          <div>
          <Image_inhotel  className=" w-auto h-auto" />
        </div>
        {/* import tble from tabale_hotel */}
        <div className='mt-5'>
          <Table_hotel />
        </div>
      </>
  )
}
export default hotel;