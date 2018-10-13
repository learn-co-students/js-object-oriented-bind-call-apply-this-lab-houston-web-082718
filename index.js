//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, name, age) {
  return fn.call(name, age);
}

function setThisWithApply(fn, name, age) {
  return fn.apply(name, age);
}

function returnNewFunctionOf(fn, name) {
  return fn.bind(name)
}
