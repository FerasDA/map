import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";


import { countries } from './data/Countries';


// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

class CountriesVisited extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: '' };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // } Î

  // handleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.value);
  //   this.polygonSeries.data = countries; //trying to add colored countries
  //   this.polygonTemplate.propertyFields.fill = "fill";
  //   event.preventDefault();
  // }

  componentDidMount() {
    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    // Set initial zoom
    chart.homeZoomLevel = 1;

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.mapPolygons.template.strokeWidth = 0.5;

    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;

    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = chart.colors.getIndex(6);

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(3);

    // Create active state
    var activeState = polygonTemplate.states.create("active");
    activeState.properties.fill = chart.colors.getIndex(4);

    // Create an event to toggle "active" state
    polygonTemplate.events.on("hit", function (ev) {
      ev.target.isActive = !ev.target.isActive;
    })

    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <div id="chartdiv" style={{ width: "100%", height: "750px" }}></div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
    )
  }

}

export default CountriesVisited;