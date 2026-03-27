import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Player from './Player.jsx'
import players from './players.js'

const PlayersList = () => {
  const containerStyle = {
    paddingTop: '28px',
    paddingBottom: '32px',
  }

  return (
    <Container style={containerStyle}>
      <Row className="g-4 justify-content-center">
        {players.map((player, index) => (
          <Col
            key={`${player.name}-${index}`}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PlayersList
