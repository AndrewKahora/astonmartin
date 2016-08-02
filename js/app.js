$(document).ready(function(){
		var counter=0;
		$('#fslider li').css('opacity','0');
		$('#fslider li:eq('+counter+')').css('opacity','1');

		setInterval(function(){
			$('#fslider li:eq('+counter+')').animate({opacity:0}, 1000);
			counter++;
			counter = (counter > ($('#fslider li').size() - 1))?0:counter;
			$('#fslider li:eq('+counter+')').animate({opacity:1}, 1000);
		}, 2000);
	})
