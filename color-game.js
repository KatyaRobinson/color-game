
var numSquares = 6;
var colors = [];
var pickedColor;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();		
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//figure out how many squares to show
			//pick new colors
			//pick new pickedColor
			//update page to reflect changes
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
	});
}

}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.background;
		//compare to pickedColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = pickedColor;
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colors of the squares 
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	// loop thru all squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
	// change each color to match given color
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr =[];
	// add num random colors to array
	for (var i = 0; i < num; i ++){
		// get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " +  g + ", " +  b + ")";
}
























