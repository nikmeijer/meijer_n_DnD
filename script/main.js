//select elements - what will user interact with

// this is a 1 to many connection to an element in the DOM
let navButton = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1');
	puzzleBoard = document.querySelector('.puzzle-board');

// functions go in the middle
function changeBGImage() {
	let newBGPath = "images/backGround" + this.id + ".jpg";
	//debugger;
	//chnage the background image in the drop zone
	//the `${}` is called a JS Template String - anything inside curly
	//brackets is evaluated at runtime and interpolated (replaces brackets with notation)

	//you can use variables, functions, etc inline in your code
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

// event is handling at the bottom
// how is the user going to interact with it
navButton.forEach(button => button.addEventListener('click', changeBGImage));