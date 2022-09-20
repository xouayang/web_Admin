import React from 'react'
// import Row from react-boostrap
import { Row } from "react-bootstrap"
// import  icon view from react_icon
import { GrView } from 'react-icons/gr';
function table_place() {
  return (
    // all tage is table place
    <div className="d-flex justify-content-center" >
      <Row md={7} style={{ width: '70%' }}>
        <div class="bg-light text-center rounded p-5">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 class="mb-0">Place</h2>
            <a href="">Show All</a>
          </div>
          <div class="table-responsive">
            <table class="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr class="text">
                  <th scope="col">Name</th>
                  <th scope="col">Desc</th>
                  <th scope="col">Address</th>
                  <th scope="col">Active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>seevone</td>
                  <td>oudomxai provine, xai district, Ban lao</td>
                  <td>address</td>
                  <td className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1">Ative</a>
                    <td className="d-flex justify-content-evenly ms-1">
                      <a className="btn btn-sm btn p-1"><GrView /> </a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </td>
                </tr>
                <tr>
                  <td>seevone</td>
                  <td>oudomxai provine, xai district, Ban lao</td>
                  <td>address</td>
                  <td className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1">Ative</a>
                    <td className="d-flex justify-content-evenly ms-1">
                      <a className="btn btn-sm btn p-1"><GrView /> </a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </td>
                </tr>
                <tr>
                  <td>seevone</td>
                  <td>oudomxai provine, xai district, Ban lao</td>
                  <td>address</td>
                  <td className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1">Ative</a>
                    <td className="d-flex justify-content-evenly ms-1">
                      <a className="btn btn-sm btn p-1"><GrView /> </a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </td>
                </tr>
                <tr>
                  <td>seevone</td>
                  <td>oudomxai provine, xai district, Ban lao</td>
                  <td>address</td>
                  <td className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1">Ative</a>
                    <td className="d-flex justify-content-evenly ms-1">
                      <a className="btn btn-sm btn p-1"><GrView /> </a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </td>
                </tr>
                <tr>
                  <td>seevone</td>
                  <td>oudomxai provine, xai district, Ban lao</td>
                  <td>address</td>
                  <td className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1">Ative</a>
                    <td className="d-flex justify-content-evenly ms-1">
                      <a className="btn btn-sm btn p-1"><GrView /> </a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
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


export default table_place