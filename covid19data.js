fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "478b799a96mshc431a249223a2c1p17ca07jsnc687b91c41c5"
	}
})
.then(function (response) {
	return response.json();
	console.log(response);
})
.then(function (data) {

     generateTable(data);
     console.log(data);
})

.catch(function (err)  {
	console.log('error:'+ err);
});

function generateTable(data)
{
//displaying statistic_taken_at 
var div = document.getElementById("subheading");
var stat = data.statistic_taken_at;
var sub = document.createElement("H4");
sub.innerHTML = "Statistic taken at:" + " " + stat;
div.innerHTML = "";
div.appendChild(sub); 
//creating a table
var table = document.createElement("TABLE");
//creating an array 'keyNames' of property names of object countries_stat[0]
var keyNames = Object.keys(data.countries_stat[0]);
//expected output keyNames=["country_name","cases","deaths"...etc]
//getting the column count as length of array keyNames
var colCount = keyNames[0].length;
//adding header row
var row = table.insertRow(-1);
var headercell1 = document.createElement("TH");
headercell1.innerHTML = "Sr. No";
row.appendChild(headercell1);
for (var i = 0; i<=colCount; i++)
{
  var headerCell = document.createElement("TH");
  headerCell.innerHTML = keyNames[i];
  row.appendChild(headerCell);
}

//adding data rows
for(var i = 0;  i<=50; i++)
{
    //creating an array 'valNames' of property values of object countries_stat[]
    var valNames = Object.values(data.countries_stat[i]);
	row = table.insertRow(-1);
	var cell1 = row.insertCell(-1);
	cell1.innerHTML = i+1+".";
	for(var j = 0; j <=colCount; j++)
	{
		var cell = row.insertCell(-1);
		cell.innerHTML = valNames[j];
	}
}
var myTable = document.getElementById("myTable");
myTable.innerHTML = "";
myTable.appendChild(table);
}

