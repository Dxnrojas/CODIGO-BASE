// 04-render-api-cards.jsx
// Renderizar resultados de una API en tarjetas (reutilizando SongCard/SongList).

import { useEffect, useState } from 'react'
import { SongList } from './components/SongList'  // 1) Lista que internamente usa SongCard.

export default function RenderizarApiEnTarjetas() {
  const [search, setSearch] = useState('shakira') // 2) Búsqueda inicial por defecto.
  const [songs, setSongs] = useState([])          // 3) Resultados.
  const [like, setLike] = useState([])            // 4) Favoritas.

  useEffect(() => {                               // 5) Traer canciones cuando cambie 'search'.
    const fetchSongs = async () => {
      const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(search)}&entity=song&limit=12`)
      const data = await res.json()
      setSongs(data.results)
    }
    fetchSongs()
  }, [search])

  const handleLike = (song) => {                  // 6) Agregar a favoritas si no existe ya.
    if (!like.some(s => s.trackId === song.trackId)) setLike([...like, song])
  }
  const handleDelete = (song) => {                // 7) Quitar de favoritas por id.
    setLike(like.filter(s => s.trackId !== song.trackId))
  }

  return (                                        // 8) Render de dos listas: resultados y favoritas.
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busca artista o canción..." />
        <button type="submit">Buscar</button>
      </form>

      <h2>Resultados</h2>
      <SongList songs={songs} onLike={handleLike} isLikedList={false} />

      <h2>Favoritas</h2>
      <SongList songs={like} onDelete={handleDelete} isLikedList={true} />
    </div>
  )
}
