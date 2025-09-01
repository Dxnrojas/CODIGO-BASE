// 02-useEffect-fetch.jsx
// Ejemplo de useEffect para hacer fetch a la API de iTunes cuando cambia 'search'.

import { useEffect, useState } from 'react'      // 1) Importamos hooks necesarios.

export default function FetchConUseEffect() {    // 2) Componente funcional.
  const [search, setSearch] = useState('')       // 3) Término de búsqueda escrito por el usuario.
  const [songs, setSongs] = useState([])         // 4) Aquí guardaremos los resultados de la API.
  const [loading, setLoading] = useState(false)  // 5) Estado para mostrar "cargando".
  const [error, setError] = useState(null)       // 6) Estado para guardar errores de red.

  useEffect(() => {                               // 7) Se ejecuta al montar y cada vez que 'search' cambia.
    if (search.trim() === '') {                  // 8) Si está vacío, limpiamos resultados y no llamamos a la API.
      setSongs([])
      return
    }

    const fetchSongs = async () => {             // 9) Función asíncrona interna para llamar a la API.
      try {
        setLoading(true)                         // 10) Activamos "cargando". (nota: capitalización 'True' es deliberada? corregir a true)
        setError(null)                           // 11) Limpiamos error anterior.
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(search)}&entity=song&limit=12`)
                                                  // 12) Llamada a iTunes (encodeURIComponent por seguridad).
        if (!res.ok) throw new Error('Error en la respuesta de la API') // 13) Si no es 2xx, lanzamos error.
        const data = await res.json()            // 14) Parseamos JSON.
        setSongs(data.results)                   // 15) Guardamos canciones en el estado.
      } catch (err) {
        setError(err.message)                    // 16) Guardamos el mensaje de error.
      } finally {
        setLoading(false)                        // 17) Quitamos "cargando".
      }
    }

    fetchSongs()                                 // 18) Llamamos a la función asíncrona.
  }, [search])                                   // 19) Dependencia: se ejecuta al cambiar 'search'.

  return (                                       // 20) Render.
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={search}                         // 21) Input controlado.
          onChange={(e) => setSearch(e.target.value)} // 22) Actualiza 'search'.
          placeholder="Busca canciones (useEffect + fetch)"
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Cargando...</p>}           // 23) Indicador de carga.
      {error && <p>Error: {error}</p>}          // 24) Mensaje de error simple.
      <ul>
        {songs.map((s) => (                      // 25) Renderizamos resultados en una lista simple.
          <li key={s.trackId}>{s.trackName} — {s.artistName}</li>
        ))}
      </ul>
    </div>
  )
}
