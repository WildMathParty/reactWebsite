let multiButtonID = 0;

function stringForms(){
	$(".formEntry").remove();
	$(".formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `
		<form>
		Question Text: <input type="text" name="QuestionText"><br>
		Answer Text: <input type="text" name="AnswerText"><br>
		<input type="submit" value="update">
		</form>
	`;
	$(".formEntry").append(clueForm);
};

function pickerForms(){
	$(".formEntry").remove();
	$(".formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `
		<form>
		Question Text: <input type="text" name="QuestionText"><br>
		First Column: <input type="text" name="AnswerText"><br>
		<input type="button" value="Add Column" onclick="addColumn()"><br>
		<input type="submit" value="update">
		</form>
	`;
	$(".formEntry").append(clueForm);
};

function jigsawForms(){
	$(".formEntry").remove();
	$(".formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `
		<form>
		Upload Picture: <input type="text" name="QuestionText"><br>
		Pieces Across: <input type="text" name="AnswerText"><br>
		Pieces Down: <input type="text" name="AnswerText"><br>
		<input type="submit" value="update">
		</form>
	`;
	$(".formEntry").append(clueForm);
};

function multiForms(){
	$(".formEntry").remove();
	$(".formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `
		<form>
		Question Type: <select id="multiType"><br>
			<option value="multi">Multiple Choice</option><br>
			<option value="combi">Combinatorial</option><br>
		</select><br>
		Question Text: <input type="text" name="QuestionText"><br>

		<div class="answerInputs"><br>		
		Correct Answer: <input type="text" name="AnswerText"><br>
		</div><br>
		<input type="button" value="Add Answer" onclick="addMultiButton('answer')"><br>

		<div class="choiceInputs"><br>		
			Possible Choice: <input type="text" name="ChoiceText"><br>
		</div><br>
		<input type="button" value="Add Choice" onclick="addMultiButton('choice')"><br>

		<input type="submit" value="update">
		</form>
	`;
	$(".formEntry").append(clueForm);

	let multiType = document.getElementById("multiType");
	multiType.onchange = function(){
		let selType = multiType.value;
		
	}
};

function addMultiButton(add){
	multiButtonID++;
	/*$("." + add + "Inputs").append(`
		<p class="multiButton"`+multiButtonID+`>Test</p>
		<input class="multiButton"`+multiButtonID+` type="button" value="Remove", onclick="removeMultiButton(`+multiButtonID+`">`);
	*/
	let inputTitle
	add==="answer" ? inputTitle="Correct Answer: " : inputTitle="Possible Choice: ";
	$("." + add + "Inputs").append(`<div class='multibutton`+multiButtonID+`'</br>
		`+inputTitle+`<input type="text" name="AnswerText">
		<input type='button' value='Remove' onclick='removeMultiButton(`+multiButtonID+`)'></br>
		</div>`);
};

function removeMultiButton(ID){
	$(".multibutton"+ID).remove();
}

$(document).ready(function(){

let clueType = document.getElementById("clueType");

clueType.onchange = function(){
	let selValue = clueType.value;

	switch(selValue){
		case "clueString":
			stringForms();
			break;
		case "cluePicker":
			pickerForms();
			break;
		case "clueJigsaw":
			jigsawForms();
			break;
		case "clueMulti":
			multiForms();
			break;	
		deafult:
			return;
	};
};

});