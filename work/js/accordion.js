$(function () {

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}

	// функция удаления классов тегов h3 и p
	function removeAccordion() {
		$('#description .description__title').removeClass('accordion');
		$('#description .description__text').removeClass('panel');
	}

	// //запуск функции removeAccordion() если экран гаджета больше 700px
	// $(document).ready(function () {
	// 	if ($(window).width() >= 700) {
	// 		removeAccordion();
	// 	}
	// });

	// функция добавляет новые классы тегам h3 и p
	function addAccordion() {
		$('#description .description__title').addClass('accordion');
		$('#description .description__text').addClass('panel');
	}
	// //запуск функции addAccordion() если экран гаджета меньше 700px
	// $(document).ready(function () {
	// 	if ($(window).width() < 700) {
	// 		addAccordion();
	// 	}
	// });

	window.addEventListener('resize', function () {
		if ($(window).width() <= 700) {
			addAccordion();
		} else {
			removeAccordion();
		}
	})

});