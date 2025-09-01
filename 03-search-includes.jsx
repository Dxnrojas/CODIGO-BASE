// 03-search-includes.jsx
// Barra de búsqueda con 'includes' para filtrar en memoria (sin volver a llamar a la API).

import { useMemo, useState } from 'react'        // 1) useMemo es opcional, para evitar cálculos innecesarios.

const MOCK = [                                   // 2) Lista de ejemplo (podrían ser canciones ya cargadas).
  { id: 1, name: 'Hips Don’t Lie' },
  { id: 2, name: 'La Bicicleta' },
  { id: 3, name: 'Waka Waka' },
  { id: 4, name: 'Antología' },
]

export default function FiltroIncludes() {       // 3) Componente funcional.
  const [q, setQ] = useState('')                 // 4) Texto de búsqueda local.

  const filtered = useMemo(() => {               // 5) Calculamos la lista filtrada cuando cambia 'q'.
    const term = q.toLowerCase().trim()          // 6) Pasamos a minúsculas para búsqueda case-insensitive.
    if (term === '') return MOCK                 // 7) Si está vacío, devolvemos todo.
    return MOCK.filter(item =>                   // 8) Filtramos por 'includes'.
      item.name.toLowerCase().includes(term)
    )
  }, [q])

  return (                                       // 9) Render.
    <div>
      <input
        value={q}                                // 10) Input controlado con 'q'.
        onChange={(e) => setQ(e.target.value)}   // 11) Actualiza 'q' en cada tecleo.
        placeholder="Filtra con includes..."
      />
      <ul>
        {filtered.map((item) => (                // 12) Mostramos la lista filtrada.
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
