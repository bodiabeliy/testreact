import React from 'react'
import { Row } from 'react-bootstrap';
import CourseItem from './CourseListItem'

export default function WorkerList(props) {
 return (
    <div>
       <Row>
        {props.course.map(course => {
          return <CourseItem course={course}/>
        })
        }
      </Row>
    </div>
 )
}