//Your code here
// justInvoke(fn): The function simply invokes the function passed through to it. 
// It also returns the return value of the passed through function.
function justInvoke(fn) {
    return fn();
}

// setThisWithCall(fn, thisValue, arg): The function again invokes the function 
// passed to it, but uses the call method to return the function's this value. 
function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
}

// setThisWithApply(fn, thisValue, args): Again, invoke the function passed to it, 
// change the this value of that function passed to it. You should accomplish all 
// of the above by using apply.
function setThisWithApply(fn, thisValue, args) {
    return fn.apply(thisValue, args);
}

// returnNewFunctionOf(functionToBeCopied, thisValue): Here, we ask you to write 
// a function that returns a copy of the function passed through, but sets the 
// this value of the function's copy.
function returnNewFunctionOf(functionToBeCopied, thisValue) {
    return functionToBeCopied.bind(thisValue);
}