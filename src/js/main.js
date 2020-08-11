/**
 * External libs
 */
import $ from 'jquery';
// import 'core-js/features/promise';

/**
 * Custom libs and functions
 */
import {handler} from './functions/handler.js';
import {viewport} from './functions/handler.js';

import {initMagnificInline} from './functions/initPopups.js';
import {initMagnificIframe} from './functions/initPopups.js';
import {initMagnificGallery} from './functions/initPopups.js';

import {initSLick} from './functions/initSliders.js';

import {mobileNavToggle} from './functions/utils.js';
import {dropDown} from './functions/utils.js';
import {removeToggle} from './functions/utils.js';
import {tabs} from './functions/utils.js';

$(window).on('load', function(){
	if(/iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('mobos ios');
	} else if(/Android|webOS|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('mobos');
	} else {
		$('body').addClass('web');
	}
	$('body').removeClass('loaded');
	// setTimeout(() => {
	// 	$('body').removeClass('loaded');
	// }, 1500);
	handler();
});

$(document).ready(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	}

	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	}

	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	}
	
	*/
	
	/* components */
	
	

});

$(window).on('resize', handler);

$(document).mouseup(function (e){
	// if($('.js-dropdown').hasClass('opened')){
	// 	var div = $('.js-dropdown');
	// 	if (!div.is(e.target) && div.has(e.target).length === 0) {
	// 		div.find('.js-dropdown__content').slideUp();
	// 		div.removeClass('opened');
	// 	}
	// }
});