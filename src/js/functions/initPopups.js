import $ from 'jquery';
import 'magnific-popup';

var startWindowScroll = 0;

export function initMagnificInline(triggerItems) {
	if(triggerItems.length){
		triggerItems.magnificPopup({
			fixedBgPos: true,
			fixedContentPos: true,
			showCloseBtn: true,
			removalDelay: 0,
			preloader: true,
			type:"inline",
			mainClass: 'mfp-fade mfp-s-loading',
			galery: {enabled: true},
			callbacks: {
				beforeOpen: function() {
					startWindowScroll = $(window).scrollTop();
				},
				open: function(){
					//initSliders
	
					if ( $('.mfp-content').height() < $(window).height() ){
						$('body').on('touchmove', function (e) {
							e.preventDefault();
						  });
					}
				},
				close: function() {
					//destroySliders
	
					$(window).scrollTop(startWindowScroll);
					$('body').off('touchmove');
				}
			}
		});
	}
}

export function initMagnificGallery(popupGalleryItems, popuGalleryTriggerSelector) {
	if(popupGalleryItems.length) {
		for(let i = 0; i < popupGalleryItems.length; i++) {
			popupGalleryItems.eq(i).magnificPopup({
				delegate: popuGalleryTriggerSelector,
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile mfp-with-zoom',
				fixedBgPos: true,
				fixedContentPos: true,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1],
					tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + `<p>${item.el.attr('data-text')}</p>`;
					}
				},
				zoom: {
					enabled: true,
					duration: 300
				},
				overflowY: 'auto',
				callbacks: {
					// Utils.magnificPopupConfiguration()
					beforeOpen: function() {
						startWindowScroll = $(window).scrollTop();
					},
					open: function(){
						if ( $('.mfp-content').height() < $(window).height() ){
							$('body').on('touchmove', function (e) {
								e.preventDefault();
							  });
						}
					},
					close: function() {
						$(window).scrollTop(startWindowScroll);
						$('body').off('touchmove');
					}
				}
			});
		}
	}
}

export function initMagnificIframe(popupIframeItem) {
	if(popupIframeItem.length) {
		popupIframeItem.magnificPopup({
			fixedBgPos: true,
			fixedContentPos: true,
			showCloseBtn: true,
			removalDelay: 300,
			preloader: true,
			type:"iframe",
			mainClass: 'mfp-fade mfp-s-loading',
			galery: {enabled: true},
			callbacks: {
				beforeOpen: function() {
					startWindowScroll = $(window).scrollTop();
				},
				open: function(){
					//initSliders

					if ( $('.mfp-content').height() < $(window).height() ){
						$('body').on('touchmove', function (e) {
							e.preventDefault();
						});
					}
				},
				close: function() {
					//destroySliders

					$(window).scrollTop(startWindowScroll);
					$('body').off('touchmove');
				}
			}
		});
	}
}

// function initSliders(){
// 	$('.js-popupMainSlider').slick({
// 		dots: false,
// 		arrows: false,
// 		adaptiveHeight: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		asNavFor: '.js-popupTabs',
// 		fade: true,
// 		cssEase: 'linear',
// 	}).resize();
		
// 	$('.js-popupNavSlider').slick({
// 		dots: false,
// 		arrows: false,
// 		focusOnSelect: true,
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		vertical: true,
// 		asNavFor: '.js-popupTabContent',
// 		fade: false,
// 		responsive: [
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					vertical: false,
// 				},
// 			}
// 		]
// 	}).resize();
// }

// function destroySliders(){
// 	$('.js-popupMainSlider').slick('unslick');
// 	$('.js-popupNavSlider').slick('unslick');
// }