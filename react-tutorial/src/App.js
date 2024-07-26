import React, { useState } from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Login from './aml_screens/auth/Login';
import Header from './aml_screens/common/Header';
import Sidebar from './aml_screens/common/Sidebar';
import Main from './aml_screens/common/Main';
import AmlThreshold from './aml_screens/aml/AmlThreshold';
import AmlSystem from './aml_screens/aml/AmlSystem';
import { Appcontext } from './aml_screens/common/AppContext';

function App() {

  const defaultAppData = {
    sidebarVisible:true
  }
  const [appData,setAppData] = useState(defaultAppData);

  return (
    <div className="w-full h-full">
       <Appcontext.Provider value = {{appData,setAppData}}>
       <Header/>
      <div className='flex'>
         <Sidebar/>
      
       <Router>

       <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/AmlThreshold" element={<AmlThreshold />} />
        <Route path="/AmlSystem" element={<AmlSystem />} />
       
      </Routes>
    </Router>

    </div>
       </Appcontext.Provider>
    
    </div>
  );
}

export default App;