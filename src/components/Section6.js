import React from 'react'
import {Container } from 'react-bootstrap';
import WorkerList from './WorkerList'


export default function Section6() {
  const worker_info = [
    {photo: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fworker1.png?alt=media&token=13cfe3ec-7d94-46d5-ac85-cc0490c2d4ef', name: 'Daniel Raynolds', id: 1, description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit cupiditate nulla optio nostrum deleniti quos porro eos odio nam.'},
    {photo: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fworker2.png?alt=media&token=9e7e3674-17c8-46b1-8e22-f3d01adc4f88', name: 'Nick Parson', id: 2, description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit cupiditate nulla optio nostrum deleniti quos porro eos odio nam.'},
    {photo: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fwork3.png?alt=media&token=8f2cb2da-2db0-4e4f-862b-db27748fc38c', name: 'William Stanley', id: 3, description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit cupiditate nulla optio nostrum deleniti quos porro eos odio nam.'},
    {photo: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fworker4.png?alt=media&token=16a5194b-a28e-44aa-91c0-585d1c2a6267', name: 'Sarah Noel', id: 4, description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit cupiditate nulla optio nostrum deleniti quos porro eos odio nam.'}
  ]
 return (
  <div> 
   <Container className='cards_adv'>
   <h3 className='section_title ' id="team">РОЗРОБНИКИ</h3>
   <WorkerList works ={worker_info}/>
   </Container>
  </div>
 )
}

