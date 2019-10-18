import React, { useState, useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import { countries } from './data/Countries';


// import './Home.css';

export function Home() {
  const [data, setData] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Country ${data}`)
  }

  useEffect(() => {

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#74B266");

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];

    polygonSeries.data = countries;
    
    // Bind "fill" property to "fill" key in data
    polygonTemplate.propertyFields.fill = "fill";
  });

  return (
    <div>
      <div id="chartdiv" style={{ width: "100%", height: "750px" }}></div>
      <form onSubmit={handleSubmit}>
        <label>
          Add Visited Country:
          <input type="text" value={data} onChange={e => setData(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

////////

// class Home extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   } Î

//   handleSubmit(event) {
//     this.polygonSeries.data = [{
//       "id": "US",
//       "name": "United States",
//       "value": 100,
//       "fill": am4core.color("#F05C5C")
//     }, {
//       "id": "FR",
//       "name": "France",
//       "value": 50,
//       "fill": am4core.color("#5C5CFF")
//     }];
//     this.polygonTemplate.propertyFields.fill = "fill";
//     alert('A name was submitted: ' + this.state.value);
//     // this.polygonSeries.data = countries; //trying to add colored countries
//     // this.polygonTemplate.propertyFields.fill = "fill";
//     // event.preventDefault();
//   }

//   componentDidMount() {
//     // Create map instance
//     var chart = am4core.create("chartdiv", am4maps.MapChart);

//     // Set map definition
//     chart.geodata = am4geodata_worldLow;

//     // Set projection
//     chart.projection = new am4maps.projections.Miller();

//     // Create map polygon series
//     var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//     // Make map load polygon (like country names) data from GeoJSON
//     polygonSeries.useGeodata = true;

//     // Configure series
//     var polygonTemplate = polygonSeries.mapPolygons.template;
//     polygonTemplate.tooltipText = "{name}";
//     polygonTemplate.fill = am4core.color("#74B266");

//     // Create hover state and set alternative fill color
//     var hs = polygonTemplate.states.create("hover");
//     hs.properties.fill = am4core.color("#367B25");

//     // Remove Antarctica
//     polygonSeries.exclude = ["AQ"];
//   }

//   componentWillUnmount() {
//     if (this.chart) {
//       this.chart.dispose();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div id="chartdiv" style={{ width: "100%", height: "750px" }}></div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Add Visited Country:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }

export default Home;