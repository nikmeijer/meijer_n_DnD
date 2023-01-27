//select elements - what will user interact with

// this is a 1 to many connection to an element in the DOM
let navButton = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1');
	puzzleBoard = document.querySelector('.puzzle-board');

// functions go in the middle
function changeBGImage() {
	// debugger;
	// theHeadline.style.color = "orange";
	// object.property = "new value"
	// theHeadline.textContent = "Drag and Drop is fun";
	// theHeadline.classList.add('orange-headline');

	//chnage the background image in the drop zone
	puzzleBoard.style.backgroundImage = 'url("../images/backGround"' + this.id + '".jpg")';
}
// event is handling at the bottom
// how is the user going to interact with it
navButton.forEach(button => button.addEventListener('click', changeBGImage));