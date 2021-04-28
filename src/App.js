import './App.css';
import React from 'react';
import Section1 from './components/section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Footer from './components/footer'


class  App extends React.Component{
  // ф-я отрисовки компонента(ов)
  render() {
    return (
      <div>
        <div className='full_overlay'>
          <div className="main_contant">
           <Section1 />
          </div>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Footer />
        </div>
      </div>
     );
  }
  
}

export default App;
