import React, { useContext, useState } from 'react'
import { Common } from './Common'
import './form.css'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function AppForm() {
    const{ FormSubmit, insertvalues, setinsertvalues, FromChange, edit, userupdate, cancelupdate} = useContext(Common);
   
  return (
    <>
    <div className="container">
      <div className="row">
      <div className="col-lg-6">
        <Form onSubmit={(e)=>FormSubmit(e, insertvalues, setinsertvalues)} className='form'> 

          <Form.Group className="mb-4" controlId="formGroupName">
            <Form.Label className='label'>Name:</Form.Label>
            <Form.Control type="text" 
            name='name' 
            onChange={(e)=>FromChange(e)}
            placeholder="Enter Name" 
            value={insertvalues.name} 
            required/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGroupUsername">
            <Form.Label className='label'>User Name:</Form.Label>
            <Form.Control type="text" 
            name='username' 
            onChange={(e)=>FromChange(e)}
            placeholder="Enter user name" 
            value={insertvalues.username}  
            required/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGroupEmail">
            <Form.Label className='label'>Email address:</Form.Label>
            <Form.Control type="email" 
            name='email' 
            onChange={(e)=>FromChange(e)}
            placeholder="Enter email"  
            value={insertvalues.email} 
            required/>
          </Form.Group>

        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridcity">
          <Form.Label className='label'>City</Form.Label>
          <Form.Control 
          type="text" 
          name='city' 
          onChange={(e)=>FromChange(e)}
          value={insertvalues.address.city}
          placeholder="Enter City" 
          />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPincode">
          <Form.Label className='label'>Pincode</Form.Label>
          <Form.Control 
          type="number" 
          name='zipcode' 
          onChange={(e)=>FromChange(e)}
          value={insertvalues.address.zipcode}
          placeholder="Enter Pincode" 
          />
          </Form.Group>
        </Row> */}

          {!edit?<Button variant="warning" type="submit">Submit</Button>:
          <div className="update-btns">
            <Button variant="warning" type="buttton" onClick={()=>userupdate()}>Update</Button>
            <Button variant="danger" type="buttton" onClick={()=>cancelupdate()} >Cancel</Button>
          </div>
          }
        </Form>
      </div>
      <div className="col-lg-6">
        <img src='public\images\pic3.png' alt='no image' className='home-image'></img>
      </div>
      </div>
    </div>
        
    </>
  )
}

export default AppForm