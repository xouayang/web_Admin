import React from 'react'
import { GrView } from 'react-icons/gr';
import {Row} from "react-bootstrap"
function table_user() {
  return (
    
    <div className="d-flex justify-content-center" >
    <Row md={7} style={{ width: '70%' }}>
      <div class="bg-light text-center rounded p-5">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h6 class="mb-0">chekpayment</h6>
          <a href="">Show All</a>
        </div>
        <div class="table-responsive">
          <table class="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr class="text">
                <th scope="col">
                  <input class="form-check-input" type="checkbox" />

                </th>
                <th scope="col">Date</th>
                <th scope="col">Invoice</th>
                <th scope="col">Customer</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input class="form-check-input" type="checkbox" /></td>
                <td>01 Jan 2045</td>
                <td>INV-0123</td>
                <td>Jhon Doe</td>
                <td>025667778</td>
                <td><a className="btn btn-sm btn-primary p-1">Ative</a></td>
                <td className="d-flex justify-content-evenly ms-1">
                  <a className="btn btn-sm btn p-1"><GrView /> </a>
                  <a className="btn btn-sm btn-primary p-1">Edit</a>

                  <td><a class="btn btn-sm btn-danger" href="">Delete</a></td>
                </td>


              </tr>
              <tr>
                <td><input class="form-check-input" type="checkbox" /></td>
                <td>01 Jan 2045</td>
                <td>INV-0123</td>
                <td>Jhon Doe</td>
                <td>5668940</td>
                <td><a className="btn btn-sm btn-primary p-1">Ative</a></td>
                <td className="d-flex justify-content-evenly ms-1">
                  <a className="btn btn-sm btn p-1"><GrView /> </a>
                  <a className="btn btn-sm btn-primary p-1">Edit</a>

                  <td><a class="btn btn-sm btn-danger" href="">Delete</a></td>
                </td>


              </tr>
              <tr>
                <td><input class="form-check-input" type="checkbox" /></td>
                <td>01 Jan 2045</td>
                <td>INV-0123</td>
                <td>Jhon Doe</td>
                <td>9334542</td>
                <td><a className="btn btn-sm btn-primary p-1">Ative</a></td>
                <td className="d-flex justify-content-evenly ms-1">
                  <a className="btn btn-sm btn p-1"><GrView /> </a>
                  <a className="btn btn-sm btn-primary p-1">Edit</a>
                  <td><a class="btn btn-sm btn-danger" href="">Delete</a></td>
                </td>

              </tr>
              <tr>
                <td><input class="form-check-input" type="checkbox" /></td>
                <td>01 Jan 2045</td>
                <td>INV-0123</td>
                <td>Jhon Doe</td>
                <td>2443546</td>
                <td><a className="btn btn-sm btn-primary p-1">Ative</a></td>
                <td className="d-flex justify-content-evenly ms-1">
                  <a className="btn btn-sm btn p-1"><GrView /> </a>
                  <a className="btn btn-sm btn-primary p-1">Edit</a>
                  <td><a class="btn btn-sm btn-danger" href="">Delete</a></td>
                </td>

              </tr>
              <tr>
                <td><input class="form-check-input" type="checkbox" /></td>
                <td>01 Jan 2045</td>
                <td>INV-0123</td>
                <td>Jhon Doe</td>
                <td>5609322</td>
                <td><a className="btn btn-sm btn-primary p-1">Ative</a></td>
                <td className="d-flex justify-content-evenly ms-1">
                  <a className="btn btn-sm btn p-1"><GrView /> </a>
                  <a className="btn btn-sm btn-primary p-1">Edit</a>

                  <td><a class="btn btn-sm btn-danger" href="">Delete</a></td>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Row>
    </div>
  )
}

export default table_user 