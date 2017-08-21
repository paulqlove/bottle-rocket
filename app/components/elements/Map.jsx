import React from 'react';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";



const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoicGF1bHFsb3ZlIiwiYSI6ImIyODQ4MTAxZjZlM2MzY2Y5NGMxOGNhN2QzZGJhYTRjIn0.ZhX-f3kdTGV9ndGGKaDyqQ"
});

<Map
  style="mapbox://styles/mapbox/traffic-day-v2"
  containerStyle={{
    height: "130px",
    width: "100vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</Map>

export default Map;
