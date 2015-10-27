function getShortMessages(messages) {
  var output = messages.filter(isShortEnough),
      finalAnswer = [];

  function isShortEnough(messages) {
    return messages.message.length < 50;
  }

  for (var i = 0; i < output.length; i++) {
    finalAnswer.push(output[i].message);
  }

  return finalAnswer;
}

module.exports = getShortMessages;
