var word = "table"
var wordArray = word.split("")
var inputField = document.getElementById("letterInput")
  inputField.onKeyUp = function(event) {
  var matched = false
  for (var i=0; i< wordArray.length; i++) {
    if (event.key === wordArray[i]) {
      alert("it matched! " + wordArray[i])
      matched = true
    }
  }
  if (matched === false) {
    alert("try again sucka")
  }
}