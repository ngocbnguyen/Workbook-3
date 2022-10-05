"use strict";

function parseAndDisplayName(name) {
    let pos = name.indexOf(" ");
    let first = name.substring(0, pos);
    let last = name.substring(pos,);
    console.log(`Name: ${name}.`);
    console.log(`First name: ${first}.`);
    console.log(`Last name: ${last}.`);
}

