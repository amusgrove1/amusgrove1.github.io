$(document).ready(function() {
	console.log("boop");
	$(".myBtn").click(
		function() {
			console.log("meow");
			var fileName = "https://amusgrove1.github.io/json/" + $(this).attr("title") + ".json";
			
			$.getJSON(fileName, function(data) {
				
				$.each(data, function() {
					$.each(this, function(key, value) {
						$(".modal-body").text("");
						$(".modal-body").append(
							"<h1>" + value.name + "</h1>" + 
							"<img src='" + value.image + "'>" +
							"<h2>" + value.price + "</h2>" + 
							"<p>" + value.description + "</p>" 
						);
						console.log("hello world");
						
						$("#myModal").modal();
						
						
					});
				}); 
			});
		}
	); // end click
}); // end ready






