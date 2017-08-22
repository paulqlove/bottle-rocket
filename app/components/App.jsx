import React from 'react';
import Header from './nav/Header.jsx';
import { bindActionCreators } from "redux";
import { RestaurantCard, RestaurantList, Map } from './elements/index.jsx';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/index.jsx';



class App extends React.Component {

  // constructor() {
  //   super();
  //     this.state = {
  //       show: false
  //   }
  // };

  componentDidMount() {
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
        <Header/>
        <RestaurantList data={this.props.items}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
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
