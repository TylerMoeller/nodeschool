var goodUsers = process.argv[2],
    testAllValid = checkUsersValid(goodUsers);

function checkUsersValid(goodUsers) {

  return function allUsersValid(submittedUsers) {

    return submittedUsers.every(function(submitted) {

      return goodUsers.some(function(good) {

        return submitted.id === good.id;

      });
    });
  };
}

module.exports = checkUsersValid;
