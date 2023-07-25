import React from 'react'
import {useState,useEffect} from 'react';
import Error from './Error';

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [alta,setAlta] = useState('');
  const [sintomas,setSintomas] = useState('');

  const[error,setError] = useState(false);
  
  //UseEffects
  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  },[paciente])




  const handleSubmit =(e)=>{
    e.preventDefault();
    //Validación del Formulario

    if([nombre,propietario,email,alta,sintomas].includes('')){
      //console.log("Hay Al menos un campo vacío");
      setError(true);
      return;
    }
    setError(false);
    //Objeto de Paciente

    const generarId =()=>{
const random = Math.random().toString(36).substr(2);
const fecha = Date.now().toString(36)
return fecha+random;
    }


    const objetoPaciente ={
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }
    if(paciente.id){
      //Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState =>pacienteState.id === paciente.id ? objetoPaciente: pacienteState)
    setPacientes (pacientesActualizados)
    setPaciente({})
    }
    else {
    //Un Nuevo registro
    objetoPaciente.id = generarId();
    setPacientes([...pacientes,objetoPaciente]);
    }
    //Reiniciar el Form

    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");

  }  


  //console.log(nombre);

  return (
    <div className="md:w-1/2 lg:w-2/5 m-5">
      <h2 className = "font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y <span className='text-indigo-600 font-bold'>Administralos</span></p>
      
      <form  onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 '>
      {error && <Error
      mensaje = "Todos Los Campos Son Obligatorios"
      />
     }

        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>

          <input id="mascota" type="text" placeholder='Nombre De La Mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
          value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        </div>


        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>

          <input id="propietario" type="text" placeholder='Nombre Del Propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           value={propietario} onChange={(e)=> setPropietario(e.target.value)}/>
        </div>


        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>

          <input id="email" type="email" placeholder='Email de Contacto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
          value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>

          <input id="alta" type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={alta} onChange={(e)=> setAlta(e.target.value)}/>
        </div>
        
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Síntomas</label>
          <textarea  name="" id="sintomas" placeholder='Describe Los Sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={sintomas} onChange={(e)=> setSintomas(e.target.value)}
          />
           </div>

           <input type="submit" 
           value={paciente.id?'Editar Paciente':'Agregar Paciente'} 
           className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor:pointer transition-all'/>
      </form>
      </div>
  )
}

export default Formulario