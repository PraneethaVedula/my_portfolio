import './App.css';
import Home from './Home';
import Prize from './Prize';
import Certi from './Certi'; 
import Work from './Work';
import Techstack from './Techstack';
import {Routes,Route} from 'react-router-dom';
import About from './About';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Prize' element = {<Prize/>} />
        <Route path='/Certi' element={<Certi />} /> 
        <Route path='/Work' element = {<Work/>} />
        <Route path='/Techstack' element = {<Techstack/>} />
        <Route path='/About' element = {<About/>} />
        
        
      </Routes>

    </>
  );
}

export default App;


