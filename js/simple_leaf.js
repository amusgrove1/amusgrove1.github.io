$(document).ready(function() {
	$(".myBtn").click(
		function() {
			console.log("meow");
			var fileName = "json/" + $(this).attr("title") + ".json";
			$.getJSON(fileName, function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						$(".modal-body").text("");
						$(".modal-body").append(
							"<h1>" + value.name + "</h1>" + 
							"<img src='" + value.image + "'>" +
							"<h2>" + value.price + "<br>" + value.speaker + "</h2>" + 
							"<p>" + value.description + "</p>" 
						);
						
						$("#myModal").modal();
						
						console.log("hello world");
					});
				}); 
			});
		}
	); // end click
}); // end ready






