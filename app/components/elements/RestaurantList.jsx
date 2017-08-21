import React from 'react';
import RestaurantCard from './Cards/RestaurantCard.jsx';
import { string } from 'prop-types';
import DetailCard  from "./Cards/DetailCard.jsx";

let p;
let pName;
let contact;
let pLocal;
let category;
let pImage;

class RestaurantList extends React.Component {
  constructor(props) {
      super(props);
      this.doSomething = this.doSomething.bind(this);
      this.state = {
        name: name,
        contact: {},
        location: {},
        detailInfo: {},
        show: false
      };
  }

  restCards(props, doSomething) {
    return ( this.props.places.map((place,i) => {
      return (
        <div key={i + 'f'} onClick={(e) => this.doSomething(place, e)} >
          <RestaurantCard {...this.props} key={i} i={i} place={place} />
        </div>
      )
    }))
  }

  doSomething(place) {
    this.setState({
      detailInfo: place,
      show: true
    })
  }
  render() {
    return (
      <div>
        {this.state.show ? <DetailCard  details={this.state.detailInfo}/> : '' }
        { this.restCards() }
      </div>
    )
  }
};

export default RestaurantList;
