import React from 'react';
import styled from "styled-components";
import { string } from "prop-types";
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import DetailCard  from "./DetailCard.jsx";

const RestCard = styled.div`
  font-family: Nunito;
  color: #fff;
  height: 180px;
  border: 2px solid;
  background: url(${state => state.bImage}) center / cover no-repeat;
`;

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    const target  = event.target;
    this.setState({
      detailInfo: this.props.place
    })
  }

  displayCard() {
    const { name, backgroundImageURL, category } = this.props.place;
    return (
      <Col lg={4}>
        <RestCard bImage={backgroundImageURL} >
          <Row>
            <h1 value={name}>{name}</h1>
          </Row>
          <Row>
            <h5>{category}</h5>
          </Row>
        </RestCard>
      </Col>
    );
  }

  render() {
    return (
      <div>
        { this.displayCard() }
      </div>
    )
  }
};

RestaurantCard.propTypes = {
  pImage: string
}
export default RestaurantCard;
