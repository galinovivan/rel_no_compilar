



$(document).ready(function() {
	var menu = {
		slideMenu: $('#mobileNav'),
	    toggle: $('#mobileMenuToggle'),
		closeToggle: $('#buttonClose'),
		newClass: 'visible-menu',
		changeMenu: function() {
			if (menu.slideMenu.hasClass(menu.newClass)) {
				menu.slideMenu.removeClass(menu.newClass)
			} else {
				menu.slideMenu.addClass(menu.newClass);
			}
		}
	};

menu.toggle.click(function(event) {
	menu.changeMenu();
	event.preventDefault();

});
	menu.closeToggle.click(function(event) {
		menu.changeMenu();
		event.preventDefault();
	});

	menu.toggle.on('tap', function(event) {
     menu.changeMenu();
		event.preventDefault();
	});
	menu.closeToggle.on('tap', function(event) {
		menu.changeMenu();
		event.preventDefault();
	});


});