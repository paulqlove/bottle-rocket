import React from 'react';
import {Component} from 'react';
import MapGl, { Marker } from 'react-map-gl';
import { css } from './index.css';

export default class Map extends Component {
  constructor(props) {
    super(props);
    console.log("this document", window.innerWidth)
    this.state = {
      viewport: {
        latitude: this.props.location.lat,
        longitude: this.props.location.lng,
        zoom: 12
      }
    }
  }
  componentWilllUpdate(props){
    console.log('get map prop', this.props.location.lat, this.props.location.lng);
    // this.setState = {
    //   viewport: {
    //     latitude: this.props.location.lat,
    //     longitude: this.props.location.lng,
    //     zoom: 12
    //   }
    // }
  }
  componentWillReceiveProps(nextProps) {
    console.log('UPDATD PROPS', nextProps)
    this.setState({
      viewport: {
        latitude: nextProps.location.lat,
        longitude: nextProps.location.lng,
        zoom: 12
      }
    })
  }
  render() {
    return (
      <MapGl
        className="mapContainer"
        width={window.innerWidth}
        height={300}
        {...this.state.viewport}
        mapboxApiAccessToken="pk.eyJ1IjoicGF1bHFsb3ZlIiwiYSI6ImIyODQ4MTAxZjZlM2MzY2Y5NGMxOGNhN2QzZGJhYTRjIn0.ZhX-f3kdTGV9ndGGKaDyqQ"
        onViewportChange={(...viewport) => {
          const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      >
      <Marker latitude={this.props.location.lat} longitude={this.props.location.lng}>
          <div className="icon"></div>
      </Marker>
    </MapGl>
    );
  }
}
