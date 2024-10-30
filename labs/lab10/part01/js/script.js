function replaceParkingInfo(event) {
  //stop the anchor's default behavior
  event.preventDefault();
  //select an area to add/replace new content
  var changingContentDiv = document.getElementById("changingContent");

  //make sure that area is empty when the new content is added/replaced
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }
  //add the content and attach it all together
  var newParagraph1 = document.createElement("p");
  var newParagraph1Text = document.createTextNode(
    "Ample downtown parking is available within close proximity to The Jacksonville Landing. Options include The Landing's own lot immediately east of the property, garage, metered street and peripheral parking."
  );

  newParagraph1.appendChild(newParagraph1Text);

  changingContentDiv.appendChild(newParagraph1);

  var newParagraph2 = document.createElement("p");
  var newParagraph2Text = document.createTextNode(
    "Complete parking information and directions are available at "
  );
  newParagraph2.setAttribute("class", "italicized");

  var newAnchor = document.createElement("a");
  var newAnchorText = document.createTextNode("Directions + Parking");
  newAnchor.appendChild(newAnchorText);
  newAnchor.setAttribute("href", "#");

  newParagraph2.appendChild(newParagraph2Text);
  newParagraph2.appendChild(newAnchor);


  //attach all the new content to the previously selected area
  changingContentDiv.appendChild(newParagraph2);
}

function replaceVendor(event) {
  //stop the anchor's default behavior
  event.preventDefault();

  //select an area to add/replace new content
  var changingContentDiv = document.getElementById("changingContent");

  //make sure that area is empty when the new content is added/replaced
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }

  //add the content and attach it all together
  var newH2 = document.createElement("h2");
  var newH2Anchor = document.createElement("a");
  var newH2AnchorText = document.createTextNode("Dipper Dan's");
  newH2Anchor.appendChild(newH2AnchorText);
  newH2Anchor.setAttribute("href", "#");
  newH2.appendChild(newH2Anchor);

  changingContentDiv.appendChild(newH2);

  var newParagraph1 = document.createElement("p");
  var newParagraph1Text = document.createTextNode(
    "Ice cream shop with all the fixins', fun foods, nachos and more!"
  );
  newParagraph1.appendChild(newParagraph1Text);

  changingContentDiv.appendChild(newParagraph1);

  var newParagraph2 = document.createElement("p");
  newParagraph2.setAttribute("class", "italicized");

  var newAnchor = document.createElement("a");
  var newAnchorText = document.createTextNode("View more Dining + Nightlife");
  newAnchor.appendChild(newAnchorText);
  newAnchor.setAttribute("href", "#");

  newParagraph2.appendChild(newAnchor);
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "img/dansicecream.jpg");
  newImage.setAttribute("alt", "image of Jefferson Landing featured vendor");
  newImage.setAttribute("height", "150px");
  newImage.setAttribute("width", "150px");



  //attach all the new content to the previously selected area
  changingContentDiv.appendChild(newImage);
  changingContentDiv.appendChild(newParagraph2);
}
function replaceHotels(event) {
  //stop the anchor's default behavior
  event.preventDefault();
  //select an area to add/replace new content
  var changingContentDiv = document.getElementById("changingContent");
  //make sure that area is empty when the new content is added/replaced
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }
  //add the content and attach it all together
  var newH2 = document.createElement("h2");
  var newH2Anchor = document.createElement("a");
  var newH2AnchorText = document.createTextNode("Casesar's Hotel");
  newH2Anchor.appendChild(newH2AnchorText);
  newH2Anchor.setAttribute("href", "#");
  newH2.appendChild(newH2Anchor);

  changingContentDiv.appendChild(newH2);

  var newParagraph1 = document.createElement("p");
  var newParagraph1Text = document.createTextNode(
    "One of the must luxurious hotels in town "
  );
  newParagraph1.appendChild(newParagraph1Text);

  changingContentDiv.appendChild(newParagraph1);

  var newH2 = document.createElement("h2");
  newH2.setAttribute("class", "italicized");

  var newAnchor = document.createElement("a");
  var newAnchorText = document.createTextNode("Luxor Hotel");
  newAnchor.appendChild(newAnchorText);
  newAnchor.setAttribute("href", "#");

  newH2.appendChild(newAnchor);
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "img/casesars.jpg");
  newImage.setAttribute("alt", "image of Casesar Hotel");
  newImage.setAttribute("height", "100px");
  newImage.setAttribute("width", "100px");

  var newParagraph3 = document.createElement("p");
  var newParagraph3Text = document.createTextNode(
    "A cheaper option to the Casesar. It is a more modest hotel."
  );
  newParagraph3.appendChild(newParagraph3Text);


  //attach all the new content to the previously selected area

  changingContentDiv.appendChild(newImage);
  changingContentDiv.appendChild(newH2);
  changingContentDiv.appendChild(newParagraph3);

}

function replaceGroups(event) {
  //stop the anchor's default behavior
  event.preventDefault();
  //select an area to add/replace new content
  var changingContentDiv = document.getElementById("changingContent");
  //make sure that area is empty when the new content is added/replaced
  while (changingContentDiv.hasChildNodes()) {
    changingContentDiv.removeChild(changingContentDiv.lastChild);
  }

  //add the content and attach it all together
  var newParagraph1 = document.createElement("p");
  var newParagraph1Text = document.createTextNode(
    "Our Taco Tuesdays are the best in town. We offer a free taco bar every Tuesday. No fees required. You are only allowed to make tacos, anything else will result in a life time ban."
  );

  newParagraph1.appendChild(newParagraph1Text);

  changingContentDiv.appendChild(newParagraph1);

  var newParagraph2 = document.createElement("p");
  var newParagraph2Text = document.createTextNode(
    "More events can be found "
  );
  newParagraph2.setAttribute("class", "italicized");

  var newAnchor = document.createElement("a");
  var newAnchorText = document.createTextNode("here.");
  newAnchor.appendChild(newAnchorText);
  newAnchor.setAttribute("href", "#");

  newParagraph2.appendChild(newParagraph2Text);
  newParagraph2.appendChild(newAnchor);
  //attach all the new content to the previously selected area
  changingContentDiv.appendChild(newParagraph2);
}
/*
function init() {
  // this stuff runs after the DOM finishes loading
  var parkingInfoAnchor = document.getElementById("parkingInfoAnchor");
  parkingInfoAnchor.addEventListener("click", replaceParkingInfo, false);

  var vendorAnchor = document.getElementById("vendorAnchor");
  vendorAnchor.addEventListener("click", replaceVendor, false);

  var hotelsNearbyAnchor = document.getElementById("hotelsNearbyAnchor");
  hotelsNearbyAnchor.addEventListener("click", replaceHotels, false);

  var groupsEventsAnchor = document.getElementById("groupsEventsAnchor");
  groupsEventsAnchor.addEventListener("click", replaceGroups, false);

  // could you create one function called replaceChangingContent(content) to handle all of these?
}*/
function replaceChangingContent(content) {
  var test = document.getElementsByTagName("a")
  test[0].addEventListener("click", replaceParkingInfo, false);
  test[1].addEventListener("click", replaceVendor, false);
  test[2].addEventListener("click", replaceHotels, false);
  test[3].addEventListener("click", replaceGroups, false);
  /* for (var i = 0; i < test; i++);
  test.addEventListener("click", function(), false); */

}
//make sure the DOM is loaded
window.addEventListener("load", replaceChangingContent, false);
