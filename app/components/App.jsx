import React from 'react';
import Header from './nav/Header.jsx';
import { bindActionCreators } from "redux";
import { RestaurantCard, RestaurantList, Map } from './elements/index.jsx';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/index.jsx';



class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        show: this.props.showBackBtn
    }
  };

  componentWillMount() {
      const url = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';
      this.props.fetchData(url)
    };
    // toggleDetail(props, changeShow) {
    //   // <div onClick={(e) => this.changeShow(e)}>
    //   // </div>
    //   return (
    //       <Header/>
    //   )
    // }
    // changeShow() {
    //   this.setState({
    //     show: false
    //   })
    // }
  render() {
    // console.log('app js', this.props);
    // { this.toggleDetail() }
    return (
     <div style={{textAlign: 'center'}}>
        <Header backButton={this.props.showBackBtn}/>
          <RestaurantList backButton={this.props.showBackBtn} places={this.props.places}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        showBackBtn: state.showBackBtn,
        places: state.items.restaurants,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};




export default connect(mapStateToProps, mapDispatchToProps)(App);
