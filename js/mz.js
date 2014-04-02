/*
***************************************
*  designed by MATTHEW ZIPKIN 2012    *
* matthew(dot)zipkin(at)gmail(dot)com *
***************************************
*/

// ***** runs on page load
$(window).load(function(){
	$("#topmenu li").click(function(){
		var subid = $(this).attr('id');
		if ((subid != 'fun' ) && (subid != 'web'))
			$("#subc").slideDown('fast');
		else
			$("#subc").slideUp('fast');
		$(".submenu").css('display', 'none');
		$("#" + subid + "menu").slideDown('fast');
		$("#topmenu li").removeClass('selected');
		$("#" + subid).addClass('selected');
	
		$(".introcontent").slideUp('fast');
		$(".infocontent").slideUp('fast');
		$("#" + subid + "intro").slideDown('fast');
		$(".submenu li").removeClass('selected');
	});

	$(".submenu li").click(function(){
		var infoid = $(this).attr('id');
		if ((infoid == "milo") || (infoid == "funzap") || (infoid == "illness"))
			return true;
		$(".infocontent").slideUp('fast');
		$("#" + infoid + "info").slideDown('fast');
		$(".submenu li").removeClass('selected');
		$("#" + infoid).addClass('selected');
		$("#info li").removeClass('selected');
		$(".target").html('');				
	});

	$("#info li").click(function(){
		var itemid = $(this).attr('id');
		$("#info li").removeClass('selected');
		$("#" + itemid).addClass('selected');
	});

	for( var i = 1; i <= 20; i++){
		var logopic = "<img src='images/clients/" + i + ".jpeg' style='width:75px;border-radius:15px;margin:5px;'>";
		$("#broadcastclients").append(logopic);
		if ((i % 5) == 0){
			$("#broadcastclients").append("<br>");
		}
	}
	
	$("li").click(function(){
		$("#returnHome").slideDown('fast');
	});

	$("#returnHome").click(function(){
		$("#returnHome").slideUp('fast');
		returnHome();
	});

	$("#blogFrame").slideDown();
	$("#info").css('background-image','none');

});

// ***** loads a vimeo video into pre-fab iframe template
function vimeoload(video, where)
{
	var newvimeo = "<iframe src='http://player.vimeo.com/video/" + video + "?title=0&amp;byline=0&amp;portrait=0&amp;color=d08932' width='500' height='281' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>";
	$("#" + where + "infotarget").html(newvimeo);
}

// ***** loads a soundcloud player into pre-fab iframe template
function soundload(song, where)
{
	var newplayer = "<iframe width='100%' height='166' scrolling='no' frameborder='no' src='http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F" + song + "&amp;auto_play=false&amp;show_artwork=true&amp;color=d08932'></iframe>";
	$("#" + where + "infotarget").html(newplayer);
}

function returnHome()
{
	$("#subc").slideUp('fast');
	$(".infocontent").slideUp('fast');
	$("#defaultinfo").slideDown('fast');
	$(".submenu li").removeClass('selected');
	$("#topmenu li").removeClass('selected');

}

