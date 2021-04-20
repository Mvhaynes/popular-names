// Declare each item for easy access
var data = data;
var top_10_names = data.top_10_names;
var top_f_names = data.top_f_names;
var top_m_names = data.top_m_names;
var years_2004_2014 = data['2004_2014'];
var f_2004_2014 = data.f_2004_2014;
var m_2004_2014 = data.m_2004_2014;
var time_series = data.time_series;

function init() {
    getData(top_10_names);
    makeChart('Most Popular Names');
};
// Function that changes the x and y values for each dataset 
function getData(dataset) {
    x = [];
    y = [];
    dataset.forEach((item) => x.push(item.Name));
    dataset.forEach((item) => y.push(item.Count));
}
// Function that makes a new chart with the updated values
function makeChart(title) {
    data = [{
        x: x,
        y: y,
        type: 'bar',
        marker: {
            color: 'rgb(115, 172, 192, 1)'}
    }];
    layout = {
        title: title,
        font: {
            family: 'Raleway',
            size: 17,
            color: 'black'
          }
        }
    Plotly.newPlot("plot", data, layout);
}

// Switch function based on dropdown selection
d3.selectAll("#selDataset").on("change", updatePlot);

function updatePlot() {

    // Select the dropdown menu value
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.node().value;

    // Switch function based on which dropdown option is chosen
    switch(dataset) {
        case "mostPopularNames":
          getData(top_10_names);
          break;
    
        case "popularFemaleNames":
          getData(top_f_names);
          break;
    
        case "popularMaleNames":
          getData(top_m_names);
          break;
    
        default:
          getData(top_10_names);
          break;
      }
    
    // Update plot
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    }
// Other changes to make: 
// - Update chart colors based on gender 
// - Stacked chart 
// - Update dropdown menu formatting
// Add most popular names over times separated by gender 
// add filters to the charts 


// Time plot for most popular names 
function timeSeriesData(dataset) {
    dataName = [];
    count = [];
    year = [];
    relativePop = [];
    dataset.forEach((data) => dataName.push(data.Name));
    dataset.forEach((data) => count.push(data.Count));
    dataset.forEach((data) => year.push(data.Year))
    dataset.forEach((data) => relativePop.push(data['Relative Popularity (%)']));
}
timeSeriesData(time_series);

var data1 = [{
  type: 'line',
  x: year,
  y: count,
  mode: 'lines',
  transforms: [{
    type: 'groupby',
    groups: dataName,
  }]
}]
var layout = {
    title: 'Most Popular Names Over Time',
    font: {
        family: 'Raleway',
        size: 17,
        color: 'black'
      }
  };

Plotly.newPlot('timeplot', data1, layout)

// Relative popularity over time 
var data2 = [{
  type: 'line',
  x: year,
  y: relativePop,
  line: {
    dash: 'dash',
    width: 2
  },
  transforms: [{
    type: 'groupby',
    groups: dataName,
  }]
}]
var layout = {
    title: 'Relative Popularity Over Time',
    font: {
        family: 'Raleway',
        size: 17,
        color: 'black'
      }
  };

Plotly.newPlot('relative', data2, layout)



init();


   
