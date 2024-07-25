import React from 'react';
import './App.css';
import Login from './aml_screens/auth/Login';
import Header from './aml_screens/common/Header';
import Sidebar from './aml_screens/common/Sidebar';
import Main from './aml_screens/common/Main';

function App() {
  return (
    <div className="w-full h-full">
       
      <Header/>
      <div className='flex'>
         <Sidebar/>
         <Main/>
      </div>
    
    </div>
  );
}

export default App;