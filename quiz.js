var score = 0;
var question = 0;
var xmlDoc;
var questionDocumentElement;

function addScore(arg) {
	score += arg;
	question++;
	nextQuestion();
}

function loadQuiz(url) {
	document.getElementById("startService").style.display = "none";
	document.getElementById("startProduct").style.display = "none";
	document.getElementById("images").style.display = "block";
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				xmlDoc = xmlhttp.responseXML;
				questionDocumentElement = xmlDoc.documentElement.getElementsByTagName("QUESTION");
				// load first question
				renderContent();
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	} else {
		// IE6 not supported
	}
}

function nextQuestion() {
	if (question < 5) {
		renderContent();
	} else {
		// todo: show results
		//var content = document.getElementById("question");
		document.getElementById("question").innerHTML = "Your score was " + score + "!";
		document.getElementById("images").style.display = "none";
	}
}

function renderContent() {
	var xx = questionDocumentElement[question].getElementsByTagName("TITLE");
	try {
		document.getElementById("question").innerHTML = xx[0].firstChild.nodeValue;
	} catch (err) { }

	xx = questionDocumentElement[question].getElementsByTagName("OPTION_ONE");
	try {
		document.images["option1"].src = xx[0].firstChild.nodeValue;
	} catch (err) { }

	xx = questionDocumentElement[question].getElementsByTagName("OPTION_TWO");
	try {
		document.images["option2"].src = xx[0].firstChild.nodeValue;
	} catch (err) { }

	xx = questionDocumentElement[question].getElementsByTagName("OPTION_THREE");
	try {
		document.images["option3"].src = xx[0].firstChild.nodeValue;
	} catch (err) { }

	xx = questionDocumentElement[question].getElementsByTagName("OPTION_FOUR");
	try {
		document.images["option4"].src = xx[0].firstChild.nodeValue;
	} catch (err) { }
}
