import React from 'react';
import HeaderBlock from "./components/HeaderBlock/index";


const App = () => {
  return (
  <React.Fragment>
    <HeaderBlock 
      title ='this is new props'
      desc='this is new description'
      />
    <HeaderBlock title ='this is new props'/>
  </React.Fragment>
  )
}

export default App;
