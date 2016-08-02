(function($){
	function prefix(el){
		var prefixes = ["Webkit", "Moz", "O", "ms"];
		for (var i = 0; i < prefixes.length; i++){
			if (prefixes[i] + "Transition" in el.style){
				return '-'+prefixes[i].toLowerCase()+'-';
			};
		};
		return "transition" in el.style ? "" : false;
	};
	var methods = {
		init: function(settings){
			return this.each(function(){
				var config = {
					slideDur: 7000,
					fadeDur: 800
				};
				if(settings){
					$.extend(config, settings);
				};
				this.config = config;
				var $container = $(this),
					slideSelector = '.slide',
					fading = false,
					slideTimer,
					activeSlide,
					newSlide,
					$slides = $container.find(slideSelector),
					totalSlides = $slides.length,
					$pagerList = $container.find('.pager_list');
					prefix = prefix($container[0]);
                function animateSlides(activeNdx, newNdx){
					function cleanUp(){
						$slides.eq(activeNdx).removeAttr('style');
						activeSlide = newNdx;
						fading = false;
						waitForNext();
					};
					if(fading || activeNdx == newNdx){
						return false;
					};
					fading = true;
					$pagers.removeClass('active').eq(newSlide).addClass('active');
					$slides.eq(activeNdx).css('z-index', 3);
					$slides.eq(newNdx).css({
						'z-index': 2,
						'opacity': 1
					});
					if(!prefix){
						$slides.eq(activeNdx).animate({'opacity': 0}, config.fadeDur,
						function(){
							cleanUp();
