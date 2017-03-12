


var topics = ["Larry Bird", "Shaquille O'Neal", "Kobe Bryant", "Stephen Curry", "Spud Webb", "Yao Ming", "Kevin Durant", "Kevin Garnett", "Michael Jordan", "Kareem Abdul Jabbar", "Chris Paul", "Dwayne Wade", "Dwight Howard"];

var button;


for(i = 0; i < topics.length; i++) {
     button = $("<button type=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("data",topics[i]);
     $("#buttonArea").append(button);
     
};


  // 3.When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

$(".btn-warning").on("click", function(){
  		var thing = $(this).attr("data");
  		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=dc6zaTOxFJmzC&limit=10";



  		$.ajax({
  			url: queryURL,
  			method: "GET" 

  		}).done(function(response){
  			console.log(response);
  			
          	var results = response.data;

          	for (var i = 0; i < results.length; i++) {

          	var topicDiv = $("<div>");
 			var p = $("<p>");

 			p.text(results[i].rating);

 			var p = $("<p>").text("Rating: " + results[i].rating);

 			var topicImage = $("<img>").addClass("orangeBorder");

 			topicImage.attr("src", results[i].images.fixed_height_still.url);
 			topicImage.attr("data-still", results[i].images.fixed_height_still.url);
 			topicImage.attr("data-animate", results[i].images.fixed_height.url)
 			topicImage.attr("data-state", "still")
 			topicImage.addClass("gif");
 			
 			// add still version of the image 

 			topicDiv.append(topicImage);

 			topicDiv.append(p); 			

 			$("#gifArea").prepend(topicDiv);

 			}
  		})
  })

  

  // 4.When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

  $("#gifArea").on("click", ".gif", function(event){
  	event.preventDefault();
  	

  	var state = $(this).attr("data-state");
  	console.log(state);
  	if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

  })

  
  // 5.Under every gif, display its rating (PG, G, so on).

  // 6.Add a form to your page takes the value from a user input box and adds it into your  topics  array. Then make a function call that takes each topic in the array remakes the buttons on the page.

  var newTopic = "";

  $(".submit").on("click", function(event){
  	event.preventDefault();
  	console.log("submit");

  	newTopic = $("#topic-input").val();

  	topics.push(newTopic);
  	console.log(topics);
  	buttonGenerator();
  });



  var buttonGenerator = function (){
  	 $("#buttonArea").empty();
	 for(i = 0; i < topics.length; i++) {
     button = $("<button type=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("data",topics[i]);
     $("#buttonArea").append(button);
     
  };
}

 
