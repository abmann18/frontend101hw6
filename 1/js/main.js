//defining the function showTheTotal

function showTheTotal(){
	var value1 = ".value1";
	var value2 = ".value2";
	var value3 = ".value3";
	var allValues = (value1 * value2 * value3); 

	$(".total").click(function(){
		$(".showingTotal").show();
			$(".totalAmount").val(allValues);
	});

}


//invoking the function showTheTotal

$(function(){
	showTheTotal();
});