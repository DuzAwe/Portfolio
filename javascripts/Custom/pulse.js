	$(window).load(function(){
	$(function () {
  	  function run_animation($element, delay, duration) {
     	   $element.delay(delay).fadeToggle(duration, function () {
     	       run_animation($element, delay, duration);
     	       });
     	       }
     	       run_animation($('.pulse').delay(4000), 200, 900);

     	       });
     	       });