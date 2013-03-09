(function($) {
	$.fn.tap = function(onTapListener) {
		var touchel;
		var start = function(x,y) {
			touchel = document.elementFromPoint(x,y);
		};
		
		var end = function(x,y,that,e) {
			var etouchel = document.elementFromPoint(x,y);
			if(etouchel!=touchel) return;
			
			onTapListener.call(that,e);
		};
		return this.each(function() {
			$(this).on({
				touchstart:function(e) {
					start(e.originalEvent.changedTouches[0].pageX,e.originalEvent.changedTouches[0].pageY);
				},
				touchend:function(e) {
					end(e.originalEvent.changedTouches[0].pageX,e.originalEvent.changedTouches[0].pageY,this,e);
				}
			});
		});
	};
})(jQuery);