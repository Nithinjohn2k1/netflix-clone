
import './App.css';
import React from 'react';
import NavBar from './component/Navbar/NavBar';
import Banner from './component/banner/Banner';
import Rowpost from './component/Rowpost/Rowpost';
import {originals,action,comedy} from './urls'
function App() {
  return (
    <div className="App">
        <NavBar/> 
        <Banner/>
        <Rowpost url={originals} title='Netflix Originals'/>
        <Rowpost url={action} title='Action' isSmall/>
        <Rowpost url={comedy} title='Comedy' isSmall/>
        
    </div>
  );
}

export default App;
