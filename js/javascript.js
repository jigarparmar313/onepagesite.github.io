(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});






















// images at one page css




// brands images 

(function() {
	/*  
	...customise bootstrap carousel 
	...change bootstrap carousel interval
	*/
	$('#carousel-item').carousel({
	  interval: 4000
	});
  }());
  
  (function() {
	$('.carousel-multiItem  .item').each(function() {
	  var itemToClone = $(this);
	  /*
	  .....number  of item show  in slide  !
	  */
	  for (var i = 1; i < 3; i++) {
		/* 
		  ..... go to the  next  item  in curasol 
		*/
		itemToClone = itemToClone.next();
  
		/*  ....
		  when that  item is last  item  in cauarsol-item  do this choos first sibling item and 
		   go to do  add it , clone, add class, and add to collection
		*/
  
		/*    else..... 
			  skip this  condition and go to  add item content  and  clone it ....
		*/
  
		if (!itemToClone.length) {
		  itemToClone = $(this).siblings(':first');
		}
  
		/* 
		  .... show the first-child in item class  " this div contain the content inside in" 
		  ... then clone this selector "clearly meaning copy the data"
		  ...  and give  it tha css style 
		  ...  then add it  to collection in slide 
		*/
		itemToClone.children(':first-child').clone()
		  .addClass("cloneditem-" + (i))
		  .appendTo($(this));
  
		$(".carousel-multiItem ").find(".item").css("transition", "   500ms ease-in-out all  ").css("transition", "  500ms ease-in-out all").css("backface-visibility", "visible").css("transform", "none!important")
  
		/*
		 .... you  can  use  bootstrap function  if you used bootstrap CDN 
		 .... but iam used  always  bootstrap.min.js   so  i do  this 
		
		 .... @media all and (min-width: 768px) and (transform-3d),
			 all and (min-width: 768px) and (-webkit-transform-3d)
		
		*/
  
	  }
	});
  }());




//   all images careseal

