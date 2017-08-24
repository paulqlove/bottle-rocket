import React from 'react';
import styled from "styled-components";
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { connect } from 'react-redux';
import { showBackBtn } from '../././actions/index.jsx';

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
const ButtonBack = () => {
  return (
    <div>
       <BackButton />
     </div>
  )
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.goHome = this.goHome.bind(this);
    this.state = {
      show: this.props.backButton
    }
  }

  componentWillReceiveProps(props) {
    console.log('KADJDFLKJALDSKFJLAKSDJFLKJASDLF', this.state.show, this.props)
    this.setState({
      show: !this.state.show
    })
  }
  goHome(props){
    console.log("toggle state and hide map", this.props);
    this.setState({
      show: !this.state.show
    })
  }
  render(props) {
    const backBtn = this.state.show;
    return (
      <Wrapper>
        <Row>
          <Col lg={1} onClick={(e) => this.goHome(props)}>{backBtn ? <ButtonBack/> : ''} </Col>
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

const mapStateToProps = (state) => {
    return {
        showBackBtn: state.show,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        backButton: (bool) => dispatch(showBackBtn(bool))
    };
};
export default connect(mapStateToProps, mapStateToProps)(Header);
