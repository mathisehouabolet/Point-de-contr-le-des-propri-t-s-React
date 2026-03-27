import React from 'react'
import Card from 'react-bootstrap/Card'

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  const cardStyle = {
    width: '18rem',
    margin: '12px',
    border: 'none',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  }

  const imageStyle = {
    height: '220px',
    objectFit: 'cover',
  }

  const bodyStyle = {
    padding: '18px 16px 20px',
  }

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 700,
    letterSpacing: '0.2px',
    marginBottom: '10px',
  }

  const textStyle = {
    margin: '4px 0',
    color: '#3e3e3e',
  }

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} style={imageStyle} />
      <Card.Body style={bodyStyle}>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}>Equipe : {team}</Card.Text>
        <Card.Text style={textStyle}>Nationalite : {nationality}</Card.Text>
        <Card.Text style={textStyle}>Numero : {jerseyNumber}</Card.Text>
        <Card.Text style={textStyle}>Age : {age}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Player.defaultProps = {
  name: 'Joueur inconnu',
  team: 'Equipe inconnue',
  nationality: 'Nationalite inconnue',
  jerseyNumber: 0,
  age: 0,
  image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
}

export default Player
