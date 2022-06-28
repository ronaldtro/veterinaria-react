
const paciente = ({elimPaciente, paciente, setPaciente}) => {
  const {nombreMascota, propietario, correo, fechaAlta, sintomas, id} = paciente;
  const handleEliminar = () => {
    confirm('Desea eliminar el paciente: ',nombreMascota,' ??') && elimPaciente(id);   
  }  

  return (
    <div className="bg-white shadow-xl rounded-xl my-5 mx-3 p-5">
      <p className="text-gray-700 font-bold uppercase">Mascota:<span className="font-normal normal-case">{nombreMascota}</span></p>
      <p className="text-gray-700 font-bold uppercase">Propietario:<span className="font-normal normal-case">{propietario}</span></p>
      <p className="text-gray-700 font-bold uppercase">Correo electronico:<span className="font-normal normal-case">{correo}</span></p>
      <p className="text-gray-700 font-bold uppercase">Fecha de Alta:<span className="font-normal normal-case">{fechaAlta}</span></p>
      <p className="text-gray-700 font-bold uppercase">Sintomas:<span className="font-normal normal-case">{sintomas}</span></p>
      <div className="flex justify-between mt-10">
        <button onClick={() => setPaciente(paciente)} type='button' className='px-10 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>
          Editar
        </button>
        <button onClick={handleEliminar} type='button' className='px-10 py-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
          Eliminar
        </button>
      </div>
    </div> 
  )
}

export default paciente