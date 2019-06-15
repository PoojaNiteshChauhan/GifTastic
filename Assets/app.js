var topic = ["Mickey Mouse", "Popeye", " Donald Duck", "Snoopy", "Minnie Mouse", "Tom Cat", "Boo-Boo", "Jerry Mouse", "Tweety",];
var movie = $(this).attr("data-name");
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


function displayButton() {
    var cartoonButton = 0;
    for (i = 0; i < topic.length; i++) {
        cartoonButton = "<button class =\"btn\">"+ topic[i]+"</button>"
        $("#Buttons").append(cartoonButton);
       
        




    }
}

$( document ).ready(function() {
    displayButton();
    
});


$("#Buttons").on("click", function(event) {
    //event.preventDefault();
    var cartoonName ;
    cartoonName = $("#Buttons").text();
    console.log (cartoonName)


})



