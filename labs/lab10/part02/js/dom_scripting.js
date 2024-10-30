function init(){
//br
  var newbr3 = document.createElement("br");
  var newbr2 = document.createElement("br");
//div
 var newDiv = document.createElement("div");
 newDiv.setAttribute("id","divs");

//p
  var newParagraph1 = document.createElement("p");
  newParagraph1.setAttribute("id","para");
//img
  var newImage = document.createElement("img")
  newImage.setAttribute("src", "img/11-headshot.png");
  newImage.setAttribute("height", "50px");
  newImage.setAttribute("width", "50px");

//textbox
  var newTextBox = document.createElement("textarea");
  newTextBox.setAttribute("height", "50px");
  newTextBox.setAttribute("width", "500px");

//google img
  var newImage2 = document.createElement("img")
  newImage2.setAttribute("src", "img/03-google.png");
  newImage2.setAttribute("height", "15px");
  newImage2.setAttribute("width", "15px");

//google reader text
  var newAnchor = document.createElement("a")
  newAnchor.setAttribute("id", "googleLeft");

  var newParagraphText = document.createTextNode(
    " google reader using jonfriskics@gmail.com "
  );
  newAnchor.append(newParagraphText)

  var newAnchor2 = document.createElement("a")
  newAnchor2.setAttribute("id", "postRight");
  var newButton = document.createElement("input");
  newButton.setAttribute("type","submit");
  newButton.setAttribute("name", "Post");
  newButton.setAttribute("value", "Post");


  var newAnchor3 = document.createElement("a")
  newAnchor3.setAttribute("id", "cancelRight");
  var newParagraphText2 = document.createTextNode(
    " or "
  );
  var newAnchor4 = document.createElement("a")
  newAnchor4.setAttribute("id", "cancelRightColor");
  var newParagraphText3 = document.createTextNode(
    " Cancel "
  );
  newAnchor2.appendChild(newParagraphText2)
  newAnchor4.appendChild(newParagraphText3)
  newAnchor3.append(newButton)

  newParagraph1.append(newImage);
  newParagraph1.append(newTextBox);
  newParagraph1.append(newbr3);
  newParagraph1.append(newbr2);
  newParagraph1.append(newImage2);
  newParagraph1.append(newAnchor);
  newParagraph1.append(newAnchor4);
  newParagraph1.append(newAnchor2)
  newParagraph1.append(newAnchor3);


  newDiv.appendChild(newParagraph1)

  var newGoogle = document.getElementById("google");
  newGoogle.insertAdjacentElement('afterbegin',newDiv)

  document.getElementById("para").style.backgroundColor = "#C5DBF2";

}



window.addEventListener('load',init,false);
