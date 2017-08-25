import React from 'react';
import styled from "styled-components";
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { css } from './index.css';
import { Map } from './../index.jsx';
var phone;
var address;

const Detail = styled.div`
  font-family: Nunito;
  height: 100px;
  color: #000;
  background-color: #43e895;
  position: relative;
  bottom: 30px;
`;
const MapWrapper = styled.div`
 height: 300px;
`;

class DetailCard extends React.Component {
  constructor(props) {
    super(props);
  };
  formatAddress(addressArray,phone) {

    return (
      <div className="detail-address">
        <Row>
          <Col md={12}>{addressArray.address}</Col>
        </Row>
        <Row>
          <Col md={12}><p>{addressArray.city}, {addressArray.state} {addressArray.postalCode}</p></Col>
        </Row>
        <Row>
          <Col md={12}>{phone}</Col>
        </Row>
      </div >

    );
  }
  render() {
    const { name, category} = this.props.details;
  var addressArray = this.props.details.location ? this.props.details.location : '';
      address = this.props.details.location ? this.props.details.location.address : '';
      phone = this.props.details.contact ? this.props.details.contact.formattedPhone : ' ' ;

    return (
      <Col lg={8}>
        <Row>
          <Map location={this.props.details.location}/>
        </Row>
        <Row>
          <Detail>
            <Row>
              <Col md={12}>
                <h1  className="detail-name">{name}</h1>
              </Col>
            </Row>
              <Row>
              <Col md={12}>
                <h5 className="detail-cat">{category}</h5>
              </Col>
            </Row>
          </Detail>
        </Row>
        <Row>
            {this.formatAddress(addressArray,phone)}
        </Row>
      </Col>
    )
  }
};

export default DetailCard;
