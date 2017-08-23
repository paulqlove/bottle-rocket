import React from 'react';
import RestaurantCard  from './Cards/RestaurantCard.jsx';
import { string } from 'prop-types';
import DetailCard  from "./Cards/DetailCard.jsx";
import { connect } from 'react-redux'



class RestaurantList extends React.Component {
  constructor(props) {
      super(props);
      // this.state = {
      //   places: props.places
      // }
      // this.restCards = this.restCards.bind(this);
  }
  //
  // restCards(props) {
  //   let place;
  //   if(this.props.places) {
  //      var places = this.props.places;
  //   return  places.forEach((place, i) => {
  //       let pa = <RestaurantCard data={place} key={i} i={i} place={place}/>;
  //       console.log('ak', pa);
  //     return pa;
  //     })
  //   }
  // }
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
    const places = this.props.places;
    // {this.state.show ? <DetailCard show={this.state} details={this.state}/> : '' }

    // { this.restCards() }
    return (
      <div>
        { places ? places.map((place,i) => <RestaurantCard data={place} key={i} i={i} place={place}/>) : <p>loading</p>}
      </div>
    )
  }
};

// const mapStateToProps = (state) => {
//     return {
//
//         hasErrored: state.itemsHasErrored,
//         isLoading: state.itemsIsLoading
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//     };
// };




// export default connect(mapStateToProps)(RestaurantList);
export default RestaurantList;
