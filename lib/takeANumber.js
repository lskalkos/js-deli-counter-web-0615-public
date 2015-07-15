'use strict';

var takeANumber = function(deli, person){
  // your code here

    var place_in_line = deli.length + 1;
    console.log("Welcome, " + person + ". You are number " + place_in_line + " in line.")
    deli.push(person);

};
