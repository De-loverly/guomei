window.onload=function(){
	
	$("img").lazyload({
	 	   effect : "fadeIn",
	 	   event:"scroll",
	 	   threshold:200
	 });
}