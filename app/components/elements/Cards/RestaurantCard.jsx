import React from 'react';
import styled from "styled-components";
import { string } from "prop-types";
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import DetailCard  from "./DetailCard.jsx";

const RestCard = styled.div`
  font-family: Nunito;
  color: #fff;
  height: 180px;
  border: 1px solid;
  background: url(${state => state.bImage}) center / cover no-repeat;
`;

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    this.setState({
      detailInfo: this.props.place
    })
  }

  displayCard() {
    const { name, backgroundImageURL, category } = this.props.place;
    return (
      <Col className='clear-pad' lg={4}>
        <RestCard className="overlay grey" bImage={backgroundImageURL} >
          <Row>
            <h1 className="name" value={name}>{name}</h1>
          </Row>
          <Row>
            <h5 className="category">{category}</h5>
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
