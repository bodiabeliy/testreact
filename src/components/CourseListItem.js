import React from 'react'
import { Col, Card, Nav } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';

export default function AdvItems({course}) {
 return (
 <Col sm>
<CardActionArea>
 <Card className='cardsofcourse'>
   <Card.Img  variant="top" src={course.srcImage} />
   <Card.Body>
     <Card.Title className='card_header'>{course.title}</Card.Title>
     <Card.Text className='card_text'>
    {course.desciption} <br/>
    <Nav.Link href="#" style={{color:'red'}}>read more...</Nav.Link>
     </Card.Text>
     <button className='btnCard' type='submit'>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
   </Card.Body>
 </Card>
 </CardActionArea>
</Col>
 )
}
