// Making a clock
var date = new Date();
var monthday = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
clock = month + '/' + monthday + '/' + year.toString().slice(2, 4);
document.getElementById("clock").innerHTML = clock;


// var selfportrait;
// var eyebrow;
// window.onload= function() {
	// selfportrait = document.getElementById("selfportrait").contentDocument
	// eyebrow = selfportrait.getElementById("path5805")
	// eyebrow.style.display = "none"
// }


var row = document.getElementById("skills").getElementsByTagName("TR")


function ToggleSort(rowIndex) {
	table_header = document.querySelectorAll("th")[rowIndex]
	header_name = table_header.getAttribute("name")
	sortState = table_header.getAttribute(['data-sort'])

	if (sortState == "down") {
		table_header.setAttribute(['data-sort'], "up")
		table_header.innerHTML = header_name + '&nbsp;&darr;'
		return sortRowDown(rowIndex);
	}
	if (sortState == "up") {
		table_header.setAttribute(['data-sort'], "down")
		table_header.innerHTML = header_name + '&nbsp;&uarr;'
		return sortRowUp(rowIndex);
	}
}



function sortRowUp(rowIndex) {
  var table, rows, rowIndex, switching, i, x, y, shouldSwitch;
  table = document.getElementById("skills");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[rowIndex];
      y = rows[i + 1].getElementsByTagName("TD")[rowIndex];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortRowDown(rowIndex) {
  var table, rows, rowIndex, switching, i, x, y, shouldSwitch;
  table = document.getElementById("skills");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[rowIndex];
      y = rows[i + 1].getElementsByTagName("TD")[rowIndex];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function ToggleNumSort(rowIndex) {
	table_header = document.querySelectorAll("th")[rowIndex]
	header_name = table_header.getAttribute("name")
	sortState = table_header.getAttribute(['data-sort'])

	remoteth = document.querySelectorAll("th")[rowIndex - 1]
	remoteh = remoteth.getAttribute("name")

	if (sortState == "down") {
		table_header.setAttribute(['data-sort'], "up")
		remoteth.innerHTML = header_name + '&nbsp;&uarr;'
		return sortNumRowDown(rowIndex);
	}
	if (sortState == "up") {
		table_header.setAttribute(['data-sort'], "down")
		remoteth.innerHTML = header_name + '&nbsp;&darr;'
		return sortNumRowUp(rowIndex);
	}
}

function sortNumRowUp(rowIndex) {
	var table, rows, rowIndex, switching, i, x, y, shouldSwitch;
	table = document.getElementById('skills');
	switching = true;
	while (switching) {
		switching = false;
		rows = table.getElementsByTagName("TR");
		for (i=1; i< (rows.length - 1); i++) {
			shouldSwitch = false;
			x = Number(rows[i].getElementsByTagName("TD")[rowIndex].innerHTML)
			y = Number(rows[i + 1].getElementsByTagName("TD")[rowIndex].innerHTML)
			if (x > y) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

function sortNumRowDown(rowIndex) {
	var table, rows, rowIndex, switching, i, x, y, shouldSwitch;
	table = document.getElementById('skills');
	switching = true;
	while (switching) {
		switching = false;
		rows = table.getElementsByTagName("TR");
		for (i=1; i< (rows.length - 1); i++) {
			shouldSwitch = false;
			x = Number(rows[i].getElementsByTagName("TD")[rowIndex].innerHTML)
			y = Number(rows[i + 1].getElementsByTagName("TD")[rowIndex].innerHTML)
			if (x < y) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}