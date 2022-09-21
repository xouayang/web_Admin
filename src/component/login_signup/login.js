import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate} from 'react-router-dom';

import { SiYourtraveldottv } from 'react-icons/si'
import Swal  from 'sweetalert2'

const  login = () =>  {
    const [signin, setSignin] = useState({
        email:'',
        password:'',

       
    })
    const navigate = useNavigate();
    
    const newData = {
        email:signin.email,
        password:signin.password,
    }
    
     // sign up api
   const swal = () => {
   Swal.fire(
      'Successed',
      '',
      'success'
     
    )
   }

    const SignIn = async () => {
    axios.post('http://localhost:5000/api/SignIn', newData).then(() => {
   swal()
   navigate('/Showall')
}).catch((error) => {
    console.log(error)
})
 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (

        <div className=' mt-3 d-flex justify-content-center  h-100'>

            <Form className='shadow-lg p-5 w-auto rounded mt-5' onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center mb-4'>
                    <SiYourtraveldottv size={60} color="red" />
                    <h2 className='mt-3 me-md-5'>WELCOME</h2>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"
                    name="email"
                    value={signin.email}
                    onChange={(e) => setSignin({ ...signin, email: e.target.value })}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                
                </Form.Group>
                <Form.Group className="mb-4 mt" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"
                    name="password"
                    value={signin.password}
                    onChange={(e) => setSignin({ ...signin, password: e.target.value })}/>


                </Form.Group>
                <p className='text-end ' style={{ fontSize: '10px', cursor: 'pointer' }}> forget you password</p>

                <div className='d-flex justify-content-around align-items-center'>
                    <Button  variant="success" type="submit" onClick={SignIn}>
                        Login
                    </Button>
                    <Link to='./sign_up'>
                        <p className='mt-3'>Sign Up</p>
                    </Link>
                </div>
            </Form>
        </div>






    )
}
export default login