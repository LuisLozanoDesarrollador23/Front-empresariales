import React, { useEffect, useState } from 'react'
import { GetListMachine, DeleteMachine, AddMachine, UpdateMachine } from '../../ClientApi/MachineApi';
import TableMachine from './TableMachine';
import MachineForm from './MachineForm';

function Machine() {

  const [machines, setmachines] = useState([]);
  const [machine, setMachine] = useState(null);
  const [viewList, setViewList] = useState(true);

  const Listar = () => {
    GetListMachine().then((data) => {
      setmachines(data)
      console.log(data)
    }).catch((err) => { console.log(err) })
  }

  if (machines.length === 0)
    Listar();

  const verLista = (e) => {
    if (viewList) {
      setViewList(false);
    } else {
      setViewList(true);
      setMachine({
        _id: null,
        name: "",
        serial: "",
        price: "",
        stock: "",
        status: true,
        characteristics: ""
      })
    }
  }

  const guardar = (machine) => {
    if (machine._id === null) {
      AddMachine(machine).then((data) => { Listar() }).catch((err) => { console.log(err) })
    } else {
      UpdateMachine(machine).then((data) => { Listar() }).catch((err) => { console.log(err) })
    }
    setViewList(true);
  }

  const eliminar = (id) => {
    DeleteMachine(id).then((data) => {
      if (data.deletedCount === 1)
        Listar();
    }).catch((err) => { console.log(err) })
  }

  const ver = (machine) => {
    setMachine(machine);
    setViewList(false);
  }

  return (
    <div>
      {!viewList && <button className='btn btn-secondary' onClick={verLista}>Ver Lista</button>}
      {viewList && <button className='btn btn-secondary' onClick={verLista}>Crear nuevo registro</button>}
      {!viewList && <MachineForm onSave={guardar} setMachine={machine}></MachineForm>}
      {viewList && <TableMachine Machines={machines} onDelete={eliminar} onView={ver} />}
    </div>
  )
}

export default Machine;