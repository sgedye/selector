// Ensure the active class is shown for the selector pressed
function activeButton(btn) {
  const buttons = $('.filter-btn');
	for (let i=0; i<buttons.length; i++) {
		buttons[i].classList.remove('active');
	}
	$('#' + btn)[0].classList.add('active');
}

// Filter the items by the selector
function filterStore(selection) {
	const store = $(".store-item");
	for (let i=0; i<store.length; i++) {
		store[i].classList.add('animated');
    setTimeout(() => { store[i].classList.add('zoomOut') }, 0);
    setTimeout(() => { store[i].classList.replace('zoomOut', 'zoomIn') }, 500);
  }
	if (selection === "all") {
		for (let i=0; i<store.length; i++) {
			setTimeout(() => { store[i].classList.remove('hide') }, 500);
		}
	} else {
		for (let i = 0; i<store.length; i++) {
			if (store[i].dataset.item.split(' ').indexOf(selection) >= 0) {
				setTimeout(() => { store[i].classList.remove('hide') }, 500);
			} else {
				setTimeout(() => { store[i].classList.add('hide') }, 500);
			}
		}
	}
}

// Calling the functions, when a selector is clicked after the document is ready
$(document).ready(function() {	
	$('.filter-btn').click(function() {
		activeButton($(this).attr('id'));
		filterStore($(this).attr('id'));
	});
});