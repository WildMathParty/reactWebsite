let columnID = 0;
let clueNum = 0;
let multiNum = 0;
let multiBtnNum = 0;

//Question Answer string clue type
function stringForms(clueID){
	$("."+clueID+" .formEntry").remove();
	$("."+clueID+" .formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `
		<form>
		Question Text: <input type="text" class="QuestionText"><br>
		Answer Text: <input type="text" class="AnswerText"><br>
		<input type="button" value="submit" onclick="formSubmit('`+clueID+`')">
		</form>
	`;
	$("."+clueID+" .formEntry").append(clueForm);
};

//Picker Wheel clue type
function pickerForms(clueID){
	$("."+clueID+" .formEntry").remove();
	$("."+clueID+" .formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `
		<form>
		Question Text: <input type="text" class="QuestionText"><br>
		<div class="pickerColumns">
		Picker Column: <input type="text" class="AnswerText"><br>
		</div>
		<input type="button" value="Add Column" onclick="addColumn('`+clueID+`')"><br>
		<input type="button" value="submit" onclick="formSubmit('`+clueID+`')">
		</form>
	`;
	$("."+clueID+" .formEntry").append(clueForm);
};

function addColumn(clueID){
	columnID++;
	$("."+clueID+" .pickerColumns").append(`<div class="column`+columnID+`">
		Picker Column: <input type="text" class="pickerColumn">
		<input type="button" value="Remove" onclick="removeColumn(`+columnID+`, '`+clueID+`')"><br>
		</div>`);
}

function removeColumn(ID, clueID){
	$("."+clueID+" .column" +ID).remove();
}

//Jigsaw clue type
function jigsawForms(clueID){
	$("."+clueID+" .formEntry").remove();
	$("."+clueID+" .formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `
		<form>
		Upload Picture: <form action="/action_page.php">
  		<input type="file" name="pic" accept="image/*" class="jigImage">
		</form>
		Pieces Across: <input type="number" min="1" max="6" class="piecesAcross"><br>
		Pieces Down: <input type="number" min="1" max="6" class="piecesDown"><br>
		<input type="button" value="submit" onclick="formSubmit('`+clueID+`')">
		</form>
	`;
	$("."+clueID+" .formEntry").append(clueForm);
};

//Multichoice and Combination clue type
function multiForms(clueID){
	$("."+clueID+" .formEntry").remove();
	$("."+clueID+" .formsDiv").append("<div class='formEntry'></div>");

	let clueForm = `<form>

		<input class="multiAdd" type="button" value="Add multiple choice part" onclick="addMultiClue('`+clueID+`')">

		<input type="button" value="submit" onclick="formSubmit('`+clueID+`')">
		</form>
	`;
	$("."+clueID+" .formEntry").append(clueForm);

};

function multiTypeSwitch(){
	switch(this.value){
		case "multi":
			$("#"+this.id+" .extraAnswers").remove()
			$("#"+this.id+" .answerAdd").remove();
			break;
		case "combi":
			$(".tester").remove()
			$("#"+this.id+" .answerInputs").append('<div class="extraAnswers"></div>');
			$("#"+this.id+" .answerInputs").append(`<input class="answerAdd" type="button" value="Add Answer" onclick="addMultiButton('Answers', '`+this.id+`')">`);
			break;
		default:
			return;
	}
}

function addMultiButton(add, multiID){
	multiBtnNum++;

	let inputTitle
	add==="Answers" ? inputTitle="Correct Answer: " : inputTitle="Possible Choice: ";

	$("#"+multiID+" .extra" + add).append(`<div class='multibutton`+multiBtnNum+`'>
		`+inputTitle+`<input type="text">
		<input type='button' value='Remove' onclick='removeMultiButton(`+multiBtnNum+`)'><br>
		</div>`);
};

function removeMultiButton(multiBtnID){
	$(".multibutton"+multiBtnID).remove();
}

function addMultiClue(clueID){
	multiNum++;
	let clueForm = `<div id="multi`+multiNum+`">
		Question Type: <select class="multiType" id="multi`+multiNum+`"><br>
			<option value="multi">Multiple Choice</option><br>
			<option value="combi">Combinatorial</option><br>
		</select><br>
		Question Text: <input type="text" class="QuestionText"><br>

		<div class="answerInputs"><br>		
		Correct Answer: <input type="text" class="AnswerText"><br>
		</div><br>

		<div class="choiceInputs"><br>		
			Possible Choice: <input type="text" class="ChoiceText"><br>
		<div class="extraChoices"></div>
		<input type="button" value="Add Choice" onclick="addMultiButton('Choices', 'multi`+multiNum+`')">
		</div><br>

		</div>`;

	$("."+clueID+" .multiAdd").before(clueForm);
	$("#multi"+multiNum+" .multiType").change(multiTypeSwitch);
}

//Submit clue type forms
function formSubmit(clueID){
	let submitType = $("#"+clueID+".clueType").val();
	let sendReq
	switch(submitType){
		case "clueString":
			sendReq = {
				type: "clueString", 
				qText: $("."+clueID+" .QuestionText").val(), 
				aText: $("."+clueID+" .AnswerText").val()};
			break;
		case "cluePicker":
			sendReq = {
				type: "cluePicker", 
				qText: $("."+clueID+" .QuestionText").val()};
			break;
		case "clueJigsaw":
			sendReq = {
				type: "clueJigsaw", 
				jigsawImage: $("."+clueID+" .jigImage").val(),
				pAcross: $("."+clueID+" .piecesAcross").val(), 
				pDown: $("."+clueID+" .piecesDown").val()};
			break;
		case "clueMulti":
			sendReq = {
				type: "clueMulti",
				qType: $("."+clueID+" .multiType").val(),
				qText: $("."+clueID+" .QuestionText").val()
			};
			break;
		default:
			break;
	}
	
	$.ajax({
		url: "http://localhost:3000/api/ajax",
		type: "POST",
		data: sendReq,
		success: function(result){
			
		},
		error: function(error){
			console.log(error);
		}
	})
}

function addClue(){
	clueNum++;
	$("#clueButton").before(`
<div class="clue`+clueNum+`">
	<div class="clueSelect">
		<select class="clueType" id="clue`+clueNum+`">
			<option value="clueString">String</option>
			<option value="cluePicker">Picker</option>
			<option value="clueJigsaw">Jigsaw</option>
			<option value="clueMulti">Multichoice</option>
		</select>
	</div>
	<div class="formsDiv">

	</div>
</div>`);
	$(".clue"+clueNum+" .clueType").change(clueHandler);
	stringForms("clue"+clueNum)
}

function clueHandler(){
	switch(this.value){
		case "clueString":
			stringForms(this.id);
			break;
		case "cluePicker":
			pickerForms(this.id);
			break;
		case "clueJigsaw":
			jigsawForms(this.id);
			break;
		case "clueMulti":
			multiForms(this.id);
			break;	
		default:
			return;
	};
}

//Document load, show string clue type, set up cluetype change listener
$(document).ready(function(){

	addClue();

});