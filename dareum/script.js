$(document).ready(function() {
	
	$('h1').click(function() {
			if ($(this).hasClass('seed')) {
			$(this).removeClass('seed').addClass('grass').text('풀')	
		}	else if($(this).hasClass('grass')) {
			$(this).removeClass('grass').addClass('tomato').text('토마토')
		}	else if($(this).hasClass('tomato')) {
			$(this).removeClass('tomato').addClass('tree').text('나무')
		}	else if($(this).hasClass('tree')) {
			$(this).removeClass('tree').addClass('seed').text('씨앗')
		}	
	});

	$('body').click(function() {
	
		$('.star').each(function() {
			$(this).css({
				'top': Math.random() * $(document).height(),
				'left': Math.random() * $(document).width()
			}).fadeIn();

			// $(this).css({
			// 	'animation': Math.random() * .s,
			// }).fadeIn();

		});

		$('.cloud').css({
			'top': Math.random() * $(document).height(),
			'left': Math.random() * $(document).width()
		}).fadeIn();	

	});

});