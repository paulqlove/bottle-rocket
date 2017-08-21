import React from 'react';
import styled from "styled-components";
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { css } from './index.css';
import { Map } from './../index.jsx';
var phone;
var address;

const Detail = styled.div`
  font-family: Nunito;
  height: 180px;
  border: 2px solid;
  color: #000;
  background-color: #43e895;
`;
const MapWrapper = styled.div`
 height: 300px;
`;
class DetailCard extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    const { name } = this.props.details;
    address = this.props.details.location ? this.props.details.location.formattedAddress : '';
    phone = this.props.details.contact ? this.props.details.contact.formattedPhone : ' ' ;

    return (
      <Col lg={8}>
        <MapWrapper>
          <Map />
        </MapWrapper>
        <Row>
          <Detail>
            <p>{name}</p>
          </Detail>
        </Row>
        <Row>
          <h3>{address}</h3>
          <h5>{phone}</h5>
        </Row>
      </Col>
    )
  }
};

export default DetailCard;
