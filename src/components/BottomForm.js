import React, {useState}  from 'react'
import {Container, Form, Button } from 'react-bootstrap';

export default function BottomForm() {
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
        alert('Ви успішно авторизувались!')
      }
      else {
        alert('Виникла помилка авторизації!') 

      }
    }

 return (
  <div className='position'>
  <Container>
   <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Control 
      required
      onChange={Input}
      type="email" 
      placeholder="Name" 
      className='input height form_elements'
      />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Control
      required
      onChange={Password} 
      type="password" 
      placeholder="Email" 
      className='input height form_elements'
      />
    </Form.Group>
   <Button 
    onClick={Alert}
    variant="primary" 
    type="submit" 
    className='start form_elements _width'>
     Submit
   </Button>
  </Form>
 </Container>
  </div>
 )
}

