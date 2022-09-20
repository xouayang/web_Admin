import React from 'react'
import { GrView } from 'react-icons/gr';
import {Button, Row} from "react-bootstrap"
import {Link} from 'react-router-dom'

  function table_reviewer() {
  return (
    
        
        <div className="d-flex justify-content-center" >
        <Row md={7} style={{ width: '70%' }}>
          <div class="bg-light text-center rounded p-5">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h6 class="mb-0">chekpayment</h6>
              <Link to="/Content_reviewer">
              <Button className='bg-warning text-dark'>Content</Button>
              </Link>
            </div>
            <div class="table-responsive">
              <table class="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr class="text">                  
                    <th scope="col">User</th> 
                    <th scope="col">Yotube</th>
                    <th scope="col">Tiktoker</th>
                    <th scope="col">Page</th>
                    <th scope="col">Link</th>
                    <th scope="col">Point</th>
                    <th className='d-flex justify-content-center' scope="col">Action</th>    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>some</td>
                    <td>Yotube</td>
                    <td>Tiktoker</td>
                    <td>Page</td>
                    <td>link</td>
                    <td>point</td>
                    <td  className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1 ">Ative</a>
                     <a className="d-flex justify-content-evenly ms-1"></a>
                      <a className="btn btn-sm btn p-1"><GrView /></a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>   
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </tr>
                  <tr>
                     <td>some</td>
                    <td>Yotube</td>
                    <td>Tiktoker</td>
                    <td>Page</td>
                    <td>link</td>
                    <td>point</td>
                    <td  className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1 ">Ative</a>
                     <a className="d-flex justify-content-evenly ms-1"></a>
                      <a className="btn btn-sm btn p-1"><GrView /></a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>   
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </tr>
                  <tr>
                     <td>some</td>
                    <td>Yotube</td>
                    <td>Tiktoker</td>
                    <td>Page</td>
                    <td>link</td>
                    <td>point</td>
                    <td  className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1 ">Ative</a>
                     <a className="d-flex justify-content-evenly ms-1"></a>
                      <a className="btn btn-sm btn p-1"><GrView /></a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>   
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </tr>
                  <tr>
                     <td>some</td>
                    <td>Yotube</td>
                    <td>Tiktoker</td>
                    <td>Page</td>
                    <td>link</td>
                    <td>point</td>
                    <td  className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1 ">Ative</a>
                     <a className="d-flex justify-content-evenly ms-1"></a>
                      <a className="btn btn-sm btn p-1"><GrView /></a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>   
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </tr>
                  <tr>
                     <td>some</td>
                    <td>Yotube</td>
                    <td>Tiktoker</td>
                    <td>Page</td>
                    <td>link</td>
                    <td>point</td>
                    <td  className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1 ">Ative</a>
                     <a className="d-flex justify-content-evenly ms-1"></a>
                      <a className="btn btn-sm btn p-1"><GrView /></a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>   
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </tr>
                  <tr>
                     <td>some</td>
                    <td>Yotube</td>
                    <td>Tiktoker</td>
                    <td>Page</td>
                    <td>link</td>
                    <td>point</td>
                    <td  className='d-flex justify-content-evenly'>
                    <a className="btn btn-sm btn-success p-1 ">Closh</a>
                     <a className="d-flex justify-content-evenly ms-1"></a>
                      <a className="btn btn-sm btn p-1"><GrView /></a>
                      <a className="btn btn-sm btn-primary p-1">Edit</a>   
                      <a class="btn btn-sm btn-danger" href="">Delete</a></td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </Row>
        </div>
  )
}

export default table_reviewer