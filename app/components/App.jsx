import React from 'react';
import { bindActionCreators } from "redux";
import { RestaurantCard, RestaurantList, Map, Header } from './elements/index.jsx';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/index.jsx';



class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        show: this.props.show,
        places: this.props.places
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
    changeShow() {

      // this.setState({
      //   show: false
      // })
    }
  render() {
    // console.log('app js', this.props);
    // { this.toggleDetail() }
    return (
     <div style={{textAlign: 'center'}}>
        <Header showBackBtn={this.props.show}/>
          <RestaurantList showBackBtn={this.props.show} places={this.props.places} onChange={(e) => this.changeShow()}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {


    return {
        show: state.showBackBtn,
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
