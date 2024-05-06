
function showAlert() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyles() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}


function removeStyles() {
    document.getElementById("textArea").style.fontWeight = "normal";
}


function toUpperCaseAndAddSuffix() {
    var textArea = document.getElementById("textArea");
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        var lastWordIndex = words.length - 1;
        if (lastWordIndex >= 0) {
            words[lastWordIndex] = words[lastWordIndex].toUpperCase() + "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". ");
}
