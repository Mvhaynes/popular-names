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
    x = [];
    y = [];
    getData(top_10_names);
    makeChart(top_10_names, 'Top 10 Names Overall');
};
init();

function getData(dataset) {
    dataset.forEach((item) => x.push(item.Name));
    dataset.forEach((item) => y.push(item.Count));
}

function makeChart(dataset,title) {
    data = [{
        x: x,
        y: y,
        type: 'bar',
        marker: {
            color: 'rgb(158,202,225)'}
    }];
    layout = {
        title: title}
    Plotly.newPlot("plot", data, layout);
}

// Create switch function by dropdown selection 
d3.selectAll("#selDataset").on("change", updatePlot);

function updatePlot() {
    var dropdownMenu = d3.selectAll('#selDataset').value;
    x = [];
    y = [];
    
    switch(dropdownMenu) {
        case "mostPopularNames":
            // getData(top_10_names);
            // makeChart(top_10_names, 'Top 10 Names Overall');
            console.log(`option1`)
            break;
        case "popularFemaleNames":
            // getData(top_f_names);
            // makeChart(top_f_names, 'Top 10 Female Names');
            console.log(`gg`);
            break;
        case "popularMaleNames":
            getData(top_m_names);
            makeChart(top_m_names, 'Top 10 Male Names');
            break;
    }
};



    
// // Select the dropdown menu 
// var dropdownMenu = d3.selectAll("#selDataset");

// // Function to update the filter box 
// dropdownMenu.on("change", function() {

//     // Select filter option, label, placeholder
//     var filterOption = dropdownMenu.property("value");
//     var label = d3.selectAll("label");
//     var placeholder = d3.selectAll("input");

//     // Change label and placeholder 
//     if (filterOption == 'City') {
//         label.text('Enter a City');
//         placeholder.attr("placeholder","Seattle");
//     }
//     else if (filterOption == 'State') {
//         label.text('Enter a State');
//         placeholder.attr("placeholder","Washington");
//     }
//     else if (filterOption == 'Country') {
//         label.text('Enter a Country');
//         placeholder.attr("placeholder","US");
//     }
//     else if (filterOption == 'Shape') {
//         label.text('Enter a Shape');
//         placeholder.attr("placeholder","Circle")
//     }
//     else if (filterOption == 'Date') {
//         label.text('Enter a Date');
//         placeholder.attr("placeholder","1/11/2010");
// }});




// var trace1 = {
//     x: top_10_names.map(object => object.name)
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: "'Bar' Chart"
//   };
  
//   Plotly.newPlot("plot", data, layout);

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


// for (var i = 0; i < top_10_names.length; i++) {
//     x.push(top_10_names[i]['Name']);
//     y.push(top_10_names[i]['Count']);
// };