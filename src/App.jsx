import Header from "./Components/Header";
import Form from "./Components/Form";
import ListadoPacientes from "./Components/ListadoPacientes";
import {useState, useEffect} from 'react';

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocal = () => {
      const obtener = JSON.parse(localStorage.getItem('Pacientes'));
      setPacientes(obtener);
    }
    obtenerLocal();
  }, [])

  useEffect(() => {
    localStorage.setItem('Pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const elimPaciente = (id) => {
    const refreshPacientes = pacientes.filter(objPac => objPac.id !== id);
    setPacientes(refreshPacientes);
  }

  return (
    <div className="container mx-auto mt-2">
      <Header />
      <div className="mt-10 md:flex">
        <Form pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes elimPaciente={elimPaciente} pacientes={pacientes} setPacientes={setPacientes} setPaciente={setPaciente}/>
      </div>

    </div>
  )
}

export default App
