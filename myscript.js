//let clueType = document.getElementById("clueType").value;

//if(clueType == "clueString"){
//	document.getElementById("p1").innerHTML = "blue";
//}

/*clueType.onchange = function(){
	let selIndex = clueType.selectedIndex;
	let selValue = clueType.options(selIndex).innerHTML;

	switch(selValue){
		case "clueJigsaw":
			document.getElementById("p1").style.color = "blue";
			break;
		deafult:
			return;
	};
};*/

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
		<input type="button" value="Add Answer" onclick="addAnswer(1)">
		<input type="button" value="Remove Answer" onclick="addAnswer(0)"><br>

		<div class="choiceInputs"><br>		
			Possible Choice: <input type="text" name="ChoiceText"><br>
		</div><br>
		<input type="button" value="Add Choice" onclick="addChoice(1)">
		<input type="button" value="Remove Choice" onclick="addChoice(0)"><br>

		<input type="submit" value="update">
		</form>
	`;
	$(".formEntry").append(clueForm);
};

function addChoice(add){
	$(".choiceInputs").append("<p>Test</p>");
};

function addAnswer(add){
	$(".answerInputs").append("<p>Test</p>");
};

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