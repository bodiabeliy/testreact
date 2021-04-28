import React from 'react'
import { Row, Col, Card, Nav } from 'react-bootstrap';
import WorkerItem from './workerItem'

export default function WorkerList(props) {
 return (
  <Row>
   {props.works.map(worker => {
     return <WorkerItem worker={worker}/>
   })
   }
 </Row>
 )
}