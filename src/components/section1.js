import React from 'react'
import Form from './HeaderForm'
import { Navbar, Nav } from 'react-bootstrap';



export default function Section1() {
  function Alert() {
   /* плавный якорный скролл*/
const anchors = document.querySelectorAll('Nav.Link[href*="#"]');

for (let anchor of anchors) {
 anchor.addEventListener("click", (event) => {
  event.preventDefault();
  const block = anchor.getAttribute('href')
  document.querySelector('' + block).scrollIntoView({
   behavior: "smooth",
  })
 })
}
  }
  
 return (
  <div>
    <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Navbar.Brand href="#home" className='logo'>COURSEWAY</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#main" className='navigation_item'>Головна</Nav.Link>
          <Nav.Link href="#course" className='navigation_item'>Курси</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={Alert} href="#" className='navigation_item'>Блог</Nav.Link>
          <Nav.Link eventKey={2} href="#team" className='navigation_item'>
          про проект
          </Nav.Link>
          <Nav.Link href="#regester" className='navigation_item'>Редєстрація</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <h1 className='title' >БЕЗКОШТОВНІ ОНЛАЙН-КУРСИ</h1>
    <h2 className='subtitle'>ВІД ВИКЛАДАЧІВ ПРОВІДНИХ УНІВЕРСИТЕТІВ СВІТУ</h2>
    <Form></Form>
  </div>
 )
}


