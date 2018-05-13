$(document).ready(function() {
	
	$(".myBtn").click(
		function() {
			
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
	
	$("#email_form").validate({
		rules: {
			first_name: {
				required: true,
				minlength: 2
			},
			last_name: {
				required: true,
				minlength: 2
			},
			email_1: {
				required: true,
				email: true
			},
			phone: {
				digits:true,
				minlength: 10,
				maxlength: 10
			}
		
			
		},
		
		messages: {
		
		first_name: {
			minlength: "Please enter at least 2 characters"
				
		},
		last_name: {
			
			minlength: "Please enter at least 2 characters"
	    },
		
		phone: {
			minlength:"Please enter your 10-digit phone number",
			maxlength:"Please only enter you 10-digit phone number"
		}
		}
	
		
	}); // end validate
	});// end ready





