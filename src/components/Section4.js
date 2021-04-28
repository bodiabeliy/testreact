import React from 'react'
import {Carousel, Container } from 'react-bootstrap';


export default function Section4() {
  const sliderUniversity = [
     {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fcambridge.png?alt=media&token=749dfa2e-e9ca-4e65-a9b5-49fcd983d4bd',
      title: 'Cambridge',
     },
     {
       srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fharvard.png?alt=media&token=480c6811-2781-47f8-bca2-3dfb3a095207',
       title: 'Harvard',
     },
      {
       srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fmit_crest_logo.png?alt=media&token=2711a207-e2ee-4ce8-a394-871dfda5c1a5',
       title: 'MIT',
     },
      {
       srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fucla.png?alt=media&token=92f9d7ec-5273-45ae-826a-dc05e0ccd918',
       title: 'Ucla',
     }

    ]
 return (
  <div>
   <h3 className='section_title' id="course" style={{marginBottom: '55px'}}>ПАРТНЕРИ - ОСВІТНІ ЗАКЛАДИ</h3>
  <Container>
  <Carousel>

  <Carousel.Item>
    <img
      style={{margin: '0 auto'}}
      className="d-flex"
      src={sliderUniversity[0].srcImage}
      alt="Cambridge"
    />
    <Carousel.Caption>
      <h3 style={{color:'black'}}>{sliderUniversity[0].title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{margin: '0 auto'}}
      className="d-flex "
      src={sliderUniversity[1].srcImage}
      alt="Harvard"
    />

    <Carousel.Caption>
    <h3 style={{color:'black'}}>{sliderUniversity[1].title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{margin: '0 auto'}}
      className="d-flex"
      src={sliderUniversity[2].srcImage}
      alt="MIT"
    />

    <Carousel.Caption>
    <h3 style={{color:'black'}}>{sliderUniversity[2].title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{margin: '0 auto'}}
      className="d-flex"
      src={sliderUniversity[3].srcImage}
      alt="Ucla"
    />
    <Carousel.Caption>
    <h3 style={{color:'black'}}>{sliderUniversity[3].title}</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Container>
  </div>
 )
}

