// src/components/SongList.jsx
// Lista que reutiliza SongCard. Usa props sencillas para modo Resultados o Favoritas.

import { SongCard } from './SongCard'

export const SongList = ({ songs = [], onLike, onDelete, isLikedList = false }) => {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
      {songs.map((song) => (
        <SongCard
          key={song.trackId}
          img={song.artworkUrl100}
          title={song.trackName}
          artist={song.artistName}
          likeSong={!isLikedList ? (() => onLike && onLike(song)) : undefined}
          deleteSong={isLikedList ? (() => onDelete && onDelete(song)) : undefined}
          isLiked={isLikedList}
        />
      ))}
    </section>
  )
}
