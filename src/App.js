import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Dashboard';
import { Homepage } from './Homepage';

function App() {
  const [formData,setFormData] = useState({
    name:"",
    noOfUser:"",
    noOfFailedLogin:'',
    noOfGroups:'',
    noOfActiveUser:'',
    place1:'',
    place2:''
  })
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Homepage formData = {formData} setFormData = {setFormData}/>}/>
        <Route path = 'dashboard' element = {<Dashboard formData = {formData} setFormData = {setFormData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
