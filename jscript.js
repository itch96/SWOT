var main = function(){
	
	$('div').on('click', function(){
		$(this).toggleClass('col-xs-12 container col-xs-offset-1 active');
		$('body').toggleClass('bactive');
		$('body').animate({scrollTop: $(this).offset().top}, 300);
		$(this).toggleClass('margindiv');
	});

	//For the press of esc key 
	$(document).keyup(function(e){
		if(e.keyCode == 27 ){
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
		document.getElementById('str').focus();
	});
	$('.weakness').on('click', function(){
		document.getElementById('wea').disabled = false;
		document.getElementById('wea').focus();
	});
	$('.opportunity').on('click', function(){
		document.getElementById('opp').disabled = false;
		document.getElementById('opp').focus();
	});
	$('.threat').on('click', function(){
		document.getElementById('thr').disabled = false;
		document.getElementById('thr').focus();
	});
};

$(document).ready(main);
