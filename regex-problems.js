var myLettersObject = {
  "a":2,
  "b":2,
  "c":2,
  "d":3,
  "e":3,
  "f":3,
  "g":4,
  "h":4,
  "i":4,
  "j":5,
  "k":5,
  "l":5,
  "m":6,
  "n":6,
  "o":6,
  "p":7,
  "q":7,
  "r":7,
  "s":7,
  "t":8,
  "u":8,
  "v":8,
  "w":9,
  "x":9,
  "y":9,
  "z":9,
}
var phoneStr = "1-900-acdc-4life"
var countryCode = false;

function convertPhone(phoneStr){
  // console.log(phoneStr);
  var tenOr11Characters;
  var nonAlphaNumericRemoved = phoneStr.match(/\w/g);
  if(nonAlphaNumericRemoved.length < 10){
    console.log("error stoopid")
  }
  else if(nonAlphaNumericRemoved.indexOf("1") === 0){
    tenOr11Characters = nonAlphaNumericRemoved.slice(0,11);
    countryCode = true;
  }else{
    tenOr11Characters = nonAlphaNumericRemoved.slice(0,10);
  }
  // console.log(tenOr11Characters);
  var phoneNumber =[];
  tenOr11Characters.map((currentValue,currentIndex)=>{
    if(isNaN(currentValue)){
      phoneNumber.push(myLettersObject[currentValue]);
    }
    else{
      phoneNumber.push(currentValue);
    }
  })
  if(countryCode){
    phoneNumber.splice(1,0,'-')
    phoneNumber.splice(5,0,'-')
    phoneNumber.splice(9,0,'-')
  }
  else{
    phoneNumber.splice(3,0,'-')
    phoneNumber.splice(7,0,'-')
  }
  return phoneNumber.join("");
}
// console.log(phoneNumber);
console.log(convertPhone(phoneStr));