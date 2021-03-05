import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description } = this.props.person;
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          {/* <CardBlock> */}
            <CardTitle className="text-white" >{name}</CardTitle>
            <CardSubtitle className="text-muted">{company}</CardSubtitle>
            <CardText> <a href={description} target="_blank" rel="noopener noreferrer">Github</a></CardText>
          {/* </CardBlock> */}
        </Card>
      </div>
    )
  }
}

export default PeopleCard;