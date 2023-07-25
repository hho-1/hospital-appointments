import React from 'react'
import AddPatient from '../AddPatient/PatientAdd'


const PatientList = ({data, onDelete, onCreate}) => {

  return (
    <div className='liste my-5'>
      
        {data.map((hasta) => (<AddPatient key={hasta.id} {...hasta} onDelete={onDelete}/>))}
    </div>
  )
}

export default PatientList