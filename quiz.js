var score = 0;
var question = 1;
var images = ["option1", "option2", "option3", "option4"];
function addScore(arg) {
	score += arg;
	question++;
	if (question == 2) {
		document.getElementById("question").innerHTML="Kysymys 2";
		document.images["yesButton"].src = "no.png";
	} else if (question == 3) {
		document.getElementById("question").innerHTML="Kysymys 3";
		document.images["yesButton"].src = "yes.png";
	} else {
		document.write("<h1>Valmis!</h1>");
		document.write(score);
	}

	}
