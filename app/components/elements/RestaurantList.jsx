import React from 'react';
import RestaurantCard  from './Cards/RestaurantCard.jsx';
import { string } from 'prop-types';
import DetailCard  from "./Cards/DetailCard.jsx";
import { connect } from 'react-redux'



class RestaurantList extends React.Component {
  constructor(props) {
      super(props);

  }

  restCards(props) {
    let place;
    if(this.props.places) {
       var places = this.props.places;
    return  places.forEach((place, i) => {
        let pa = <RestaurantCard data={place} key={i} i={i} place={place}/>;
        console.log('ak', pa);
      return pa;
      })
    }
  }
  // doSomething(place) {
  //   console.log('g', this.state.show)
  //   this.setState({
  //     detailInfo: place,
  //     show: true
  //   })
  // }
  render() {
    // <DetailCard details={this.state}/>

    // var maybe = this.restCards(props);
    console.log('dafdadfasdf', this)
    // {this.state.show ? <DetailCard show={this.state} details={this.state}/> : '' }
    return (
      <div>
        { this.restCards() }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    return {

        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};




export default connect(mapStateToProps)(RestaurantList);
