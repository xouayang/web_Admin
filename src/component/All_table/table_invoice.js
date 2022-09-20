import React from "react";
import { GrView } from "react-icons/gr";
import { Row } from "react-bootstrap";

function table_invoice() {
  return (
    <div className="d-flex justify-content-center">
      <Row md={7} style={{ width: "70%" }}>
        <div class="bg-light text-center rounded p-5">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">chekpayment</h6>
            <a href="">Show All</a>
          </div>
          <div class="table-responsive">
            <table class="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr class="text ">
                  <th scope="col">totall_invoice</th>
                  <th scope="col">Payment</th>
                  <th scope="col" className="d-flex justify-content-center">Status</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td>01 Jan 2045</td>
                  <td>025667778</td>
                  <td className="d-flex justify-content-evenly">
                    <a className="btn btn-danger" >closh</a>
                    <a className="btn btn-sm btn p-1">
                      <GrView />
                    </a>
                    <a className="btn btn-sm btn-primary p-1">Edit</a>
                    <td>
                      <a class="btn btn-sm btn-danger" >
                        Delete
                      </a>

                    </td>
                  </td>
                </tr>
                <tr>
                  <td>01 Jan 2045</td>
                  <td>025667778</td>
                  <td className="d-flex justify-content-evenly">
                    <a className="btn btn-danger" >closh</a>
                    <a className="btn btn-sm btn p-1">
                      <GrView />
                    </a>
                    <a className="btn btn-sm btn-primary p-1">Edit</a>
                    <td>
                      <a class="btn btn-sm btn-danger" >
                        Delete
                      </a>

                    </td>
                  </td>
                </tr>
                <tr>
                  <td>01 Jan 2045</td>
                  <td>025667778</td>
                  <td className="d-flex justify-content-evenly">
                    <a className="btn btn-danger" >closh</a>
                    <a className="btn btn-sm btn p-1">
                      <GrView />
                    </a>
                    <a className="btn btn-sm btn-primary p-1">Edit</a>
                    <td>
                      <a class="btn btn-sm btn-danger" >
                        Delete
                      </a>

                    </td>
                  </td>
                </tr>
                <tr>
                  <td>01 Jan 2045</td>
                  <td>025667778</td>
                  <td className="d-flex justify-content-evenly">
                    <a className="btn btn-success">Active</a>
                    <a className="btn btn-sm btn p-1">
                      <GrView />
                    </a>
                    <a className="btn btn-sm btn-primary p-1">Edit</a>
                    <td>
                      <a class="btn btn-sm btn-danger" >
                        Delete
                      </a>
                    </td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default table_invoice;
