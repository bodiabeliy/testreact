import React, {Component, useState} from 'react'
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import AlertBlock from './ALert'


 export default function HeaderForm() {
  //  useState - хук (спец функция для контроля изменений приложения)
  //  const [state, ChangeState] = useState(0)
  //  // 1-й аргумент -  значение стейта (текущие состояние компонента) поумолчанию
  //  // 2-й -  ф-я для измения состояния
 

  const [email, ChangeStateEmail] = useState('')
  const [password, ChangeStatePassword] = useState('')

    // обработка поля email
   function Input(symbol) {
      const userEmail = symbol.target.value
    // получение и сохранение текущего значения
    ChangeStateEmail(userEmail)
    }
    // считование введеных символов (пароль)
    function Password(symbol) {
      const userPass = symbol.target.value
    // получение и сохранение текущего значения
    ChangeStatePassword(userPass)
    }

    // Проверка входа
    function Alert(e) {
      e.preventDefault()
      if (email.length > 10 && password.length >8) {
        <AlertBlock></AlertBlock>
        alert('Ви успішно авторизувались!')
      }
      else {
        alert('Виникла помилка авторизації!') 

      }
    }
  return (
    <div>
   <Container>
    <Row>
      <Col sm={7}></Col>
      <Col sm={4}>
      <Form>
       <Form.Group controlId="formGroupEmail">
         <Form.Control
          onChange={Input}
          required
          type="email" 
          placeholder="Email" 
          className='input width form_elements'
          />
       </Form.Group>
       <Form.Group controlId="formGroupPassword">
         <Form.Control 
         onChange={Password}
         required
         type="password" 
         placeholder="Password" 
         className='input width form_elements'
         />
       </Form.Group>
       <Button 
        onClick={Alert}
        className='start width form_elements' 
        type="submit">
        РОЗПОЧАТИ! 
     </Button>
    </Form>
      </Col>
    </Row>
  </Container>
  <Container>
  </Container>
    </div>
   )
}

 



