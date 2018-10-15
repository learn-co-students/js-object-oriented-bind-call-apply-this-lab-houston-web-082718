function justInvoke(func) {
    return func();
}

function setThisWithCall(func, value1, value2) {
   return func.call(value1, value2);
}

function setThisWithApply(func, value1, value2) {
    return func.apply(value1, value2);
}

function returnNewFunctionOf(func, value1, value2) {
    return func.bind(value1, value2);
}