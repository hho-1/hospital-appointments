import React, { useEffect, useState } from 'react'
import Ahmet from '../assets/ahmet.png'
import Ayse from '../assets/Ayse.png'
import Fatma from '../assets/Fatma.png'
import Oya from '../assets/Oya.png'
import PatientList from '../ListPatient/PatientList'
import veri from '../../helpers/data'

const FilterDoctor = ({doktorName, onDelete, onCreate}) => {

  const [doktorunHastalari, setDoktorunHastalari] = useState(veri)

  const hastaArray = []

  useEffect(()=>{
		for(let i = 0; i < doktorunHastalari.length; i++){
      if(doktorunHastalari[i].doktor === doktorName) hastaArray.push(doktorunHastalari[i])
    }
    console.log(hastaArray);
    
    setDoktorunHastalari(hastaArray)
	}, [])

  const [isim, setIsim] = useState("")
  const [tarih, setTarih] = useState("")

  const addPatienttoData = (e) => {
    e.preventDefault()
    onCreate(isim, tarih, doktorName)
    
  }

  const doktorAdi = doktorName.split(" ")
  const variableName = doktorAdi[1]
  
  return (
    <div>
        <div className="card">
          <img src={{variableName}} className="card-img-top" alt={doktorAdi[1]}/>
          <div className="card-body">
            <p className="card-text text-primary">{doktorName}</p>
          </div>
        </div>
        <section className='d-flex justify-content-between'>
          <form className='hastaKayit mt-5 w-25' onSubmit={addPatienttoData}>
            <div className="mb-3">
              <label htmlFor="hastaBilgileri" className="form-label">Hasta Bilgileri</label>
              <input type="text" className="form-control" id="hastaBilgileri" placeholder="Adi ve Soyadi" onInput={(e) => setIsim(e.target.value)}/>
              <label htmlFor="dateAndTime" className="form-label mt-4">Day & Time</label>
              <input type="datetime-local" className="form-control" id="dateAndTime" onInput={(e) => setTarih(e.target.value)}/>
              <button className='bg-success text-light mt-5 btn-lg border-0 p-3 rounded-4' type="submit">{doktorName} icin KAYIT OLUSTUR</button>
            </div>
          </form>
          <div className='hastalarGosterim w-50'>
            
            <PatientList data={doktorunHastalari} onDelete={onDelete}/>
            
          </div>
        </section>

        
    </div>
  )
}

export default FilterDoctor