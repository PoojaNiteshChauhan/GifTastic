var topic = ["Mickey Mouse", "Popeye", " Donald Duck", "Snoopy", "Minnie Mouse", "Tom Cat", "Boo-Boo", "Jerry", "Tweety"];



function displayButton() {

  var cartoonButton = 0;
  $("#Buttons").empty();
  for (i = 0; i < topic.length; i++) {
    cartoonButton = $("<button>");
    cartoonButton.addClass("cartoon-btn");
    cartoonButton.text(topic[i]);
    $("#Buttons").append(cartoonButton);
    cartoonButton.attr("data-name", topic[i]);
  }
}

$(document).ready(function () {
  displayButton();

});


$(document).on("click", ".cartoon-btn", displaygif);

function displaygif() {

  var cartoonName;
  cartoonName = $(this).attr("data-name")
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0iQvSalSK4vJ19h4f8P5J2OYDPb9tRF1&q=" + cartoonName + "&limit=10&offset=0"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {


    var cartoonDiv = $("<div class='cartoon'>");

    for (i = 0; i < 10; i++) {
      var ratingCartoon = response.data[0].rating;
      var pOne = $("<p>").text("Rating: " + ratingCartoon);
      cartoonDiv.append(pOne);
      var imgURL = response.data[i].images.fixed_width_small_still.url;

      //console.log(imgURL);
      console.log(response);

      var image = $("<img>");
      image.attr("src", imgURL);
      image.attr({'data-animate':response.data[i].images.fixed_width_small.url});
      image.attr({'data-still':response.data[i].images.fixed_width_small_still.url});
      image.attr({'data-state':"still"});
      //console.log(image);
      cartoonDiv.append(image);
      $("#Image").prepend(cartoonDiv);
    }
  })
}


$("#add-cartoon").on("click", function (event) {
  event.preventDefault();
  var cartoonAdded = $("#cartoon-input").val().trim();
  topic.push(cartoonAdded);
  displayButton();
});



$(document).on("click", ".Gif .cartoon img", function () {

  
  var source1 = $(this).attr("src");
  var currrentState = $(this).attr('data-state');
  
  if (currrentState === "still")
  {
    $(this).attr({'data-state':"move"});
    source1 = $(this).attr('data-animate');
    $(this).attr("src",source1);
  }
  else
  {
    $(this).attr({'data-state':"still"});
    source1 = $(this).attr('data-still');
    $(this).attr("src",source1);
  }
  //source1 = source1 + 
  //if 
  //alert(source1);


  //"https://media0.giphy.com/media/fxk77tLDWIWBPmaN8Z/100w_s.gif?cid=3e4144665d0823f764566a6f63987861&rid=100w_s.gif"
  //"https://media0.giphy.com/media/fxk77tLDWIWBPmaN8Z/100w.gif?cid=3e4144665d0823f764566a6f63987861&rid=100w.gif"

})