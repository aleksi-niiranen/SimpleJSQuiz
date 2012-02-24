var score = 0;
var question = 0;
var questionsCount;
var xmlDoc;
var questionDocumentElement;

function addScore(arg) {
	// arg is passed as String from XML document
	// parse to int
	score += parseInt(arg.data.param, 10);
	question++;
	renderContent();
}

function loadQuiz(url) {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", url, false);
		xmlhttp.send();
		xmlDoc = xmlhttp.responseXML;
		questionDocumentElement = xmlDoc.documentElement.getElementsByTagName("question");
		questionsCount = questionDocumentElement.length;
	} else {
		// IE6 not supported
	}
}
