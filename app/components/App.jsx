import React from 'react';
import Header from './nav/Header.jsx';
import { RestaurantCard, RestaurantList, Map } from './elements/index.jsx';


class App extends React.Component {

  constructor() {
    super();
      this.state = {
        restaurants: [],
        show: false
    }
  };

  componentDidMount() {
      const url = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
           this.setState({
              restaurants: data.restaurants
            });
        })
        .catch(function(err) {
          console.log('there was an error' + err);
      });
    };
    toggleDetail(props, changeShow) {
      return (
        <div onClick={(e) => this.changeShow(e)}>
          <Header showDetail={this.state.show}/>
        </div>
      )
    }
    changeShow() {
      this.setState({
        show: false
      })
    }
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        { this.toggleDetail() }
        <RestaurantList places={this.state.restaurants}/>
      </div>
    );
  }
}
export default App;
