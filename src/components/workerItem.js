import React from 'react'
import {Container, Row, Col, Card, Nav } from 'react-bootstrap';

export default function Worker({worker}) {
 return (
  <Col>
   <Card className='workersCards' >
     <Card.Img  variant="top" src={worker.photo} />
     <Card.Body>
       <Card.Title className='card_title'>{worker.name}</Card.Title>
       <Card.Text className='card_description'>
      {worker.description}
       </Card.Text>
       <div className="social_icons">
         <Nav.Link href="#">
         <img src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fsocial%20-%20facebook%20-%201.png?alt=media&token=b10e5ab3-e685-4fbf-aba5-853146597c18" alt=""/>
         </Nav.Link>
         <Nav.Link href="#">
         <img src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fsocial%20-%20twitter%20-%201.png?alt=media&token=2fe4c5e7-f4fa-45dd-be87-cd2ec42e66c6" alt=""/>
         </Nav.Link>        
         <Nav.Link href="#">
         <img src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fsocial%20-%20google%20-%20plus.png?alt=media&token=f1900282-360d-4cac-839d-a9cbbcb78857" alt=""/>
         </Nav.Link>       
        </div>
     </Card.Body>
   </Card>
  </Col>
 )
}
