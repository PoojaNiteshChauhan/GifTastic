var topic = ["Mickey Mouse", "Popeye", " Donald Duck", "Snoopy", "Minnie Mouse", "Tom Cat", "Boo-Boo", "Jerry Mouse", "Tweety"];



function displayButton() {

  var cartoonButton = 0;

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


$(document).on("click", ".cartoon-btn",displaygif);

function displaygif(){

  var cartoonName;
  cartoonName = $(this).attr("data-name")        
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0iQvSalSK4vJ19h4f8P5J2OYDPb9tRF1&q=" + cartoonName + "&limit=10&offset=0"
  


        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response){
          //console.log(response)

          var movieDiv = $("<div class='movie'>");

          // Storing the rating data
          var rating = response.Rated;

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          movieDiv.append(pOne);

          // Storing the release year
          var released = response.Released;

          // Creating an element to hold the release year
          var pTwo = $("<p>").text("Released: " + released);

          // Displaying the release year
          movieDiv.append(pTwo);

          // Storing the plot
          var plot = response.Plot;

          // Creating an element to hold the plot
          var pThree = $("<p>").text("Plot: " + plot);

          // Appending the plot
          movieDiv.append(pThree);

          // Retrieving the URL for the image
          var imgURL = response.Poster;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          movieDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#buttons-view").prepend(movieDiv);
        })

      }

    
