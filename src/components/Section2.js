import React from 'react'
import {Container, Row, Col, Card } from 'react-bootstrap';


export default function Section2() {
  const advCards = {
    Clock: {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2FClock.svg?alt=media&token=25c08f28-1a12-4f13-a306-3e54334bab73',
      title: 'Будь-коли',
      description: 'Навчайтесь у зручний для Вас час. Відеолекції, тести та форум доступні цілодобово.'
    },
    Globe: {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2FGlobe.svg?alt=media&token=92b6b0ae-2b6d-4d0f-9f81-7b16c436ee8c',
      title: 'Будь-де',
      description: 'Проходьте курси, не виходячи з дому чи в дорозі. Все, що Вам знадобиться - це доступ до Інтернету.'
    },
    Phone: {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2FiPhone.svg?alt=media&token=4cc0a80a-7652-40c3-acd5-9f1505f3bb2f',
      title: 'Будь-який пристрій',
      description: 'Навчайтесь на комп’ютері, планшеті чи телефоні: сайт підлаштується під ваш пристрій.'
    },
    Man: {
      srcImage: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2FMan.svg?alt=media&token=8083f62f-d004-47ab-b360-8253e536be5f',
      title: 'Будь-хто',
      description: 'Наші курси абсолютно безкоштовні – захмарні ціни більше ніколи не стануть назаваді найкращій освіті'
    }
  }
  const advBlock =(
  <div>
    <h3 className='section_title' id="main">ПЕРЕВАГИ</h3>
    <Container className='cards_adv'>
      <Row>
        <Col sm>
        <Card style={{ width: '22rem', marginBottom: '50px', marginTop: '50px'}}>
          <Card.Img className='img' variant="top" src={advCards.Clock.srcImage} />
          <Card.Body>
            <Card.Title className='card_title'>{advCards.Clock.title}</Card.Title>
            <Card.Text className='card_description'>
            {advCards.Clock.description}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem',  marginBottom: '50px' }}>
          <Card.Img className='img' variant="top" src={advCards.Globe.srcImage} />
          <Card.Body>
            <Card.Title className='card_title'>{advCards.Globe.title}</Card.Title>
            <Card.Text className='card_description'>
          {advCards.Globe.description}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col sm className='delete'>
        <Card.Img className='lira' variant="top" src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2FLyre.png?alt=media&token=9bb62fc0-e18b-4314-be20-91dbb01f9e88" />
        </Col>
        <Col sm>
        <Card style={{ width: '22rem', marginBottom: '50px', marginTop: '50px' }}>
          <Card.Img className='img' variant="top" src={advCards.Phone.srcImage} />
          <Card.Body>
            <Card.Title className='card_title'>{advCards.Phone.title}</Card.Title>
            <Card.Text className='card_description'>
              {advCards.Phone.description}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem',  marginBottom: '50px' }}>
          <Card.Img className='img' variant="top" src={advCards.Man.srcImage} />
          <Card.Body>
            <Card.Title className='card_title'>{advCards.Man.title}</Card.Title>
            <Card.Text className='card_description'>
              {advCards.Man.description}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  </div>
  );

 return advBlock
}


