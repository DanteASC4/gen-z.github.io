var i = 0;
srcLinks = ["https://secure.static.tumblr.com/dc40823055c62742b840a1f36fe3a059/rse8v7p/Ckfnrb4gf/tumblr_static__640_v2.gif","http://25.media.tumblr.com/99cbcdc1b112fa1fad105fd5bcec77eb/tumblr_mz3r7taEcg1rqess5o1_500.gif", "https://media4.giphy.com/media/dh6120qvBRyda/200_s.gif"];
$("#circle1").click( function(){
	i=0;
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
});
$("#circle2").click( function(){
	i = 1;
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
});
$("#circle3").click( function(){
	i=2;
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
});
$("#circle4").click( function(){
	i=3;
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
});
setTimeout(function() {
		   if(i>3){
				i += 1;
			}
			else {
				i=0;
			}
		   }, 5000)