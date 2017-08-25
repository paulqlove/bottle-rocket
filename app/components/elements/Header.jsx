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
// class ButtonBack extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.goHome = this.goHome.bind(this);
//     this.state = {
//       show: this.props.showBackBtn
//     }
//   }
//   render() {
//     return (
//       <div>
//          <BackButton />
//        </div>
//     )
//   }
// }

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.state = {
      show: this.props.showBackBtn
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      show: !this.state.show
    })
  }
  goHome(props){
    this.props.backButton(false);
    this.setState({
      show: true
    })
  }
  render(props) {
    const backBtn = this.state.show;
    return (
      <Wrapper>
        <Row>
          <Col lg={1} onClick={(e) => this.goHome()}>{backBtn ? <ButtonBack/> : ''} </Col>
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
// connect(mapStateToProps,)
export default connect(mapStateToProps, mapDispatchToProps)(Header);
