import React from 'react';
import RestaurantCard from './Cards/RestaurantCard.jsx';
import { string } from 'prop-types';
import DetailCard  from "./Cards/DetailCard.jsx";
import { connect } from 'react-redux'

class RestaurantList extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.doSomething = this.doSomething.bind(this);
  //     this.restCards = this.restCards.bind(this);
  //     // this.state = {
  //     //   detailInfo: {},
  //     //   show: false
  //     // };
  // }

  restCards(props, doSomething) {
    // var places = Object.values(this.props.data);
   Object.values(this.props.data).map((p, i) => {
    //  <div key={i + 'f'} onClick={(e) => this.doSomething(place, e)}>
    //  </div>
      p.forEach((place) => {
          i++ ;
          console.log('ag', place)
          return (
             <RestaurantCard data={place} key={i} i={i} place={place}/>
          )
        })
      })
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
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};




export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
