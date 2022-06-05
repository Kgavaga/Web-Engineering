<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="grid-container">
        <nav>
            <!-- Logo -->
            <div id="Spickzettel">
                Spickzettel
            </div>

            <!-- Navigation menu -->
            <ul class="MenuItems">
                <li id="home"><RouterLink class="MenuItemLink" to="/">Home</RouterLink></li>
                <li id="structure"><RouterLink class="MenuItemLink" to="/Structure">Aufbau</RouterLink></li>
                <li id="text"><RouterLink class="MenuItemLink" to="/Text">Text</RouterLink>
                    <div class="Dropdown" id="textDrop">
                        <div>Basics</div>
                        <div>Sonderzeichen</div>
                    </div>
                </li>
                <li id="list"><RouterLink class="MenuItemLink" to="/Lists">Listen</RouterLink>
                    <div class="Dropdown" id="listDrop">
                        <div>&lt;ul&gt;</div>
                        <div>&lt;ol&gt;</div>
                        <div>&lt;dl&gt;</div>
                    </div>
                </li>
                <li id="links"><RouterLink class="MenuItemLink" to="/Links">Links</RouterLink>
                    <div class="Dropdown" id="linksDrop">
                        <div>&lt;a&gt;</div>
                        <div>Weitere Attribute</div>
                        <div>Anwendung</div>
                    </div>
                </li>
                <li id="css"><RouterLink class="MenuItemLink" to="/CSS">CSS</RouterLink>
                    <div class="Dropdown" id="cssDrop">
                        <div>Allgemein</div>
                        <div>Warum&#63;</div>
                        <div>Syntax</div>
                        <div>Selektoren</div>
                        <div>Pseudoklassen</div>
                        <div>Stylesheet</div>
                        <div>&lt;div&gt;&lt;span&gt;</div>
                        <div>Box-Modell</div>
                    </div>
                </li>
            </ul>
        </nav>

        <!-- Main Content -->
        <div class="Content">
            <RouterView />
        </div>

        <!-- Popup Modal -->
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <canvas id="signatureCanvas">Your browser does not support the HTML canvas tag.</canvas>
                <button class="modalButton" id="btnErase">Erase</button>
                <button class="modalButton" id="btnAccept">Accept</button>
            </div>
        </div>

        <!-- Footer with the signature -->
        <div id="footer">
            <!-- As alternative text for the image when not yet displayed a <p> was chosen -->
            <!-- The reason is, that the alt-attribute of <img> is not shown in Safari browsers -->
            <p id="alternativeFooterText"><b>Hier k&ouml;nnte ihre Unterschrift stehen!</b></p>
            <img id="signatureImage"/>
        </div>
    </div>

</template>

<script>
window.addEventListener("load", function() {
    // When the page is loaded --> initModal()
    initModal();
});

/*
*   initModal()
*
*   Initializes the Modal used to display the canvas.
*/
function initModal(){
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("footer");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        initCanvas();
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/*
*   initCanvas()
*
*   Initializes the canvas Element to be able to be drawn on.
*/
function initCanvas(){
    var canvas = document.getElementById("signatureCanvas");
    var ctx = canvas.getContext('2d')

    // Used to determine when the user wants to draw to the screen
    var isMouseDown = false;
    // Thickness of the stroke
    ctx.lineWidth = 3;

    var btnErase = document.getElementById("btnErase");
    var btnAccept = document.getElementById("btnAccept");

    btnErase.onclick = function(){
        // Clear whole canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    btnAccept.onclick = function(){
        var alternativeFooterText = document.getElementById("alternativeFooterText");
        var signatureImage = document.getElementById("signatureImage");
        // Hide the alternative Footer Text
        alternativeFooterText.style.display = "none";
        signatureImage.src = canvas.toDataURL('image/png');
        // Reset padding of parent to 0px in order to fit the image even on the smallest of screens
        signatureImage.parentElement.style.padding = "0px";
        // Display image
        signatureImage.style.display = "inline";

    }

    canvas.onpointerdown = function(mouseEvent){
        isMouseDown = true;
        ctx.beginPath();
        var pos = getPointerPos(canvas, mouseEvent);
        ctx.moveTo(pos.x, pos.y);
    }

    canvas.onpointerup = canvas.onpointerleave = function(){
        isMouseDown = false;
        ctx.closePath();
    }

    canvas.onpointermove = function(mouseEvent){
        var pos = getPointerPos(canvas, mouseEvent);
        if(isMouseDown){
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
    };
    
}

/*
*   getPointerPos(canvas, evt)
*   
*   canvas:     Canvas that is used
*   evt:        The actual pointer event with the position of the pointer (either touch pointer or mouse pointer)
*
*   Gets the position of the touch pointer or the mouse pointer.
*/
function getPointerPos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}  
</script>

<style>
@import '@/assets/base.css';
body{
    background-image: linear-gradient(#b2cbee, #8ca3c4, #7b94b9);
}

/*
*   Base Grid
*/
.grid-container{
    display: grid;
    grid-template-areas:
        'menu'
        'content'
        'footer';
    gap: 10px;
    margin: 10px;
}

/*
*   Small size screen
*/
@media(max-width: 768px){
    /* First Grid-Row */
    #Spickzettel{  
        width: 100%;
    }
    nav{
        display: grid;
        grid-template-columns: auto;
        gap: 10px;
    }
    .MenuItemLink{
        padding: 20px;
    }
    
    /* Second Grid-Row */
    aside{
        display: none;
    }

    article{
        padding: 0.25px 12px 0.25px 12px;
        background-color: #ffffff;
        border-radius:5px;
    }
}

/*
*   Large size screen
*/
@media(min-width: 769px){
    /* First Grid-Row */
    #Spickzettel{  
        width: 200px;
    }
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
    }
    .MenuItemLink{
        padding: 30px;
    }

    /* Second Grid-Row */
    article{
        padding: 0.25px 12px 0.25px 12px;
        margin-left: 210px;
        background-color: #ffffff;
        border-radius:5px;
    }
    aside{
        font: sans-serif, verdana;
        font-size: 23px;
        color: black;
        text-align: center;
        padding: 10px 0px 10px 0px;
        
        position:fixed;
        width: 200px;
        border-radius: 5px;
        background-color: white;

    }

    /* Third Grid-Row */
    #footer{  
        margin-left: 210px;
    }
}

/*
*   Navigation Menu
*/
nav {
    grid-area: menu;
}
.Content {
    grid-area: content
    
}
/* Logo */
#Spickzettel{
    font-family: impact;
    font-size: 40px;
    color: white;
    text-align: center;
    margin-right: 10px;
    padding: 23px 10px 23px 10px;
    
    border-radius: 20px;
    background-color: orange;
}
/* Layout of the menu items */
.MenuItems{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    padding: 0;
    border-radius: 20px;
    list-style-type: none;
    background-color: #2276f4;
    overflow:hidden;
    font: sans-serif, verdana;
    font-size: 30px;
}
.MenuItemLink{
    color:white;
    text-decoration: none;
    display:inline-block;
}
/* Layout of the dropdown items */
.Dropdown{
    display: none;
    position:absolute;
    background-color: #f1f1f1;
    font-size: 18px;
    min-width: var(--drop-max-width);
    box-shadow: 4px 4px 6px grey;
}
.Dropdown div{
    color:black;
    padding: 14px 16px;
    display:block;
}
aside a{
    color: black;
}

/*
*   Every hover functionality
*/ 
@media (hover: hover) {
    .MenuItemLink:hover{
        color:white;
        text-decoration: none;
        background-color:#ea3a3a;
    }

    .Dropdown a:hover{
        color:black;
        text-decoration: none;
        background-color: #e5e5e5;
    }

    .Dropdown a:hover{
        color:black;
        text-decoration: none;
        background-color: #e5e5e5;
    }

    /*-Dropdowns- Global*/
    /*text*/
    #text:hover #textDrop{
        display:block;
    }

    /*list*/
    #list:hover #listDrop{
        display:block;
    }

    /*links*/
    #links:hover #linksDrop{
        display:block;
    }

    /*css*/
    #css:hover #cssDrop{
        display:block;
    }

    /*link*/
    a:hover{
        color: red;
        text-decoration: underline;
    }
}


/* 
*   Table
*/

table{
    border-collapse: collapse;
    width:100%;
}
td{
    text-align: center;
    border: 1px solid #dddddd;
}
td, th{
    padding: 2px;
}
th{
    border-top: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-bottom: 1px solid #111111;
    border-left: 1px solid #dddddd;
    font-size: 21px;  
}
tr:nth-child(odd){
    background-color: #dddddd;
}

/*
*   Headings
*/
h1,h2,h3{
    margin: 20px 0px 10px 0px;
    font-weight: bold;
}
h1, h2{
    font-family:verdana;
}
h1{
    text-align:center;
    font-weight: bold;
}
h3{
    font-family:sans-serif;	
    font-weight: bold;	
}

/*
*   Paragraphs
*/
p.code{
    text-decoration: underline;
}
p.introduction{
    text-align:center;
    font-size:23px;
}
p, p.introduction, th, td, p.code{
    font-family:sans-serif;
}
p, pre, td, p.code{
    font-size:21px;
} 

/*
*   Others
*/
b{
    font-weight: bold;	
}
a{
    color: blue;
    text-decoration: none;
}

/* 
*   Modal 
*/
/* Modal Background */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
  display: flex;
  flex-flow: column wrap;
  align-content: center;

  background-color: #fefefe;
  margin: auto;
  padding: 0px 5px 0px 5px;
  border: 1px solid #888;
  width: 310px;
  border-radius: 5px;
}
/* The Close Button */
.close {
  color: #aaaaaa;
  font-size: 28px;
  float:inline-end;
  font-weight: bold;
  align-self: flex-end;
  margin:5px;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
/* Buttons within the modal */
.modalButton {
  margin: 5px;
  width: 300px;
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}
.modalButton:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

/* Canvas within the modal */
#signatureCanvas{
    width: 300px;
    margin:5px;
    border:1px solid #000000;
    touch-action: none;
}

/*
* Footer
*/
#footer {
    grid-area: footer;
    font-family: impact;
    font-size: 25px;
    color: white;
    text-align: center;
    padding: 5px;
    
    border-radius: 5px;
    background-color: lightslategrey;
}
#signatureImage {
    width:300px;
    height:150px;
    align-self: center;
    display: none;
}
</style>