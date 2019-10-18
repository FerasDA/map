import * as am4core from "@amcharts/amcharts4/core";

export interface Country {
  id: string,
  name: string,
  fill: string
}

var countriesList: Country[] = [
  {
    id: "US", 
    name: "United States", 
    fill: "#5FCA26"
  },
  {
    id: "FR", 
    name: "France", 
    fill: "#5FCA26"
  },
  {
    id: "NL", 
    name: "Netherlands", 
    fill: "#5FCA26"
  },
  {
    id: "TR", 
    name: "Turkey", 
    fill: "#5FCA26"
  },
  {
    id: "GB", 
    name: "Great Britain", 
    fill: "#5FCA26"
  },
  {
    id: "SY", 
    name: "Syria", 
    fill: "#C9EDB6"
  },
  {
    id: "LB", 
    name: "Lebanon", 
    fill: "#C9EDB6"
  },
  {
    id: "GR", 
    name: "Greece", 
    fill: "#C9EDB6"
  },
  {
    id: "JO", 
    name: "Jordan", 
    fill: "#C9EDB6"
  },
  {
    id: "AE", 
    name: "United Arab Emirates", 
    fill: "#C9EDB6"
  },
  {
    id: "ES", 
    name: "Spain", 
    fill: "#C9EDB6"
  },
  {
    id: "CA", 
    name: "Canada", 
    fill: "#C9EDB6"
  }
];

export var countries = countriesList.map(country => {
  return {
    "id": country.id, 
    "name": country.name, 
    "fill": am4core.color(country.fill)
  };
})