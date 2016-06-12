var main = function(){
	$('div').on('click', function(){
		$(this).toggleClass('col-xs-12 container col-xs-offset-1 active');
		$('body').toggleClass('bactive');
		$('body').animate({scrollTop: $(this).offset().top}, 300);
		$(this).toggleClass('margindiv');
	});

	$('.strength').on('click', function(){
		document.getElementById('str').disabled = false;
	});
	$('.weakness').on('click', function(){
		document.getElementById('wea').disabled = false;
	});
	$('.opportunity').on('click', function(){
		document.getElementById('opp').disabled = false;
	});
	$('.threat').on('click', function(){
		document.getElementById('thr').disabled = false;
	});

	$(document).keyup(function(e){
		if(e.keyCode == 27){
			$('div').removeClass('col-xs-offset-1 col-xs-8 active');
			$('div').addClass('col-xs-6');
			$('body').removeClass('bactive');
			document.getElementById('str').disabled = true;
			document.getElementById('wea').disabled = true;
			document.getElementById('opp').disabled = true;
			document.getElementById('thr').disabled = true;
		}
	});
};

$(document).ready(main);
