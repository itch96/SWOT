var main = function(){
	
	$('div').on('click', function(){
		$(this).addClass('col-xs-12 container col-xs-offset-1 active');
		$('body').addClass('bactive');
		$('body').animate({scrollTop: $(this).offset().top}, 300);
		$(this).addClass('margindiv');
	});
	$('div').on('mouseleave', function(){
		$(this).removeClass('col-xs-12 container col-xs-offset-1 active');
		$('body').removeClass('bactive');
		$(this).removeClass('margindiv');
	});

	//For the press of esc key 
	$(document).keyup(function(e){
		if(e.keyCode == 27){
			$('div').removeClass('col-xs-12 container col-xs-offset-1 active');
			$('body').removeClass('bactive');
			$('div').removeClass('margindiv');
			document.getElementById('str').disabled = true;
			document.getElementById('wea').disabled = true;
			document.getElementById('opp').disabled = true;
			document.getElementById('thr').disabled = true;
		}
	});

	$('.strength').on('click', function(){
		document.getElementById('str').disabled = false;
	});
	$('.strength').on('mouseleave', function(){
		document.getElementById('str').disabled = true;
	});

	$('.weakness').on('click', function(){
		document.getElementById('wea').disabled = false;
	});
	$('.weakness').on('mouseleave', function(){
		document.getElementById('wea').disabled = true;
	});

	$('.opportunity').on('click', function(){
		document.getElementById('opp').disabled = false;
	});
	$('.opportunity').on('mouseleave', function(){
		document.getElementById('opp').disabled = true;
	});

	$('.threat').on('click', function(){
		document.getElementById('thr').disabled = false;
	});
	$('.threat').on('mouseleave', function(){
		document.getElementById('thr').disabled = true;
	});
};

$(document).ready(main);
