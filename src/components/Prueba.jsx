import React from 'react'

function Prueba() {

    const usuarios = [
    { id: 1,
     nombre: "Alice",
     edad: 25
    },
    { id: 2,
     nombre: "Bob",
     edad: 30 
    },
    { id: 3,
     nombre: "Charlie",
      edad: 22 
    },
  ];
  return (
    <div>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>Nombre:</strong> {usuario.nombre} <br />
            <strong>Edad:</strong> {usuario.edad}
               <strong>Id:</strong> {usuario.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Prueba
