'use strict';

var line = function(deli) {
  // your code here

    if (deli.length === 0) {
        console.log("The line is currently empty.");
    } else {
        var persons = "";
        for (var i = 0; i < deli.length; i++) {
            persons = persons + (i+1) + ". " + deli[i] + ", ";
        }

        console.log("The line is currently: " + persons.slice(0, -2));
    }
};
