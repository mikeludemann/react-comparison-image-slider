import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './comparisonImageSlider.css';

class ComparisonImageSlider extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount(){

		function comparisonImagesSlider(elements, leftImage, rightImage) {

			var x,
			i;

			document.querySelector(elements).innerHTML = '<div class="comparison__image__container"><div class="comparison__image__img"><img src="' + rightImage + '"/></div><div class="comparison__image__img comparison__image__overlay"><img src="' + leftImage + '"/></div></div>';

			function compareImages(img, classElement) {

				var slider,
					toggleClick = 0,
					w,
					h;

				w = img.offsetWidth;
				h = img.offsetHeight;

				img.style.width = (w / 2) + "px";

				slider = document.createElement("DIV");
				slider.setAttribute("class", classElement);

				img.parentElement.insertBefore(slider, img);

				slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
				slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

				slider.addEventListener("mousedown", sliderReady);

				window.addEventListener("mouseup", sliderFinish);

				slider.addEventListener("touchstart", sliderReady);

				window.addEventListener("touchstop", sliderFinish);

				function sliderReady(e) {

					e.preventDefault();

					toggleClick = 1;

					window.addEventListener("mousemove", sliderMoving);
					window.addEventListener("touchmove", sliderMoving);

				}

				function sliderFinish() {

					toggleClick = 0;

				}

				function sliderMoving(e) {

					var pos;

					if (toggleClick === 0) return false;

					pos = getCursorPosition(e)

					if (pos < 0) pos = 0;
					if (pos > w) pos = w;

					sliderPosition(pos);

				}

				function getCursorPosition(e) {

					var a,
						x = 0;

					e = e || window.event;

					a = img.getBoundingClientRect();

					x = e.pageX - a.left;

					x = x - window.pageXOffset;

					return x;

				}

				function sliderPosition(x) {

					img.style.width = x + "px";

					slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";

				}

			}

			x = document.querySelectorAll(".comparison__image__overlay");

			for (i = 0; i < x.length; i++) {

				compareImages(x[i], "comparison__image__slider");

			}

		}

		comparisonImagesSlider("." + this.props.element, this.props.imageLeft, this.props.imageRight);

	}

	render() {
		return (
			<div className={this.props.element}></div>
		)
	}
}

ComparisonImageSlider.propTypes = {
	element: PropTypes.string.isRequired,
	imageLeft: PropTypes.string.isRequired,
	imageRight: PropTypes.string.isRequired
}

export default ComparisonImageSlider;
