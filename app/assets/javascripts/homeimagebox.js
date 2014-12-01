$(document).ready(function(){
	$('.blur').bind('mouseenter',function(){
		$(this).transition({opacity: 1, queue: false},200);
		$(this).next().transition({y: '-=10',color: '#18bc9c', queue: false},150);
		$(this).bind('mouseout',function() {
			$(this).transition({opacity: .5, queue: false},200);
			$(this).next().transition({y: '+=10',backgroundColor: '',color: 'white', queue: false},150);
			$(this).unbind('mouseout');
			$(this).unbind('click');
			return false;
		});
		$(this).bind('click',function(){
			var id = $(this).attr('id');
			if (id == "workimg")
				window.location = "work";
			else if (id == "aboutimg")
				window.location = "about";
			else if (id == "resumeimg")
				window.location = "resume";
		});
		return false;
	});
});