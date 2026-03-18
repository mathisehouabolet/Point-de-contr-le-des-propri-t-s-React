import Player from './Player.js'
import players from './players.js'

export default function PlayersList() {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
  }

  return (
    <div style={listStyle}>
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  )
}
