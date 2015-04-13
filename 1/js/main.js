$(document).ready(function(){
	$(window).load(function(){

		$("input").keyup(multiplyInputs);
  			function multiplyInputs() {
       			var multiply = 0;

       	$("input").each(function () {           
        	var $textfield1 = $('.value1', this).val();
         	var $textfield2 = $('.value2', this).val();
        	var $textfield3 = $('.value3', $(this).next()).val();

        	var $total = $value1 * $value2 * $value3;

	     	});

       $("#grandTotal").text(multiplyInputs);
   }
	});
});