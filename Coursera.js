/*Name this external file gallery.js*/

let display = document.querySelector("#image");
let previousText = display.textContent;


function addTabIndex() {
    console.log("Event Triggered: Adding Tabindex to images");
    let images = document.getElementsByTagName("img");
    for(let image of images) {
        image.setAttribute("tabindex", 0);
    }

}

function upDate(previewPic){
   
  display.style.backgroundImage = `url(${previewPic.src})`;
  display.textContent = previewPic.alt;
  
    }

function unDo(){
   
    display.style.backgroundImage = null;
    display.textContent = previousText;
}