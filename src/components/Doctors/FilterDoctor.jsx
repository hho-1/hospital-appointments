import React, { useState } from 'react'
import Ahmet from '../assets/ahmet.png'
import PatientList from '../ListPatient/PatientList'
import veri from '../../helpers/data'

const FilterDoctor = ({doktorName, onDelete}) => {

  const [doktorunHastalari, setDoktorunHastalari] = useState(veri)
  let PatientsofDoctor = []

  for(let i = 0; i <doktorunHastalari.length; i++){
    PatientsofDoctor.push(doktorunHastalari.filter((item)=> {
    return item === doktorName;
  }))
  }
  setDoktorunHastalari(PatientsofDoctor)

  return (
    <div>
        <div className="card">
          <img src={Ahmet} className="card-img-top" alt="ahmet"/>
          <div className="card-body">
            <p className="card-text text-primary">{doktorName}</p>
          </div>
        </div>
        <section className='d-flex justify-content-evenly'>
          <form className='hastaKayit mt-5 w-50'>
            <div className="mb-3">
              <label htmlFor="hastaBilgileri" className="form-label">Hasta Bilgileri</label>
              <input type="text" className="form-control" id="hastaBilgileri" placeholder="Adi ve Soyadi"/>
              <label htmlFor="dateAndTime" className="form-label mt-4">Day & Time</label>
              <input type="datetime-local" className="form-control" id="dateAndTime"/>
              <button className='bg-success text-light mt-5 btn-lg border-0 p-3 rounded-4' type="button">{doktorName} icin KAYIT OLUSTUR</button>
            </div>
          </form>
          <div>
            
            <PatientList data={doktorunHastalari} onDelete={onDelete}/>
            
          </div>
        </section>

        
    </div>
  )
}

export default FilterDoctor