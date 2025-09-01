// 05-formularios-basicos.jsx
// Formulario controlado: prevenir submit por defecto y leer valores del input.

import { useState } from 'react'

export default function FormulariosBasicos() {
  const [email, setEmail] = useState('')          // 1) Estado controlado para email.
  const [msg, setMsg] = useState('')              // 2) Mensaje de feedback simple.

  const handleSubmit = (e) => {                   // 3) Manejador de envío del formulario.
    e.preventDefault()                            // 4) Evita que recargue la página.
    if (!email.includes('@')) {                   // 5) Validación básica de ejemplo.
      setMsg('Correo inválido')
      return
    }
    setMsg('¡Formulario enviado!')               // 6) Mensaje de éxito.
  }

  return (                                        // 7) Render.
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}                           // 8) Input controlado por 'email'.
          onChange={(e) => setEmail(e.target.value)} // 9) Actualizamos estado al escribir.
          placeholder="tu@email.com"
        />
      </label>
      <button type="submit">Enviar</button>       // 10) Dispara handleSubmit.
      {msg && <p>{msg}</p>}                       // 11) Mostramos feedback si existe.
    </form>
  )
}
