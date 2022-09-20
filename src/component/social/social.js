import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {AiFillFacebook}from 'react-icons/ai'
import {FaTiktok}from 'react-icons/fa'
import {AiFillYoutube}from 'react-icons/ai'
function social() {
 
    return (
        <ListGroup  style={{width:'100%'}} className='mt-5'>
          <ListGroup.Item >
            <AiFillFacebook size={30} color="blue" className='me-md-3'/>
            Facebook
          </ListGroup.Item>
          <ListGroup.Item >
            <FaTiktok size={30} color="black" className='me-md-3'/>
            Tiktok
          </ListGroup.Item>
          <ListGroup.Item >
            <AiFillYoutube size={30} color="red" className='me-md-3'/>
            Youtube
          </ListGroup.Item>
          
        </ListGroup>
      );
    }
    

export default social;