
import { useState } from 'react';
import './App.css';
import veri from './helpers/data'
import DoctorList from './components/listDoctor/DoctorList';

function App() {

  const [doktorList, setDoktorList] = useState([])

  veri.map((dokt) => {
    if(!doktorList.includes(dokt.doktor)) setDoktorList([...doktorList, dokt.doktor])
  })

  return (
    <div className="App container">
        <h1 className='text-center my-5'>HOSPITAL</h1>
        <DoctorList doktorListesi = {doktorList} data={veri}/>
        
      
    </div>  
  );
}

export default App;
