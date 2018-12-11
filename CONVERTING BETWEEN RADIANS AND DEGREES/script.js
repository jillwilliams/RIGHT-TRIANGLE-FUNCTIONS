// Inches to Centimeter Calculation
const myInToCm = ( ) => {
var inches = document.getElementById("inchesinput").value;
    return ((inches * 2.54) + " cm");
}
const myCalc = ( ) => {
    document.getElementById("demo1").innerHTML = myInToCm( );
}
//End
// Convert Radians to Degrees
const myPiButton = ( ) => {
var radians = document.getElementById("radiansinput").value;
var calculate = (radians * 180);
var answer = calculate.toFixed(2);
return (answer + " °");
}
const myRadiansCalc = ( ) => {
    document.getElementById("demo2").innerHTML = myPiButton( );
}
//End

// TEMPLATE FOR NEXT CONVERSION
// const myPiButton = ( ) => {
// var radians = document.getElementById("radiansinput").value;
// var calculate = (radians * 180);
// var answer = calculate.toFixed(2);
// return (answer + " °");
// }
// const myRadiansCalc = ( ) => {
//     document.getElementById("demo2").innerHTML = myPiButton( );
