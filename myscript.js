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
	let pText = "<p>String selected</p>";
	$(".formsDiv").append(pText);
};

function pickerForms(){
	
};

function jigsawForms(){
	
};

function multiForms(){
	
};

$(document).ready(function(){

let clueType = document.getElementById("clueType");

clueType.onchange = function(){
	let selValue = clueType.value;

	switch(selValue){
		case "clueString":
			document.getElementById("p1").style.color = "black";
			break;
		case "cluePicker":
			stringForms();
			break;
		case "clueJigsaw":
			document.getElementById("p1").style.color = "purple";
			break;
		case "clueMulti":
			document.getElementById("p1").style.color = "blue";
			break;	
		deafult:
			return;
	};
};

});