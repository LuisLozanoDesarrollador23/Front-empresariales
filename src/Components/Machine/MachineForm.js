import React, { useEffect, useState } from 'react'


function MachineForm(props) {
    const {getMachine,setMachine,onSave} = props;
    const[thisMachine,SetThisMachine] = useState({
        _id:null,
        name:"",
        serial:"",
        price:"",
        stock:"",
        status:"",
        characteristics:""
    })

    const limpiar = () =>{
        SetThisMachine({
        _id:null,
        name:"",
        serial:"",
        price:"",
        stock:"",
        status:"",
        characteristics:""
        })  
    }

    useEffect(() => {
        if (setMachine){
            SetThisMachine(setMachine);
        }
    })

    if (thisMachine === null){
        limpiar();
    }

    const handleChange = (e) => {
        SetThisMachine({
            ...thisMachine,[e.target.name]:e.target.value
        });
            getMachine(thisMachine);
    };

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(thisMachine);
        limpiar();
    };
 
  return (
    <div>
      <div className='Login-contener'>
        <h1>Registro de Maquinas</h1>
        <input className='Input' placeholder='Nombre' value={thisMachine.name} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input' placeholder='Serial' value={thisMachine.serial} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input' placeholder='Precio' value={thisMachine.price} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input' placeholder='Stock' value={thisMachine.stock} onChange={(e) => {handleChange(e)}}></input>
        <input className='Input' placeholder='Caracteristicas' value={thisMachine.characteristics} onChange={(e) => {handleChange(e)}}></input>
        <button onClick={onClickGuardar}>Registrar</button>
      </div>
    </div>
  )
}

export default MachineForm;
