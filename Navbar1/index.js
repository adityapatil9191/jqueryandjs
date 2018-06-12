$(document).ready(function (argument) {
	$(".paraone").hide();
	$(".paratwo").hide();
	$(".parathree").hide();
	$(".titleone").click(function(){
		
		$(".paraone").show(300);
		$(".paratwo").hide(300);
		$(".parathree").hide(300);
	
	});
	$(".titletwo").click(function(){
		
		$(".paratwo").show(300);
		$(".paraone").hide(300);
		$(".parathree").hide(300);
	
	});
	$(".titlethree").click(function(){
		
		$(".parathree").show(300);
		$(".paraone").hide(300);
		$(".paratwo").hide(300);
	
	});


})