// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

let tri = "#";
for (let triHeight = 1; triHeight <= 7; triHeight += 1) {
    console.log(tri);
    tri = tri += "#";
}