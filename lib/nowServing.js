'use strict';

var nowServing = function(deli){
  // your code here

    if(deli.length === 0) {
        console.log("There is nobody waiting to be served!");
    } else {
        var person = deli.shift();
        console.log("Currently serving " + person + ".");
    }
};
