// import { createUnionTypeAnnotation } from "@babel/types";

var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

export interface City {
  id?: string;
  svgPath: string;
  title: string;
  latitude: number;
  longitude: number;
  scale: number;
}

export interface Destinations {
  from: string;
  to: string;
}

var citiesList: any = {
  "London": {
    // id: "london",
    svgPath: targetSVG,
    title: "London",
    latitude: 51.5002,
    longitude: -0.1262,
    scale: 0.5
  },
  // "Athens": {
  //   svgPath: targetSVG,
  //   title: "Athens",
  //   latitude: 37.9792,
  //   longitude: 23.7166,
  //   scale: 0.5
  // },
  // "Madrid": {
  //   svgPath: targetSVG,
  //   title: "Madrid",
  //   latitude: 40.4167,
  //   longitude: -3.7033,
  //   scale: 0.5
  // },
  "Paris": {
    svgPath: targetSVG,
    title: "Paris",
    latitude: 48.8567,
    longitude: 2.3510,
    scale: 0.5
  },
  "New York": {
    svgPath: targetSVG,
    title: "New York",
    latitude: 40.43,
    longitude: -74,
    scale: 0.5
  },
  "Cleveland": {
    id: "cleveland",
    svgPath: targetSVG,
    title: "Cleveland",
    latitude: 41.50,
    longitude: -81.67,
    scale: 0.5
  },
  "Istanbul": {
    svgPath: targetSVG,
    title: "Istanbul",
    latitude: 41.01,
    longitude: 28.98,
    scale: 0.5
  },
  "Izmir": {
    svgPath: targetSVG,
    title: "Izmir",
    latitude: 38.42,
    longitude: 27.14,
    scale: 0.5
  },
  "Amsterdam": {
    svgPath: targetSVG,
    title: "Amsterdam",
    latitude: 52.37,
    longitude: 4.89,
    scale: 0.5
  }
};

const routes: Destinations[] = [
  {
    from: "Cleveland",
    to: 'New York'
  },
  {
    from: "New York",
    to: 'London'
  },
  {
    from: "London",
    to: "Istanbul"
  }, 
  {
    from: "Istanbul", 
    to: "Izmir"
  },
  {
    from: "Izmir", 
    to: "Istanbul"
  },
  {
    from: "Istanbul", 
    to: "Amsterdam"
  },
  {
    from: "Amsterdam", 
    to: "Paris"
  }, 
  {
    from: "Paris", 
    to: "New York"
  },
  {
    from: "New York", 
    to: "Cleveland"
  }, 
  
];

var allLines = routes.map(route => {
  return {
    "multiGeoLine": [
      [
        { "latitude": citiesList[route.from].latitude, "longitude": citiesList[route.from].longitude },
        { "latitude": citiesList[route.to].latitude, "longitude": citiesList[route.to].longitude }
      ]
    ]
  };
})


export let cities: City[] = Object.values(citiesList) as any;
export let lines = allLines;