import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setNombreMascota(paciente.nombreMascota);
      setPropietario(paciente.propietario);
      setCorreo(paciente.correo);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => {
    const numeroAlea = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return numeroAlea+fecha;
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      if( [nombreMascota, propietario, correo, fechaAlta, sintomas].includes('') ){
        setError(true);
      }else{
        const objPac = {nombreMascota, propietario, correo, fechaAlta, sintomas};

        if(paciente.id){
          objPac.id = paciente.id;
          console.log(objPac);
          const nuevaListaPacientes = pacientes.map(pacienteLista => pacienteLista.id === paciente.id ? objPac : pacienteLista);
          setPacientes(nuevaListaPacientes);
          setPaciente({});
        }else{
          objPac.id = generarId();
          setPacientes( [...pacientes, objPac] );
        }

        setError(false);
        setNombreMascota('');
        setPropietario('');
        setCorreo('');
        setFechaAlta('')
        setSintomas('');
        setError('');
      }
  }

  return (
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center">
          Añade pacientes y {''}
          <span className="text-indigo-600 font-bold ">
            administralos
          </span>
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl py-5 px-5 mt-5 mx-5">
          {error &&  <Error mensaje='Todos los campos son obligatorios'/>}
          <div>
            <label htmlFor="mascota" className="text-gray-700 uppercase font-bold block mt-5">Nombre Mascota</label>
            <input value={nombreMascota} onChange={(e)=>setNombreMascota(e.target.value)} type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" id="mascota" />
          </div>
          <div className="mt-5">
            <label htmlFor="propietario" className="text-gray-700 uppercase font-bold block">Nombre propietario</label>
            <input value={propietario} onChange={(e)=>setPropietario(e.target.value)} type="text" placeholder="Nombre propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" id="propietario" />
          </div>
          <div className="mt-5">
            <label htmlFor="correo" className="text-gray-700 uppercase font-bold block">Correo electronico</label>
            <input value={correo} onChange={(e)=>setCorreo(e.target.value)} type="email" placeholder="Correo propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" id="correo" />
          </div>
          <div className="mt-5">
            <label htmlFor="alta" className="text-gray-700 uppercase font-bold block">Alta</label>
            <input value={fechaAlta} onChange={(e)=>setFechaAlta(e.target.value)} type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" id="alta" />
          </div>
          <div className="mt-5">
            <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold block">Sintomas</label>
            <textarea value={sintomas} onChange={(e)=>setSintomas(e.target.value)} id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg" placeholder="Describe los sintomas" ></textarea>
          </div>
          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all mt-5 rounded-xl" value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}/>
        </form>
      </div>

  )
}

export default Form