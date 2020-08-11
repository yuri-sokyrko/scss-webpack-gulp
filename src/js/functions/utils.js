import $ from 'jquery';

export function mobileNavToggle(dropDownBtn, navItem) {
	dropDownBtn.toggleClass('active');
	removeToggle(navItem);
}

export function dropDown(dropDownBtn) {
	dropDownBtn.toggleClass('active');
	var toggleBlock = dropDownBtn.parent().find('.js-dropdown');
	removeToggle(toggleBlock);
}

export function removeToggle(toggleBlock) {
	toggleBlock.slideToggle(300, function() {
		if ($(this).css('display') === 'none') {
			$(this).removeAttr('style');
		}
	});
}

export function tabs(containerName, buttonName, itemName) {
	let container = $(containerName);
    if(container.length) {
		container.each(function() {
			let tabItem = $(this).find(itemName),
				tabButton = $(this).find(buttonName);
			tabItem.eq(0).addClass('active').show();
			tabButton.eq(0).addClass('active').show();
		});

		let button = $(buttonName);

		button.click(function() {
			$(this).addClass('active');
			$(this).siblings(buttonName).removeClass('active');
			$(this).siblings(itemName).removeClass('active').hide();
			$(this).next(itemName).addClass('active').fadeIn();
		});
	}
}