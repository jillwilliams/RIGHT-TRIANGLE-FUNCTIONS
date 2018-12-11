// Inches to Centimeter Calculation
const myInToCm = ( ) => {
var inches = document.getElementById("inchesinput").value;
var calculate = (inches * 2.54);
var answer = calculate.toFixed(2);
    return (answer + " cm");
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

// CONVERT DEGREES TO RADIANS
const myDegToRad = ( ) => {
var degrees = document.getElementById("degreesinput").value;
// DECIMAL OUTPUT (RADIANS)
var calculate1 = ((degrees * Math.PI)/180);
var answer1 = calculate1.toFixed(2);
    return (answer1);
document.getElementById("demo3").innerHTML = myDegToRad( );
}
// PI SYMBOL IN OUTPUT (EXACT RADIANS)
const piExact = ( ) => {
var degrees = document.getElementById("degreesinput").value;
var calculate2 = (degrees/180);
var answer2 = (calculate2/Math.PI);
return (answer2 + " ∏");
    document.getElementById("demo4").innerHTML = piExact( );
}
// TEMPLATE FOR NEXT CONVERSION
// const myPiButton = ( ) => {
// var radians = document.getElementById("radiansinput").value;
// var calculate = (radians * 180);
// var answer = calculate.toFixed(2);
// return (answer + " °");
// }
// const myRadiansCalc = ( ) => {
//     document.getElementById("demo2").innerHTML = myPiButton( );
