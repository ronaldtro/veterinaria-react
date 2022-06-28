import Paciente from './Paciente'

const ListadoPacientes = ({elimPaciente, pacientes, setPacientes, setPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {
        
        pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="text-lg text-center mt-5">Administra tus <span className="text-indigo-600 font-bold"> pacientes y citas</span></p>
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-lg text-center mt-5">Tus pacientes agregados<span className="text-indigo-600 font-bold"> apareceran en este lugar</span></p>          
          </>
        )
      }
        
      {
        pacientes.map(paciente => {
          return(<Paciente key={paciente.id} elimPaciente={elimPaciente} pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />)
        })
      }

    </div>
  )
}

export default ListadoPacientes