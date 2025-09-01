// 01-useState-input.jsx
// Demuestra cómo capturar el valor de un input con useState (componente controlado).

import { useState } from 'react'                 // 1) Importamos useState para manejar estado.

export default function InputEjemplo() {         // 2) Componente funcional.
  const [search, setSearch] = useState('')       // 3) Estado 'search' inicia vacío.

  const handleChange = (e) => {                  // 4) Manejador que captura el valor del input.
    setSearch(e.target.value)                    // 5) Actualiza 'search' con lo que escribe el usuario.
  }

  const handleSubmit = (e) => {                  // 6) Manejador del envío del formulario.
    e.preventDefault()                           // 7) Evita recargar la página.
    console.log('Buscando:', search)             // 8) Aquí podrías disparar una búsqueda real.
  }

  return (                                       // 9) Lo que se renderiza.
    <form onSubmit={handleSubmit}>               // 10) Formulario controlado por React.
      <input
        value={search}                           // 11) El valor del input viene del estado.
        onChange={handleChange}                  // 12) Cada cambio actualiza 'search'.
        placeholder="Busca algo..."
      />
      <button type="submit">Buscar</button>      // 13) Envía el formulario (ejecuta handleSubmit).
      <p>Escribiste: {search}</p>                // 14) Mostramos lo que hay en 'search'.
    </form>
  )
}
