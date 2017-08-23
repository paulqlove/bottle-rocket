import React from 'react';
import styled from "styled-components";
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';

const Wrapper = styled.header`
  background-color: #43e895;
  color: #fff;
  font-family: Nunito;
  font-size: large;
`;
const arrow = "public/assets/ic_webBack@2x.png";
const mapIcon = "public/assets/icon_map@2x.png";
const BackButton = styled.button`
    margin-top: 25px;
    color: #fff;
    border: none;
    background: url(${arrow}) center / cover no-repeat;
    cursor: pointer;
    display: inline-block;
    height: 50px;
    width: 50px;
`;
const MapButton = styled.button`
    margin-top: 25px;
    color: #fff;
    border: none;
    background: url(${mapIcon}) center / cover no-repeat;
    cursor: pointer;
    display: inline-block;
    height: 50px;
    width: 50px;
`;
class ButtonBack extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   show: false
    // }

  }
  componentWilllUpdate(){
    console.log("Back button ");
  }
  render() {

    // {(this.props.showDetail) ? <Col lg={1}><BackButton  /> </Col> : '' }
    return (
      <Wrapper>
        <Row>
            <Col lg={1}><BackButton show={true} /> </Col>
          <Col lg={10}>
            <header className="top">
              <h1>Lunch Tyme</h1>
            </header>
          </Col>
          <Col lg={1}><MapButton /> </Col>
        </Row>
      </Wrapper>
    )
  }
}
const Header = (props) => {
  console.log("props in head", props)

  return <ButtonBack/>
}
export default Header;
