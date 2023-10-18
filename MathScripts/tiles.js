"use strict"

// How many boxes of tiles do you need for a room with given values below. You can't buy a partial box.
// 12pcs of tiles with 1ft x 1ft per box

const roomLength = 13; //in feet
const roomWidth = 15; //in feet

const totalTilesNeeded = roomLength * roomWidth;
const tilesPerBox = 12;
``
const totalTilesNeeded10Percent = (totalTilesNeeded * .1) + totalTilesNeeded;


if (totalTilesNeeded % tilesPerBox > 0) {
    let extraBox = 1;
    let quantityBox = (totalTilesNeeded / tilesPerBox) + extraBox;
    console.log("There are " + Math.trunc(quantityBox) + " boxes of tiles needed.");
}
else {
    let quantityBox = (totalTilesNeeded / tilesPerBox);
    console.log("There are " + quantityBox + " boxes of tiles needed.");
}

if (totalTilesNeeded10Percent % tilesPerBox > 0) {
    let extraBox = 1;
    let quantityBox = (totalTilesNeeded10Percent / tilesPerBox) + extraBox;
    console.log("There are " + Math.trunc(quantityBox) + " boxes of tiles needed including the extra boxes for handling chips, breakage, and mess-ups.");
}
else {
    let quantityBox = (totalTilesNeeded10Percent / tilesPerBox);
    console.log("There are " + Math.trunc(quantityBox) + " boxes of tiles needed including the extra boxes for handling chips, breakage, and mess-ups.");
}
