import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaHospitalUser } from 'react-icons/fa'
import axios from 'axios';
import swal  from 'sweetalert2'
function sign_up() {
  const [register, setRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    profile: '',
    roles:"admin"
  })

  const newData = {
    firstname:register.firstname,
    lastname:register.lastname,
    email:register.email,
    password:register.password,
    profile : register.profile,
    roles:register.roles
    
  }
  // sign up api

   const Swal = () => {
    swal.fire(
      'Successed',
      '',
      'success'
    )
   }

  const signUp = async () => {
       const formData = new FormData();
       formData.append('file',register.profile)
       formData.append('upload_preset', "picture")
     await axios.post('https://api.cloudinary.com/v1_1/travellaos/image/upload',formData)
      .then((res) => {
        newData['profile'] = res.data.url;
        axios.post('http://localhost:5000/api/SignUp', newData).then(() => {
           Swal()
        }).catch((error) => {
          console.log(error)
        })
       
      }).catch((error) => {

        console.log({message:error.message})
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp()
    setRegister({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      profile: '',
    })
  }


  return (
    <div className=' mt-1 d-flex justify-content-center  h-50'>
      <Form className='shadow-lg p-5 w-auto rounded mt-2 bg-primary' onSubmit={handleSubmit}>
        <div className='d-flex justify-content-evenly '>
          <FaHospitalUser size={20} className=' bg-danger w-25 h-25 rounded-5 ' />
          <h2 className='mt-4'>SIGN UP</h2>
        </div>
        <div className='d-flex justify-content-center mb-4'>
        </div>
        <Form.Group className="mb-4 mt" controlId="formBasicPassword">
          <Form.Control
            type="First Name" placeholder="First Name"
            name="firstname"
            value={register.firstname}
            onChange={(e) => setRegister({ ...register, firstname: e.target.value })}


          />

        </Form.Group>
        <Form.Group className="mb-4 mt" controlId="formBasicPassword">
          <Form.Control type="Last Name" placeholder="Last Name"
            name="lastname"
            value={register.lastname}
            onChange={(e) => setRegister({ ...register, lastname: e.target.value })}


          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email"
            name="email"
            value={register.email}
            onChange={(e) => setRegister({ ...register, email: e.target.value })}



          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4 mt" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password"
            name="password"
            value={register.password}
            onChange={(e) => setRegister({ ...register, password: e.target.value })}

          />
        </Form.Group>

        <Form.Group className="mb-4 mt" controlId="formBasicPassword">
        </Form.Group>  <Form.Group className="mb-4 mt" controlId="formBasicPassword">
          <Form.Control type="file" placeholder="Profile"
           name="profile"
           onChange={(e) => setRegister({...register,profile:e.target.files[0]})}
          
          />
        </Form.Group>
        <div className='d-flex justify-content-around align-items-center'>
          <Button variant="warning" type="submit">
            Sign Up
          </Button>

        </div>
      </Form>
    </div>


  )
}

export default sign_up