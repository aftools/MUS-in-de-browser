
// CSV naar HTML table
// gebaseerd op: https://www.aspsnippets.com/Articles/Read-CSV-File-in-JavaScript-using-HTML5-File-API.aspx
// - csv filenaam
// - ID van div waar de tabel moet komen

    function csv_to_table(fileUpload, divID) {
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt|.ini|.del)$/;
        if (regex.test(fileUpload..toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var table = document.createElement("table");
                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }
                    var dvCSV = document.getElementById("divCSV");
                    divCSV.innerHTML = "";
                    divCSV.appendChild(table);
                }
                reader.readAsText(fileUpload);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
    }

	
	var blob = null;
var xhr = new XMLHttpRequest();
xhr.open("GET", "/favicon.png");
xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
xhr.onload = function()
{
    blob = xhr.response;//xhr.response is now a blob object
}
xhr.send();
 
 function printFile(file) {
  var reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}