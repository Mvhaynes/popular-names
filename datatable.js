d3.csv('data/NationalNames.csv').then(function(data) {
    console.log(data);
    var dataTable = data;
    var row = d3.select("dataTable").append("tr");
    row.append("td").text(dataTable);
})