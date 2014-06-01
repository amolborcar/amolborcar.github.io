
$(function() {
	
	var techLinkClick = 0;
	var cultLinkClick = 0;
	var phaseZeroLinkClick = 0;

	// Load header -- NOTE: currently inactive

	// $('#header-bar').load('header.html');

	// activate tooltips via bootstrap
	$('[rel="tooltip"]').tooltip();

	// Show links on blog welcome page

	$('.showTechBlogLinks').click(function(e){

		techLinkClick += 1;

		if (techLinkClick % 2 == 1) {
			e.preventDefault();
			$('.techBlogLinks').slideDown();
			$(this).css({'background-color': '#FFFFD6'});
		}
		else {
			$('.techBlogLinks').slideUp();
			$(this).removeAttr('style')
		}
	});

	$('.showCultBlogLinks').click(function(e){

		cultLinkClick += 1;

		if (cultLinkClick % 2 == 1) {
			e.preventDefault();
			$('.cultBlogLinks').slideDown();
			$(this).css({'background-color': '#FFFFD6'});			
		}
		else {
			$('.cultBlogLinks').slideUp();
			$(this).removeAttr('style')
		}		  
	});

	// Show links on dbc projects welcome page

	$('.showPhaseZeroLinks').click(function(e){

		phaseZeroLinkClick += 1;

		if (phaseZeroLinkClick % 2 == 1) {
			e.preventDefault();
			$('.phaseZeroLinks').slideDown();
			$(this).css({'background-color': '#FFFFD6'});
		}
		else {
			$('.phaseZeroLinks').slideUp();
			$(this).removeAttr('style')
		}
	});



	// Highlight links on blog welcome page upon hovering
	// Unnecessary, done on CSS, but kept for reference...

	// $('.blogpost-link').hover(function() {
	// 	$(this).css({'background-color':'#FFFFD6'});
	// }, function() {
		
	// 	$(this).css({'background':'none'});
	// });

});