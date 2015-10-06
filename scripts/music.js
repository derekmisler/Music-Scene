// This gets the scroll position for the events calendar
var scrollTop = function(scrollingElement, scrolled) {
	scrollingElement.scroll( function() {
		scrolled = $(this).scrollTop();
	});
};

$(document).ready( function() {

	var eventScrolled = 0,
	mainContent = $("#l-mainContent"),
	scrollButton = $("#l-mainContent .catHeading");
	
	scrollTop(mainContent,eventScrolled);

	scrollButton.on("click", function() {
		eventScrolled = eventScrolled + 358;
		mainContent.animate({ scrollTop: eventScrolled });
	});
});