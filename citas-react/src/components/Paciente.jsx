import React from 'react'

const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {
  const handleEliminar =()=>{

    const ans = confirm('¿Estás seguro de que deseas eliminar este paciente?');
    if(ans){
      eliminarPaciente(paciente.id)
    }
  }
  return (
    <div className=''>
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>

<p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: <span className='normal-case font-normal'>{paciente.nombre}</span>
</p>

<p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: <span className='normal-case font-normal'>{paciente.propietario}</span>
</p>

<p className='font-bold mb-3 text-gray-700 uppercase'>Email: <span className='normal-case font-normal'>{paciente.email}</span>
</p>

<p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: <span className='normal-case font-normal'>{paciente.alta}</span>
</p>

<p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: <span className='normal-case font-normal'>{paciente.sintomas}</span></p>

<div className='md:flex md:justify-between mt-10'>
  <button type = "button" className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
  onClick={()=>{
    setPaciente(paciente)
  }}>Editar</button>
  <button type = "button" className =' py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
  onClick={()=>{
    handleEliminar()
  }
 }>Eliminar</button>
</div>
</div>
    </div>


  )
}

export default Paciente