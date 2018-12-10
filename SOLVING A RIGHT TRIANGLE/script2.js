const solveForSides = ( ) => {
var a = document.getElementById("varA").value;
var b = document.getElementById("varB").value;
var c = document.getElementById("varC").value;
// Begin solving for all three side lengths
// Solve for "c"
    if (a > 0 && b > 0) {
        return  (Math.sqrt((a * a) + (b * b)));
    } else
// Solve for b
    if (a > 0 && c > 0) {
        return  (Math.sqrt((c * c) - (a * a)));
    } else
// Solve for a
    if (b > 0 && c > 0) {
        return  (Math.sqrt((c * c) - (b * b)));
    } else
    if (a > 0 && b > 0 && c > 0) {
        return ("Re-enter your values");
    } else
        return ("Re-enter your values");
}
const myCalc = ( ) => {
document.getElementById("demo").innerHTML = solveForSides ( );
}
//WORKING//
// ROUND TO ONE DECIMAL PLACE
const roundOne = ( ) => {
    return (Math.round(solveForSides, 1));
}
document.getElementById("demo2").innerHTML = roundOne( );

//ROUND TO TWO DECIMAL places
const roundTwo = ( ) => {
    return (Math.round(solveForSides, 2));
}
document.getElementById("demo2").innerHTML = roundTwo( );

//ROUND TO THREE DECIMAL PLACES
const roundThree = ( ) => {
    return (Math.round(solveForSides, 3));
}
document.getElementById("demo2").innerHTML = roundThree( );

//ROUND TO FOUR
const roundFour = ( ) => {
    return (Math.round(solveForSides, 4));
}
document.getElementById("demo2").innerHTML = roundFour( );

// ROUND TO FIVE
const roundFive = ( ) => {
    return (Math.round(solveForSides, 5));
}
document.getElementById("demo2").innerHTML = roundFive( );
