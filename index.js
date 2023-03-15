function receivesAFunction(callback) {
  callback(); // call the callback function
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function.");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function.");
  }
}










