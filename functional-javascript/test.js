
function getShortMessages(messages) {

  function isShortEnough(messages) {
    return messages.message.length < 50;
  }

  var output = messages.filter(isShortEnough);

  var finalAnswer = [];
  for (var i = 0; i < output.length; i++) {
    finalAnswer.push(output[i].message);
  }

  return finalAnswer;
}

module.exports = getShortMessages;
