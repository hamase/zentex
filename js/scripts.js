$(document).ready(function() {
	
	//kasra begin
	$('#items li').hover(function(e){
	    //mouse over
	    $(this).stop().animate({marginTop: '-5px'}, 120, function(){
	        wobble(e, 2);
	    });
	}, function(){
	    //mouse out
	    $(this).stop().animate({marginTop: '0'}, 120);
	});

	function wobble(e, amount){
	    $(e.target).animate({marginTop: amount + 'px'}, function(){
	        wobble(e, -amount);
	    });
	}$('#items li').hover(function(e){
	    //mouse over
	    $(this).stop().animate({marginTop: '-5px'}, 120, function(){
	        wobble(e, 2);
	    });
	}, function(){
	    //mouse out
	    $(this).stop().animate({marginTop: '0'}, 120);
	});
	//kasra end

	//hamase begin
	//show search text box
	$('#searchinout').find('.search-img').click(function(){
	    $('#expandbox').toggle('slow');
	    $('.search-img').css({'display': 'inline-block'});
	});

	//flickity
	$('.main-gallery').flickity({
 		// options
 		cellAlign: 'right',
 		contain: true,
 		pageDots: false,
		wrapAround: true
 	});
	//hamase end
})