import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown } from 'react-bootstrap';
import { GiHamburgerMenu, } from 'react-icons/gi';
import { Link } from 'react-router-dom'
import { AiOutlineDashboard } from 'react-icons/ai'
import { MdDashboardCustomize } from 'react-icons/md'
import { Md6FtApart } from 'react-icons/md'
import { FaUserSecret } from 'react-icons/fa'
import { GoListOrdered } from 'react-icons/go'
import { TbPackgeExport } from 'react-icons/tb'
function Dashboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container'>
      <>
        <Button variant='success' onClick={handleShow}>
          <GiHamburgerMenu />
        </Button>

        <Offcanvas show={show} onHide={handleClose} style={{ width: 'auto' }}>
          <Offcanvas.Header closeButton className="bg-info d-flex justify-content-md-auto " style={{ width: 'auto' }}>
            <div className=" justify-content-evenly p-2" style={{ width: '50%', }}>
              <div className="d-flex justify-content-evenly">
                <  AiOutlineDashboard />
                <p >
                  Dashboard
                </p>
              </div>
            </div>
          </Offcanvas.Header>
          {/* slide bar */}
          <Offcanvas.Body >
            {/* 1 */}
            <Link to='/showall' style={{ textDecoration: 'none', color: '#000' }}>
              <Button className="btn btn-light d-flex justify-content-sm-center mt-3 w-auto" style={{ width: '100px' }}>
                <MdDashboardCustomize size={25} className='me-md-1' />
                Dashboard
              </Button>
            </Link>
            {/* 2 */}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button" className="btn btn-light d-flex justify-content-sm-center mt-3 w-auto" style={{ width: '100px' }}>
                <Md6FtApart size={25} className='me-md-1'  />
                Partner
              </Dropdown.Toggle>
              <Dropdown.Menu variant="primary">
                <Dropdown.Item link as={Link} to={"/hotel"}>Hotel</Dropdown.Item>
                <Dropdown.Item Link as={Link} to={"/Reviewer"}>Reviewer</Dropdown.Item>
                <Dropdown.Item Link as={Link} to={"/Place"}>Place</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
            {/* 3 */}
            <Link to='/user' style={{ textDecoration: 'none', color: '#000' }}>
              <Button variant="primary"
                className="btn btn-light d-flex justify-content-sm-center mt-3 w-auto"
                style={{ width: '100px' }}>
                <FaUserSecret size={25} className='me-md-2' />
                User
              </Button>
            </Link>
            {/* 4*/}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button" variant="primary"
                className="btn btn-light d-flex justify-content-sm-center mt-3 w-auto"
                style={{ width: '100px' }}>
                <GoListOrdered size={25} className='me-md-2' />
                Order
              </Dropdown.Toggle>
              <Dropdown.Menu variant="primary">
                <Dropdown.Item Link as={Link} to={"/Payment"}>Payment  </Dropdown.Item>
              <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
            {/* 5 */}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary"
                className="btn btn-light d-flex justify-content-sm-between mt-3 w-auto" style={{ width: '100px' }}>
                <TbPackgeExport size={25} className='me-md-2' />
                Export
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item Link as={Link} to={"/Exel"}>Exel data </Dropdown.Item>
                <Dropdown.Item Link as={Link} to={"/Invice"}>Invioce</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );

}
export default Dashboard