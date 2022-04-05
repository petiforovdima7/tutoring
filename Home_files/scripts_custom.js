jq(document).ready(function(){
	menu();
	mobileMenu();
	blog();
	courseContentCollapsibleItems();
});

function menu(){
	var elem = jq(".navbar-list-theme2");
	if (!elem.length) {
		return false;
	}

	if (jq(window).width() > 767) {
		jq('.navbar-list-theme2 li.has-children').hover(function () {
			clearTimeout(jq.data(this,'timer'));
			jq('> ul',this).stop(true,true).slideDown(200);
		 }, function () {
			jq.data(this,'timer', setTimeout(jq.proxy(function() {
				jq('> ul',this).stop(true,true).slideUp(200);
		   }, this), 100));
		});
	}	
}

function mobileMenu(){
	var elem = jq(".nav-mobile-trigger");
	if (!elem.length) {
		return false;
	}

	var menu = jq(".navbar-list-theme2-outer");

	elem.click(function(e){
		e.preventDefault();

		if (jq(this).hasClass('is-active')) {
			// Close
			menu.stop(true).slideUp(250);
			jq(this).removeClass("is-active");
		} else {
			// Open
			menu.stop(true).slideDown(250);
			jq(this).addClass("is-active");
		}
	});

	if (jq(".navbar-link-submenu-trigger").length) {
		jq(document).on("click", ".navbar-link-submenu-trigger", function(e){
			e.preventDefault();
			
			var menu = jq(this).parent().parent().find("> ul");
			if (jq(this).hasClass("active")) {
				// Open
				menu.stop(true).slideUp(250);
				jq(this).removeClass("active");
			} else {
				// Hide
				menu.stop(true).slideDown(250);
				jq(this).addClass("active");
			}
		});	
	}
}

function blog() {
	var elem = jq(".js-blog-slider");
	if (!elem.length) {
		return false;
	}

	elem.slick({
		arrows: false,
		dots: false,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000
	});
}

function courseContentCollapsibleItems() {
	var elem = jq(".js-course-content-trigger");
	if (!elem.length) {
		return false;
	}

	 elem.click(function(e){
		e.preventDefault();
		var panel = jq(this).next();

		if (jq(this).hasClass("active")) {
			// collapse
			panel.stop(true).slideUp();
			jq(this).removeClass("active");
		} else {
			// expand
			panel.stop(true).slideDown();
			jq(this).addClass("active");
		}
	});
}