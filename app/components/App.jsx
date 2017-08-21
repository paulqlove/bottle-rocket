import React from 'react';
import Header from './nav/Header.jsx';
import { RestaurantCard, RestaurantList, Map } from './elements/index.jsx';


class App extends React.Component {

  constructor() {
    super();
      this.state = {
        restaurants: []
    }
  };

  componentDidMount() {
      const url = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          // console.log('success!', data.restaurants);
           this.setState({
              restaurants: data.restaurants
            });
        })
        .catch(function(err) {
          console.log('there was an error' + err);
      });
    };

  render() {
    return (
     <div style={{textAlign: 'center'}}>
       <Header />
        <RestaurantList places={this.state.restaurants}/>
      </div>
    );
  }
}
export default App;
