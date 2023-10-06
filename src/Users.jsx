import React, { useContext, useState, useEffect } from 'react'
import { Common } from './Common'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './users.css'


function Users() {
    const{datas, userdelete, useredit} = useContext(Common);
    
  return (
    <> 
        <div className="container">
            <div className="row">
                { datas.map((user)=>(
                    <div className="col-lg-4">
                         <Card className='card'>
                            <Card.Body>
                                <Card.Title className='title'>User Details</Card.Title>
                                <Card.Text>
                                <h5><span>Name:</span> {user.name}</h5>
                                <h5><span>User Name:</span> {user.username}</h5>
                                <h5><span>Email:</span> {user.email}</h5>
                                </Card.Text>
                                <div className="cart-btns">
                                <Button variant="outline-warning" onClick={()=>useredit(user.id)}>Update</Button>
                                <Button variant="outline-danger" onClick={()=>userdelete(user.id)}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Users