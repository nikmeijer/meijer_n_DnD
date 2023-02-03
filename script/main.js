//select elements - what will user interact with

// this is a 1 to many connection to an element in the DOM
let navButton = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	//collect ALL of the draggable pieces in the drag-zone
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	//collect ALL of the drop zone elements
	dropZones =document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector('a'),
	draggedPiece;

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

function handleStartDrag() {
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault();
}

function handleDrop(e) {
	e.preventDefault();
	e.target.appendChild(draggedPiece);
}

// event is handling at the bottom
// how is the user going to interact with it
navButton.forEach(button => button.addEventListener('click', changeBGImage));
// add drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
// add dragover handling in the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) {
	e.preventDefault();
}
//templink handling
tempLink.addEventListener('click', blockDefaultBehaviour); 