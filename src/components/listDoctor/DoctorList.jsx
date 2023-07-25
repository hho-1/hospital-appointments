import React, { useState } from 'react'
import Ahmet from '../assets/ahmet.png'
import Ayse from '../assets/Ayse.png'
import Fatma from '../assets/Fatma.png'
import Oya from '../assets/Oya.png'
import "./DoctorList.css"
import FilterDoctor from '../Doctors/FilterDoctor'
import PatientList from '../ListPatient/PatientList';



const DoctorList = ({doktorListesi, data}) => {

  const [doktorlar, setDoktorlar] = useState(doktorListesi)

  const createPatient = (click) => {
    const remainedDoctor = doktorlar.filter(element => {
      return element.toLowerCase().includes(click.target.alt)
    })
    setDoktorlar(remainedDoctor)

  }

  const [hastalar, setHastalar] = useState(data)

  const deletePatientById = (id) => {
    const remainedPatients = hastalar.filter((item)=> {
      return item.id !== id;
    })
    setHastalar(remainedPatients)
  }

  

  return (
    <div>
      {
      doktorlar.length === 1 ? 
      (
        <FilterDoctor doktorName={doktorlar[0]} onDelete={deletePatientById}/>
      ) 
      : 
      (
      <div className='doctorList'>
        <div className="card" id='ahmet' onClick={createPatient}>
          <img src={Ahmet} className="card-img-top" alt="ahmet"/>
          <div className="card-body">
            <p className="card-text text-primary">{doktorListesi[1]}</p>
          </div>
        </div>
        <div className="card" id='ayse' onClick={createPatient}>
          <img src={Ayse} className="card-img-top" alt="ayse"/>
          <div className="card-body">
            <p className="card-text text-primary">{doktorListesi[3]}</p>
          </div>
        </div>
        <div className="card" id='fatma' onClick={createPatient}>
          <img src={Fatma} className="card-img-top" alt="fatma"/>
          <div className="card-body">
            <p className="card-text text-primary">{doktorListesi[2]}</p>
          </div>
        </div>
        <div className="card" id='oya' onClick={createPatient}>
          <img src={Oya} className="card-img-top" alt="oya"/>
          <div className="card-body">
            <p className="card-text text-primary">{doktorListesi[0]}</p>
          </div>
        </div>
        
      </div>
    )
    }
      <PatientList data={hastalar} onDelete={deletePatientById}/>
   </div>

    
  )
}

export default DoctorList