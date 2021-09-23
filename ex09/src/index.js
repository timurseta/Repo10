function myFunction(myObj, checkProp) {
    // Only change code below this line
     
    return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not found";
    // Only change code above this line
}
module.exports = myFunction;