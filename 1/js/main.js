//defining the function showTheTotal

function showTheTotal(){
	var value1 = $(".value1 input").val();
	var value2 = $(".value2 input").val();
	var value3 = $(".value3 input").val();
	var allValues = value1 * value2 * value3; 

	$(".showingTotal").onclick(function(){
		(".totalAmount").show();
	});
}


//invoking the function showTheTotal

$(document).ready(function(){
	showTheTotal()
});

