var inputJsonTxt = document.getElementById('inputJsonLink');
var readJsonBtn = document.getElementById('readJsonLinkBtn');
var tableContent = document.getElementById('table-content');

	readJsonBtn.addEventListener('click', function(event){
		event.preventDefault();
		var inputData = inputJsonTxt.value;
		if(inputData == ""){
			tableContent.innerHTML = "<p>You must paste the url of JSON</p>"
		} else {
			$.getJSON(inputData, function( data ) {
		  	tableContent.innerHTML = buildTableHtml(data);
		});
		}
		
	})


	function buildTableHtml(data){
		var finalHtml = "<table>";
		finalHtml += buildTableHeaderHtml(data);
		finalHtml += buildTableCellsHtml(data);
		finalHtml += "</table>";
		return finalHtml;
		console.log(data.length);
	}

	function buildTableHeaderHtml(data){
		var dataHeader;
		var finalHtml = "<tr>";

		if(data.length == undefined){
			dataHeader = Object.getOwnPropertyNames(data);
		} else {
			dataHeader = Object.getOwnPropertyNames(data[0]);
		}

		for (var i = 0; i <dataHeader.length; i++) {
			finalHtml += "<th>"+dataHeader[i]+"</th>";
		}

		finalHtml += "</tr>";
		return finalHtml;
	}

	function buildTableCellsHtml(data){
		var finalHtml = "";

		if(data.length == undefined){
			finalHtml += "<tr>";
			var tableData = Object.values(data);
			for (var i = 0; i < tableData.length; i++) {
				finalHtml += "<td>"+tableData[i]+"</td>";
			}
			finalHtml += "</tr>";
		} else {
			for (var i = 0; i <data.length; i++) {
				finalHtml += "<tr>"
				var tableData = Object.values(data[i]);
				for (var j = 0; j < tableData.length; j++) {
					finalHtml += "<td>"+tableData[j]+"</td>"
				}
				finalHtml += "</tr>";
			}
		}

		return finalHtml;

	}
