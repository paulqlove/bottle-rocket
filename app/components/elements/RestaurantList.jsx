import React from 'react';
import RestaurantCard  from './Cards/RestaurantCard.jsx';
import { string } from 'prop-types';
import DetailCard  from "./Cards/DetailCard.jsx";
import { connect } from 'react-redux'
import { showBackBtn } from '.././actions/index.jsx';

class RestaurantList extends React.Component {
  constructor(props) {
      super(props);
      this.doSomething = this.doSomething.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        detailInfo: {},
        show: this.props.showBackBtn
      }
  }

  doSomething(place) {
    // https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really/40309023#40309023
    //need to make a copy of the state and then set the state with the copy of the state
this.props.backButton(true);
    this.setState({
      detailInfo: place,
      show: true
    })
  }
  handleChange() {
    if(!this.props.showBackBtn){

    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.showBackBtn !== this.props.showBackBtn && (!nextProps.showBackBtn)){
      this.setState({
        show: !this.props.showBackBtn
      })
    }
  }
  render(props) {
    const places = this.props.places;
    return (
      <div>
        {this.state.show ? <DetailCard show={this.state.show} details={this.state.detailInfo} onChange={this.handleChange()}/> : '' }
        { places ? places.map((place,i) =>
          <div key={i}  onClick={(e) => this.doSomething(place)}>
            <RestaurantCard data={place} key={i} i={i} place={place}/>
          </div>)
           : <p>loading</p>
        }
      </div>
    )
  }
};
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
export default connect(mapDispatchToProps, mapDispatchToProps)(RestaurantList);
// export default RestaurantList;
