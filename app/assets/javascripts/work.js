$(document).ready(function() {
	if (!$.support.transition)
		  $.fn.transition = $.fn.animate;
	$('#srdes').clone().removeClass('hide').addClass('show').appendTo('#sitecontainer');
	$('#imgcont').append("<img src=\"/assets/view/rsz_new_sdes.jpg\" />");	
	$('.rightarrow').css('opacity','0');
	var leftIndex = 3;
	var rightIndex = 0;
	$('.sitemenu li').mouseenter(function(){	
		$(this).bind('mouseout',function(){
			$(this).unbind('mouseout');
			$(this).unbind('click');
			return false;
		});		
		
		if (!$(this).hasClass("selected"))
		{
			$(this).bind('click',function(){
				$(this).unbind('mouseout');
				var index = $(this).index();
				$('.sitemenu li').each(function(){
					if ($(this).index() != index) {
						$(this).removeClass('selected');
					}
				});
				$(this).addClass('selected');
				openpage($(this));
				$(this).unbind('click');
				return false;
			});
		}
		return false;
	});
	$(".sitemenu-xs a").on("click", function() {
		openpage($(this));
	});
	$('.left img').mouseenter(function(){
		$(this).css('zIndex','2');
		$(this).transition({x: '15px',scale: 2,queue: false, delay:100},100);
	});
	$('.left img').bind('click',function() {
		var $url = $(this).attr('src').substring();
		var url = $url.replace("thumbs","view");
		url = url.replace("png","jpg");
		$('#imgcont').transition({opacity: 0, scale: .95},200);
		var correct = isDescRight($url);
		if (correct > 0)
			$('#sitecontainer').transition({opacity: 0, scale: .9},200);
		setTimeout(function() {
			$('#imgcont').empty();
			$('#imgcont').append("<img src=\"" + url + "\" />");
			if (correct > 0)
				goToDescription($url);
			$('#imgcont').transition({opacity: 1, scale: 1},200);
		},200);
	});
	$('.left img').mouseout(function(){
		$(this).transition({x: '0px', scale: 1,queue: false},100);
		$(this).css('zIndex','0');
		$(this).css('-webkit-transform','');
		$(this).css('transform','');
	});	
	$('.right img').mouseenter(function(){
		$(this).css('zIndex','2');
		$(this).transition({x: '-15px',scale: 2,queue: false, delay:100},100);
	});
	$('.right img').bind('click',function() {
		var $url = $(this).attr('src').substring();
		var url = $url.replace("thumbs","view");
		url = url.replace("png","jpg");
		$('#imgcont').transition({opacity: 0, scale: .95},200);
		$('#sitecontainer').transition({opacity: 0, scale: .9},200);
		setTimeout(function() {
			$('#imgcont').empty();
			$('#imgcont').append("<img src=\"" + url + "\" />");	
			goToDescription($url);
			$('#imgcont').transition({opacity: 1, scale: 1},200);
		},200);
	});
	$('.right img').mouseout(function(){
		$(this).transition({x: '0px', scale: 1,queue: false},100);
		$(this).css('zIndex','0');
		$(this).css('-webkit-transform','');
	});	
});
function openpage(ele)
{
	var link = $.trim(ele.text());
	$('#sitecontainer').empty();
	if (link == "DataSecure Testing") {
		$('#datasecure').clone().removeClass('hide').addClass('show').appendTo('#sitecontainer');
		$('#dataimgindex').click();
	}
	else if (link == "MyVitalSigns"){
		$('#mvs').clone().removeClass('hide').addClass('show').appendTo('#sitecontainer');
		$('#mvsimgindex').click();
	}
	else if (link == "KULA"){
		$('#kula').clone().removeClass('hide').addClass('show').appendTo('#sitecontainer');
		$('#kulaimgindex').click();
	}
	else if (link == "Novus Sto. Reports"){
		$('#novus').clone().removeClass('hide').addClass('show').appendTo('#sitecontainer');
		$('#novusimgindex').click();
	}
	else if (link == "Doctor Zeus"){
		$('#doctorzeus').clone().removeClass('hide').addClass('show').clone().appendTo('#sitecontainer');
		$('#docimgindex').click();
	}
	else if (link == "Energy Yardstick"){
		$('#sdes').clone().removeClass('hide').addClass('show').clone().appendTo('#sitecontainer');
		$('#sdesimgindex').click();
	}
	$('#sitecontainer').transition({opacity: 1, scale: 1},200);

	return false;
}
function isDescRight(name) {
	var cur = $('#sitecontainer').children().first().attr('id');
	if (name.indexOf(cur) != -1)
		return -1;
	return 1;
}
function goToDescription(name) {
	$('#sitecontainer').empty();
	if (name.indexOf("datasecure") != -1)
		$('#datasecure').clone().removeClass('hide').addClass('show').appendTo('#sitecontainer');
	else if (name.indexOf("doctorzeus") != -1)
		$('#doctorzeus').clone().removeClass('hide').addClass('show').clone().appendTo('#sitecontainer');
	else if (name.indexOf("kula") != -1)
		$('#kula').clone().removeClass('hide').addClass('show').clone().appendTo('#sitecontainer');
	else if (name.indexOf("novus") != -1)
		$('#novus').clone().removeClass('hide').addClass('show').clone().appendTo('#sitecontainer');
	else if (name.indexOf("vitalsigns") != -1)
		$('#mvs').clone().removeClass('hide').addClass('show').clone().appendTo('#sitecontainer');
	$('#sitecontainer').transition({opacity: 1, scale: 1},200);
	return false;
	
}
function isActive(ele) {
	var active = $('#sitecontainer .worktitle').text();
	if (active.indexOf("DATASECURE") !== -1 && ele.indexOf("DataSecure") !== -1)
		return true;
	else if (active.indexOf("NOVUS") !== -1 && ele.indexOf("Novus") !== -1)
		return true;
	else if (active.indexOf("VITAL") !== -1 && ele.indexOf("Vital") !== -1)
		return true;
	else if (active.indexOf("MIDDLETIER") !== -1 && ele.indexOf("MiddleTier") !== -1)
		return true;
	else if (active.indexOf("CARD") !== -1 && ele.indexOf("KULA") !== -1)
		return true;
	else if (active.indexOf("DOCTOR") !== -1 && ele.indexOf("Doctor") !== -1)
		return true;
	else
		return false;	
}