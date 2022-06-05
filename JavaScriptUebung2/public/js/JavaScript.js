"use strict";
function Init ()
{
  var jsonstring = ' { "Menschen" : [' +
    ' { "Vorname" : "Peter", "Nachname" :"Müller", "Gender": "male", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Susanne", "Nachname" :"Lehmann", "Gender": "female", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Jürgen", "Nachname" :"Schneider", "Gender": "male", "Rolle" : "Dozent"  },'+
    ' { "Vorname" : "Jens", "Nachname" :"Schulze", "Gender": "male", "Rolle" : "Student" } ] }';

  window.humans = JSON.parse(jsonstring);
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
  var queryButton = document.getElementById('wikiQueryButton');
  queryButton.onclick = function(){getWikiQuery();};
}

function showMenschen()  {
  console.log("showMenschen ");
  
  var tableHeader = "<table> <tr>";
  tableHeader += "<th>Vorname</th><th>Nachname</th><th>Gender</th><th>Rolle</th></tr>";
  
  var tableText = "";
  var listOfHumans = window.humans;
  for (var i = 0; i < listOfHumans.Menschen.length; i++) {
    var person = listOfHumans.Menschen[i];
    tableText += "<tr><td>" + person.Vorname + "</td><td>" 
                            + person.Nachname + "</td><td>" 
                            + person.Gender + "</td><td>" 
                            + person.Rolle + "</td>";
  }
  tableText += "</tr>"
  var tableclosing = "</table>";
  var fulltext = tableHeader + tableText + tableclosing;
  
  document.getElementById('showwindowData').innerHTML = fulltext;
  document.getElementById('showwindow').style.display = "block";
  document.getElementById('showwindow').style.top = "10%";

  var returnButton = document.getElementById('showwindowbtn');
  returnButton.onclick = function(){ document.getElementById('showwindow').style.display = "none";};
}

function showWikiQueryResults(wikiQueryAnswer)
{
  console.log("showWikiQueryResults()");
  var tableHeader = "<table> <tr>";
  tableHeader += "<th>Search Argument</th><th>Description</th><th>Extract</th><th>Link</th></tr>";
  
  var tableText = "";
  var listOfResults = wikiQueryAnswer.response.query.pages;
  for (let itemNumber in listOfResults) {
    var item = listOfResults[itemNumber];
    console.log(item);
    var wikiLink = "https://de.wikipedia.org/?curid=" + item.pageid
    tableText += "<tr><td>" + item.title + "</td><td>" 
                            + item.description + "</td><td>" 
                            + item.extract + "</td><td>" 
                            + "<a href='" + wikiLink + "'>" + wikiLink + "</a>" + "</td>";
  }
  tableText += "</tr>"
  var tableclosing = "</table>";
  var fulltext = tableHeader + tableText + tableclosing;
  
  document.getElementById('showWikiData').innerHTML = fulltext;
  document.getElementById('showWiki').style.display = "block";
  document.getElementById('showWiki').style.top = "30%";

  var returnButton = document.getElementById('showWikiBtn');
  returnButton.onclick = function(){ document.getElementById('showWiki').style.display = "none";};
}

function getWikiQuery() {
  console.log("getWikiQuery ");
  const xhttp = new XMLHttpRequest();
  
  xhttp.onload = function() {
    window.responseText = JSON.parse(this.responseText);
    console.log(JSON.parse(this.responseText))
    showWikiQueryResults(JSON.parse(this.responseText));
  }
  var keyword = document.getElementById("searchStringInput").value;
  var url = "http://localhost:6001/proxy/?https://de.wikipedia.org/w/api.php?action=query&generator=prefixsearch&format=json&gpslimit=4&prop=extracts%7Cdescription&exintro=1&explaintext=1&exsentences=3&redirects=1&gpssearch=" + keyword;
  xhttp.open("GET", url);
  xhttp.send();
}
