import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayersList from './PlayersList.jsx'

const App = () => {
  const appStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7ff 0%, #fdf5f0 100%)',
  }

  const headerStyle = {
    paddingTop: '28px',
    textAlign: 'center',
    fontWeight: 800,
    fontSize: '2rem',
    color: '#1f2a44',
    letterSpacing: '0.4px',
  }

  const subStyle = {
    marginTop: '6px',
    textAlign: 'center',
    color: '#5f6b7a',
  }

  return (
    <div style={appStyle}>
      <div>
        <div style={headerStyle}>Football Players</div>
        <div style={subStyle}>Cartes modernes et responsives avec React-Bootstrap</div>
      </div>
      <PlayersList />
    </div>
  )
}

export default App
