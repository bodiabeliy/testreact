import React from 'react';
import {Container, Row, Col, Card, Nav } from 'react-bootstrap';
import CourseList from './CourseList'


export default function Section3() {

  const courseCards = [
     {
     srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2F1.png?alt=media&token=e263bca1-bc2f-478a-8f3a-ba452146eef4',
     title: 'Основи програмування',
     desciption:'After the first 50 completed projects to make a mistake with the deadlines almost unreal'
    },
     {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2F2.png?alt=media&token=a71730e2-3430-4398-baa0-08e43b2f8128',
      title: 'Розробка та аналіз алгоритмів',
      desciption:'    After the first 50 completed projects to make a mistake with the deadlines almost unreal '
    },
    {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2F3.png?alt=media&token=fe3a736a-393f-4912-b8a3-a972446e1300',
      title: 'Економіка для всіх',
      desciption:'    After the first 50 completed projects to make a mistake with the deadlines almost unreal '
    },
     {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2F4.png?alt=media&token=47677768-40bf-478b-ab33-b9eb667430b5',
      title: 'Історія України',
      desciption:'After the first 50 completed projects to make a mistake with the deadlines almost unreal '
    }
  ]


  return (
<div className='course_overlay'>
  <h3 className='section_title ' id="course">ДОСТУПНІ КУРСИ</h3>
  <h4 className='section_subtitle'>Запишіться прямо зараз на безкоштовні курси</h4>
  <Container className='cards_adv'>
  <CourseList course ={courseCards}/>
  </Container>
</div>
)

}


