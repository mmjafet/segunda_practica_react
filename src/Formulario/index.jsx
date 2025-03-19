import React from 'react'

const Formulario = () => {
  return (<>
    <form className='flex flex-column col-9'>
        <h1 className='text-center'>To - Do List</h1>
        <div className='input-group mb-3 col-12'>

            <label className='input-group-text'>Tarea</label>
            <input type="text" placeholder='Hacer Tarea' required className='form-control'/>
        </div>
        <div className='input-group'>
            
            <label htmlFor="Descripcion" className='input-group-text'></label>
            <input type="text" placeholder='Descripcion' className='form-control'/>
            <button className='btn btn-outline-success btn-lg'>Agregar</button>

        </div>
    </form>
    <div className='m-3 btn-group col-9'> 
        <div className="btn btn-outline-primary btn-lg">Todos</div>
        <div className="btn btn-outline-secondary btn-lg">Pendientes</div>
        <div className="btn btn-outline-warning btn-lg">Completados</div>
    </div>
  </>
  )
}

export default Formulario