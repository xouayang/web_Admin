import React from 'react'
import Dashboard from '../dashboard'
import Navbar from '../Navbar'
function content_reviewer() {
  return (
    <>
       <Navbar/>
       <Dashboard/>
        {/* table_content_reviewer*/}
        <div class="bg-light text-center rounded p-5">
        <div class="d-flex align-items-center justify-content-between mb-4">
            <h1 class="mb-0">chekpayment</h1>
            <a href="">Show All</a>
        </div>
        <div class="table-responsive">
            <table class="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                    <tr class="text">
                                       
                        <th scope="col">Title</th>
                        <th scope="col">Dose</th>
                        <th scope="col">Link</th>
                       <th scope="col">Review</th>
                        <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                       
                        <td>vangveing</td>
                        <td>nature in laos</td>
                        <td>http:/facebook</td>
                        <td>vangveing</td>
                      <td><a class="btn btn-sm btn-danger" href="">closh</a></td>
                    </tr>
                    <tr>                       
                        <td>vangveing</td>
                        <td>nature in laos</td>
                        <td>http:/facebook</td>
                        <td>vangveing</td>
                      <td><a class="btn btn-sm btn-primary" href="">Active</a></td>
                    </tr>
                    <tr>                       
                        <td>vangveing</td>
                        <td>nature in laos</td>
                        <td>http:/facebook</td>
                        <td>vangveing</td>
                      <td><a class="btn btn-sm btn-danger" href="">closh</a></td>
                    </tr>
                    <tr>                       
                        <td>vangveing</td>
                        <td>nature in laos</td>
                        <td>http:/facebook</td>
                        <td>vangveing</td>
                      <td><a class="btn btn-sm btn-primary" href="">Active</a></td>
                    </tr>
                    <tr>                       
                        <td>vangveing</td>
                        <td>nature in laos</td>
                        <td>http:/facebook</td>
                        <td>vangveing</td>
                      <td><a class="btn btn-sm btn-danger" href="">closh</a></td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default content_reviewer