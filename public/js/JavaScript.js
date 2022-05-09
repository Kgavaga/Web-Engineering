"use strict";
function Init ()
{
  var jsonstring = ' { "Menschen" : [' +
    ' { "Vorname" : "Peter", "Nachname" :"Müller", "Gender": "male", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Susanne", "Nachname" :"Lehmann", "Gender": "female", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Jürgen", "Nachname" :"Schneider", "Gender": "male", "Rolle" : "Dozent"  },'+
    ' { "Vorname" : "Jens", "Nachname" :"Schulze", "Gender": "male", "Rolle" : "Student" } ] }';

  window.Menschen = JSON.parse(jsonstring);
  document.getElementById('PullupServices').addEventListener("click", dothisnow);
  document.getElementById('popupli1').addEventListener("click",function() {showMenschen();});

 }
function dothisnow()
{
  console.log("Pull up"); // just log that the event has triggered the right routine.

  var pullUpBox = document.getElementById('PullupOptions'); // variable pull refers to the HTML element with the id="abc"
  pullUpBox.style.top = document.getElementById('scrollpart').offsetTop + "px";
  pullUpBox.style.left = document.getElementById('PullupServices').offsetLeft + "px";
  pullUpBox.style.display = "block";

  var returnButton = document.getElementById('PullupOptionsBtn');
  returnButton.onclick = function(){ document.getElementById('PullupOptions').style.display = "none";};
}

function showMenschen()  {
  console.log("showMenschen ");
  
  var tableheader = "<table> <tr>";
  tableheader += "<th>Vorname</th><th>Nachname</th><th>Gender</th><th>Rolle</th></tr>";
  
  var tabletext = "";
  var alle = window.Menschen;
  for (var i = 0; i < alle.Menschen.length; i++) {
    var person = alle.Menschen[i];
    tabletext += "<tr><td>" + person.Vorname + "</td><td>" 
                            + person.Nachname + "</td><td>" 
                            + person.Gender + "</td><td>" 
                            + person.Rolle + "</td>";
  }
  var tableclosing = "</table>";
  var fulltext = tableheader + tabletext + tableclosing;
  
  document.getElementById('showwindowData').innerHTML = fulltext;
  document.getElementById('showwindow').style.display = "block";
  document.getElementById('showwindow').style.top = "50%";

  var returnButton = document.getElementById('showwindowbtn');
  returnButton.onclick = function(){ document.getElementById('showwindow').style.display = "none";};
}

