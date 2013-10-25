
$(document).ready(function() { 
	

	$(".next").on("click",function() {
		var clicknext = $(this).attr("href");
		console.log(clicknext);
		$.get('/getlocation',{location:clicknext}, function(data){
			console.log(data);//map the properties of data - blurb title and next
			$("h1").text(data.title);
			$("p").text(data.blurb);
			$("a").attr("href", data.next);
		              
		});
		return false
	});



});

