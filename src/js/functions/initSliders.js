import $ from 'jquery';
import 'slick-carousel';

export function initSLick (slickItem, slickVars) {
	slickItem.slick(slickVars).resize();
}