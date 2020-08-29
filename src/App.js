import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const[{user},dispatch]=useStateValue();
  return (
    <div className="App">
      {!user?<Login/>:(
      <>
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>
      </>)}
      
    </div>
  );
}

export default App;
