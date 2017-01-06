function caseConvert (string, conversionType){
  var stringToArray = string.toLowerCase().split(" ");
  if(conversionType === "camelcase"){
    // console.log("Camel");
    var firstWord = stringToArray[0];
    var string = firstWord;
    // console.log(stringToArray);
    for(let i = 1; i < stringToArray.length; i++){
     var firstLetter = stringToArray[i][0].toUpperCase();
     var restOfString = stringToArray[i].slice(1, stringToArray[i].length);
    // console.log(restOfString);
    var camelWord = firstLetter + restOfString;
    console.log(camelWord);
    var convStr = string += camelWord;
    // console.log(convStr);
    }
  }
  if(conversionType === "snakecase"){
    // console.log("Snake");
    var convStr = '';
    var lastWord = stringToArray[stringToArray.length-1];
    console.log(lastWord);
    for(let i = 0; i < stringToArray.length-1; i++){
      var strings = stringToArray[i] + '-';
      convStr += strings;
    }
    convStr += lastWord;
  }
  return(convStr)
}

caseConvert("Blah bLAH blaH blah Blah", "snakecase");