// src/components/SongCard.jsx
// Tarjeta simple y reutilizable para mostrar una canción.

export const SongCard = ({ img, title, artist, likeSong, deleteSong, isLiked }) => {
  return (
    <article style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8, display: 'grid', gap: 8, maxWidth: 260 }}>
      <img src={img} alt={title} style={{ width: 100, height: 100, objectFit: 'cover' }} />
      <h4 style={{ margin: 0 }}>{title}</h4>
      <p style={{ margin: 0, opacity: 0.8 }}>{artist}</p>
      {isLiked ? (
        <button onClick={deleteSong}>Delete</button>
      ) : (
        <button onClick={likeSong}>Like</button>
      )}
    </article>
  )
}
