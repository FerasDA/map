import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4geodata_worldUltra from "@amcharts/amcharts4-geodata/worldUltra";

import { cities } from './data/Cities.ts';
import { lines } from './data/Cities';
import { countries } from './data/Countries';

am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

class Flights extends Component {
  componentDidMount() {

    // Define marker path
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    var interfaceColors = new am4core.InterfaceColorSet();

    // Set map definition
    chart.geodata = am4geodata_worldUltra;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    // Set initial zoom
    chart.homeZoomLevel = 3;
    chart.homeGeoPoint = {
      latitude: 45,
      longitude: -35
    };

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.mapPolygons.template.nonScalingStroke = true;

    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    // polygonTemplate.fill = am4core.color("#74B266"); //all map fill

    polygonSeries.data = countries;

    polygonTemplate.propertyFields.fill = "fill";


    // Add images
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    var imageTemplate = imageSeries.mapImages.template;
    imageTemplate.tooltipText = "{title}";
    imageTemplate.nonScaling = true;

    var marker = imageTemplate.createChild(am4core.Sprite);
    marker.path = targetSVG;
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.scale = 0.7;
    marker.fill = interfaceColors.getFor("alternativeBackground");

    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageSeries.data = cities;

    // Add lines
    var lineSeries = chart.series.push(new am4maps.MapLineSeries());
    lineSeries.dataFields.multiGeoLine = "multiGeoLine";

    var lineTemplate = lineSeries.mapLines.template;
    lineTemplate.nonScalingStroke = true;
    lineTemplate.arrow.nonScaling = true;
    lineTemplate.arrow.width = 4;
    lineTemplate.arrow.height = 6;
    lineTemplate.stroke = interfaceColors.getFor("alternativeBackground");
    lineTemplate.fill = interfaceColors.getFor("alternativeBackground");
    lineTemplate.line.strokeOpacity = 0.4;

    lineSeries.data = lines;

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }

}

export default Flights;