// Declare each item for easy access
var data = data;
var top_10_names = data.top_10_names;
var top_f_names = data.top_f_names;
var top_m_names = data.top_m_names;
var years_2004_2014 = data['2004_2014'];
var f_2004_2014 = data.f_2004_2014;
var m_2004_2014 = data.m_2004_2014;
var time_series = data.time_series;

// Note to self - keep gender column and create stacked bar chart
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
            color: 'rgb(158,202,225)'}
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

init();


   



// function appendTable(dataset) {
//     dataset.forEach((dataRow) => { 
//     // Add a row 
//     var row = d3.select("tbody").append("tr");

//     // Add a cell and enter values into each cell 
//     Object.entries(dataRow).forEach(function([key,value]) {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// })};
// appendTable(top_10_names);
