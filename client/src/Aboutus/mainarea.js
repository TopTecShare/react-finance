import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './peoplescard';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "Project 3 ",
          company: "A React powered stock market tracker",
          description: "https://github.com/jamescbaldwin/react-finance"
        },
        {
          id: 2,
          name: "Aro Parada",
          company: "Raleigh, NC",
          description: "https://github.com/AroParada"
        },
        {
          id: 3,
          name: "Casey Overton",
          company: "Raleigh, NC",
          description: "https://github.com/CaseyOverton"
        },
        {
          id: 4,
          name: "Christopher Derteano",
          company: "Raleigh, NC",
          description: "https://github.com/cadertea"
        },
        {
          id: 5,
          name: "James Baldwin",
          company: "Raleigh, NC",
          description: "https://github.com/jamescbaldwin"
        },
        {
          id: 6,
          name: "Nihal Williams",
          company: "Raleigh, NC",
          description: "https://github.com/nihalwill"
        }
        
      ]
    }
  }

  
  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="5">
          <PeopleCard key={person.id}  person={person} />
        </Col>
      )
    })
    return (
      <Container fluid inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default MainArea;