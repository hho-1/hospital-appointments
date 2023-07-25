import React, { useState } from 'react'
import "./AddPatient.css"

const AddPatient = ({id, text, day, bittiMi, doktor, onDelete}) => {

  const [bitti, setBitti] = useState(false)
  
  const handleBitti = () => {
    if(bitti) setBitti(false)
    else setBitti(true)
  }
  const handleDeleteButton = () => {
    onDelete(id)
  }

  return (
    <div className='appointments'>
      {bitti ? (
      <div className="card appointment mt-1 bitti">
        
        <div className="card-body" onClick={handleBitti}>
          <h4 className="card-text text-success completed">{text}</h4>
          <p className='date completed'>{day}</p>
          <h6 className="card-text text-primary completed">{doktor}</h6>
          
          <p className='text-danger ilgilenildi'>Hastayla ilgilenildi!</p>
        </div>
        <button className='delete-button bg-transparent border-0 text-danger fs-3' onClick={handleDeleteButton}><i className="fa-solid fa-circle-xmark"></i></button>
      </div>
      
      ) 
      : 
      (
      <div className="card appointment mt-1 bitmedi">
        
        <div className="card-body" onClick={handleBitti}>
          <h4 className="card-text text-success">{text}</h4>
          <p className='date'>{day}</p>
          <h6 className="card-text text-primary">{doktor}</h6>
          
        </div>
        <button className='delete-button bg-transparent border-0 text-danger fs-3' onClick={handleDeleteButton}><i className="fa-solid fa-circle-xmark"></i></button>
      </div>
      
      )
    }
      
    
      
    </div>
  )
}

export default AddPatient