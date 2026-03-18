import Card from 'react-bootstrap/Card'

export default function Player({
  name = 'Joueur inconnu',
  team = 'Équipe inconnue',
  nationality = 'Nationalité inconnue',
  jerseyNumber = 0,
  age = 0,
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
}) {
  const cardStyle = {
    width: '18rem',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
    borderRadius: '14px',
    overflow: 'hidden',
    margin: '12px',
  }

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '6px',
  }

  const textStyle = {
    margin: 0,
    color: '#3d3d3d',
  }

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}>Équipe : {team}</Card.Text>
        <Card.Text style={textStyle}>Nationalité : {nationality}</Card.Text>
        <Card.Text style={textStyle}>Numéro : {jerseyNumber}</Card.Text>
        <Card.Text style={textStyle}>Âge : {age}</Card.Text>
      </Card.Body>
    </Card>
  )
}
