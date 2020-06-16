import React, { Fragment } from 'react';
import Header from "./components/header";
import Switch from "./components/switch";
import TopCardList from "./components/top-cards-list";
import Overview from "./components/overview";
import './styles/global.css'; 

function App() {
  return (
    <Fragment>
      <Header> 
        <Switch /> 
      </Header>
        <TopCardList /> 
      <Overview />
   </Fragment>
  );
}

export default App;
