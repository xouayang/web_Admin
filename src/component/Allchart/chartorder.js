import React from 'react'
import { FcCurrencyExchange } from 'react-icons/fc'
function chartorder() {
  return (
    // chart in Order content
    <dive>
      <div className="d-flex justify-content-evenly align-items-evenly mt-5">
        <div className="d-flex justify-content-evenly align-items-center mt-5">
          <div style={{ width: '200px', height: '100px' }} className="shadow-lg rounded d-flex justify-content-start">
            <div class="d-flex flex-column h-auto ms-md-2 mt-1" style={{ width: '40%' }}>
              <FcCurrencyExchange className='p-2'
                style={{ width: '60%', height: '50%', background: '#FF0', borderRadius: '10px' }} />
              <h6 className="mt-2">Payment</h6>
            </div>
          </div>
        </div>        
          </div>
    </dive>
  )
}

export default chartorder