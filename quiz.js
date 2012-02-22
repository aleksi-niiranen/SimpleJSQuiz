var score = 0;
var question = 0;
var questionsCount;
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
	document.getElementById("images").style.display = "inline";
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				xmlDoc = xmlhttp.responseXML;
				questionDocumentElement = xmlDoc.documentElement.getElementsByTagName("QUESTION");
				questionsCount = questionDocumentElement.length;
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
	if (question < questionsCount) {
		renderContent();
	} else {
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
		if (xx[0].hasChildNodes()) {
			document.images["option1"].style.display = "inline";
			document.images["option1"].src = xx[0].firstChild.nodeValue;
		} else {
			document.images["option1"].style.display = "none";
		}
	} catch (err) { }

	xx = questionDocumentElement[question].getElementsByTagName("OPTION_TWO");
	try {
		if (xx[0].hasChildNodes()) {
			document.images["option2"].style.display = "inline";
			document.images["option2"].src = xx[0].firstChild.nodeValue;
		} else {
			document.images["option2"].style.display = "none";
		}
	} catch (err) { }

	xx = questionDocumentElement[question].getElementsByTagName("OPTION_THREE");
	try {
		if (xx[0].hasChildNodes()) {
			document.images["option3"].style.display = "inline";
			document.images["option3"].src = xx[0].firstChild.nodeValue;
		} else {
			document.images["option3"].style.display = "none";
		}
	} catch (err) { }

	xx = questionDocumentElement[question].getElementsByTagName("OPTION_FOUR");
	try {
		if (xx[0].hasChildNodes()) {
			document.images["option4"].style.display = "inline";
			document.images["option4"].src = xx[0].firstChild.nodeValue;
		} else {
			document.images["option4"].style.display = "none";
		}
	} catch (err) { }
}
