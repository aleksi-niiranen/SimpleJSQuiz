var score = 0
var question = 0
var questionsCount
var questionDocumentElement
var facts = new Array(4)

function addScoreAndRenderFact(arg) {
	score += parseInt(arg.data.param, 10)
	question++
	var factIndex = arg.data.fact
	if (facts[factIndex] != null) renderFact(factIndex)
	else renderContent()
}

function renderFact(factIndex) {
	if (question == questionsCount) {
		$("#nextQuestion").html("Show results")
	}
	$("#main").css("background-image", "")
	$("#question").html("Cold hard fact")
	$("#answers").addClass("hidden")
	$("#facts").removeClass("hidden")
	$("#fact").html(facts[factIndex])
}

function renderContent() {
	if (question < questionsCount) {
		$("#facts").addClass("hidden")
		$("#answers").removeClass("hidden")
		var titleElement = questionDocumentElement[question].getElementsByTagName("title")
		var title = titleElement[0].firstChild.nodeValue
		var bgElement = questionDocumentElement[question].getElementsByTagName("bgimage")
		var image = bgElement[0].firstChild.nodeValue
		$("#question").html(title)
		$("#main").css("background-image", "url(" + image + ")")

		for (var i = 1; i <= 4; i++) {
			var optionElement = questionDocumentElement[question].getElementsByTagName("option_" + i)
			try {
				var answer = optionElement[0].getElementsByTagName("answer")[0].firstChild.nodeValue
				var j = i - 1
				try { facts[j] = optionElement[0].getElementsByTagName("fact")[0].firstChild.nodeValue }
				catch (err) { facts[j] = null }
				var value = optionElement[0].getElementsByTagName("value")[0].firstChild.nodeValue
				$("#answer" + i).removeClass("hidden")
				$("#answer" + i + "_link").html(answer).unbind("click").bind("click", {value: value, fact: j}, addScoreAndRenderFact)
			} catch (err) { $("#answer" + i).addClass("hidden") }
		}
	} else { renderResult() }
}

function renderResult() {
	$("#facts").addClass("hidden")
	$("#answer").addClass("hidden")
	$("#main").css("background-image", "")
	if (score > 5)
		$("#question").html("Awesome score!")
	else if (score > 2 & score <= 5)
		$("#question").html("Good score!")
	else
		$("#question").html("Not so good score :(")
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
