import React from "react";
import {
  Navbar,
  Nav,
  Container,

  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";


import { FaUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { AiTwotoneSetting } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { BiLogOutCircle } from 'react-icons/bi'



const Navbars = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse
            id="navbarScroll"
            className="d-flex justify-content-between"
          >
{/* button search */}
            <Form className="d-flex me-md-5 ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="md-6 "
                aria-label="Search"
                style={{ width: "300px" }}
              />
              <Button variant="primary">Search</Button>

 {/* langgue */}
            </Form>
           
            <DropdownButton title={<GrLanguage />}>
              <Dropdown.Item href="#/action-1">Laos</Dropdown.Item>
              <Dropdown.Item href="#/action-2">English</Dropdown.Item>
            </DropdownButton>
           
          
            {/* profile */}
            
            <Nav>
              
              <DropdownButton title={<FaUserCircle />}>
                <Dropdown.ItemText>
                  <div>
                    <BsFillPersonLinesFill size={20} className='me-md-2' />
                    profile
                  </div>
                </Dropdown.ItemText>

                <Dropdown.Item as="button">
                  <div>
                    <AiTwotoneSetting size={20} className='me-md-2'/>
                    setting
                  </div>
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <div>
                    <BiLogOutCircle size={20} className='me-md-2' />
                    Logout
                  </div>

                </Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
     
    </div>
  );
};

export default Navbars;
