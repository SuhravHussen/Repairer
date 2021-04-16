import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'
const Service = ({data}) => {
  const history = useHistory()
  const handleBooking =()=>{
    history.push('/dashboard/'+id)
  }
   const {name , price , img ,id} = data
    return (<div className="single-service"> 
        <Card style={{ width: '18rem' }}>
    <Card.Img style={{height:'250px'}} variant="top" src={img} />
    <Card.Body className="mx-auto">
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      <h3 style={{color:'red'}}>Price : {price}$</h3>
      </Card.Text>
      <Button onClick={handleBooking} className="Primary-btn">Book Now!</Button>
    </Card.Body>
  </Card>
  </div>
       
    );
};

export default Service;