// ОПРЕДЕЛЕНИЕ МОБИЛЬНОГО УСТРОЙСТВА =======================================================================================================
// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	IOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.IOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows()
// 		);
// 	}
// };

// if (isMobile.any()) {
// 	document.body.classList.add("__mobile");
// }	else {
// 	document.body.classList.remove("__mobile");
// };
// !ОПРЕДЕЛЕНИЕ МОБИЛЬНОГО УСТРОЙСТВА! =====================================================================================================


// СОРТИРОВКА ==============================================================================================================================
document.querySelector(".sort__minus").onclick = function() {
	event.preventDefault();
	sortMinus("data-price");
};
document.querySelector(".sort__plus").onclick = function() {
	event.preventDefault();
	sortPlus("data-price");
};
document.querySelector(".sort__alphabetical").onclick = function() {
	event.preventDefault();
	sortAlphaPlus("data-alpha");
};
document.querySelector(".sort__popular").onclick = function() {
	event.preventDefault();
	sortPlus("data-popular");
};
document.querySelector(".sort__recent").onclick = function() {
	event.preventDefault();
	sortPlus("data-recent");
};



function sortPlus(sortType) {
	let sortContainer = document.querySelector(".latest-cars__blocks");
	for(let i = 0; i < sortContainer.children.length; i++) {
		for(let a = i; a < sortContainer.children.length; a++) {
			if (+sortContainer.children[i].getAttribute(sortType) > +sortContainer.children[a].getAttribute(sortType)) {
				replacedNode = sortContainer.replaceChild(sortContainer.children[a], sortContainer.children[i]);
				insertAfter(replacedNode, sortContainer.children[i]);
			}
		}
	}
};

function sortMinus(sortType) {
	let sortContainer = document.querySelector(".latest-cars__blocks");
	for(let i = 0; i < sortContainer.children.length; i++) {
		for(let a = i; a < sortContainer.children.length; a++) {
			if (+sortContainer.children[i].getAttribute(sortType) < +sortContainer.children[a].getAttribute(sortType)) {
				replacedNode = sortContainer.replaceChild(sortContainer.children[a], sortContainer.children[i]);
				insertAfter(replacedNode, sortContainer.children[i]);
			}
		}
	}
};

function sortAlphaPlus(sortType) {
	let sortContainer = document.querySelector(".latest-cars__blocks");
	for(let i = 0; i < sortContainer.children.length; i++) {
		for(let a = i; a < sortContainer.children.length; a++) {
			if (sortContainer.children[i].getAttribute(sortType) > sortContainer.children[a].getAttribute(sortType)) {
				replacedNode = sortContainer.replaceChild(sortContainer.children[a], sortContainer.children[i]);
				insertAfter(replacedNode, sortContainer.children[i]);
			}
		}
	}
};

function sortAlphaMinus(sortType) {
	let sortContainer = document.querySelector(".latest-cars__blocks");
	for(let i = 0; i < sortContainer.children.length; i++) {
		for(let a = i; a < sortContainer.children.length; a++) {
			if (sortContainer.children[i].getAttribute(sortType) < sortContainer.children[a].getAttribute(sortType)) {
				replacedNode = sortContainer.replaceChild(sortContainer.children[a], sortContainer.children[i]);
				insertAfter(replacedNode, sortContainer.children[i]);
			}
		}
	}
};


function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};
// !СОРТИРОВКА! ============================================================================================================================


// АНИМАЦИЯ ПРИ СКРОЛЛЕ ====================================================================================================================
// let animItems = document.querySelectorAll(".__anim-items");

// if (animItems.length > 0) {
// 	window.addEventListener("scroll", animOnScroll);
// 	function animOnScroll() {
// 		for (let i = 0; i < animItems.length; i++) {
// 			let animItem = animItems[i];
// 			let animItemHeight = animItem.offsetHeight;
// 			let animItemPosition = position(animItem).top;
// 			let animStart = 4;
// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;

// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			};

// 			if ((pageYOffset > animItemPosition - animItemPoint) && pageYOffset < (animItemPosition + animItemHeight)) {
// 				animItem.classList.add("__scroll-active");
// 			}	else {
// 				animItem.classList.remove("__scroll-active");
// 			};


// 		};

// 		function position(el) {
// 			let rect = el.getBoundingClientRect(),
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop,
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
// 			return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
// 		};
// 	};
// 	animOnScroll();
// };
// !АНИМАЦИЯ ПРИ СКРОЛЛЕ! ==================================================================================================================

$(function() {
	$(".slider").slick({
		arrows:false,
		autoplay: true,
		fade: true,
		speed: 3000,
		autoplaySpeed: 5000,
	});

	$(".arrow").click(function() {
		$(this).toggleClass("subMenuActive");
	});
});