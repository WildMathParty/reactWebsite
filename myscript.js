let multiButtonID = 0;
let columnID = 0;

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
		<div class="pickerColumns">
		Picker Column: <input type="text" name="AnswerText"><br>
		</div>
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
		Upload Picture: <form enctype="multipart/form-data" action="/upload/image" method="post">
    						<input id="image-file" type="file" />
						</form><br>
		Pieces Across: <input type="number" min="1" max="6" name="piecesAcross"><br>
		Pieces Down: <input type="number" min="1" max="6" name="piecesDown"><br>
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

		<div class="choiceInputs"><br>		
			Possible Choice: <input type="text" name="ChoiceText"><br>
		<div class="extraChoices"></div>
		<input type="button" value="Add Choice" onclick="addMultiButton('Choices')">
		</div><br>

		<input type="submit" value="update">
		</form>
	`;
	$(".formEntry").append(clueForm);

	let multiType = document.getElementById("multiType");
	multiType.onchange = function(){
		let selType = multiType.value;
		switch(selType){
			case "multi":
				$(".extraAnswers").remove()
				$(".answerAdd").remove();
				break;
			case "combi":
				$(".answerInputs").append('<div class="extraAnswers"></div>');
				$(".answerInputs").append(`<input class="answerAdd" type="button" value="Add Answer" onclick="addMultiButton('Answers')">`);
				break;
			default:
				return;
		}
	}
};

function addMultiButton(add){
	multiButtonID++;
	let inputTitle

	add==="Answers" ? inputTitle="Correct Answer: " : inputTitle="Possible Choice: ";
	$(".extra" + add).append(`<div class='multibutton`+multiButtonID+`'</br>
		`+inputTitle+`<input type="text" name="AnswerText">
		<input type='button' value='Remove' onclick='removeMultiButton(`+multiButtonID+`)'></br>
		</div>`);
};

function removeMultiButton(ID){
	$(".multibutton"+ID).remove();
}

function addColumn(ID){
	columnID++;
	$("pickerColumns").append(`<div class="column`+columnID+`" </br>
		Picker Column: <input type="text" name="pickerColumn">
		<input type="button" value="Remove" onclick="removeColumn(`+columnID+`)"></br>
		</div>`);
}

function removeColumn(ID){
	$(".column" +ID).remove();
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