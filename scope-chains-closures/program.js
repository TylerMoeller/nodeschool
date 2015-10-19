function foo() {
  var bar = 1;
  quux = true;
  function zip() {
    var quux = 2;
    bar = true;
  };
  return zip;
};
