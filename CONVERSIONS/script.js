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

// CONVERT CM TO INCHES
const myCmToIn = ( ) => {
var cm = document.getElementById("centiminput").value;
var calculate = (cm / 2.54);
var answer = calculate.toFixed(2);
    return (answer + " in");
}
const myCentiToInches = ( ) => {
    document.getElementById("demo6").innerHTML = myCmToIn( );
}

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

// CONVERT DEGREES TO RADIANS-----
const myDegreesToRadians = ( ) => {
var degrees = document.getElementById("degreesinput").value;
var calculate = ((degrees * Math.PI) / 180);
var answer = calculate.toFixed(2);
    return answer + " rad";
}
const myDegToRad = ( ) => {
    document.getElementById("demo3").innerHTML = myDegreesToRadians( );
}


// CONVERT MILES TO KILOMETERS-----
const myMilesToKilom = ( ) => {
var miles = document.getElementById("milesinput").value;
var calculate = (miles * 1.609344);
var answer = calculate.toFixed(2);
    return answer + " km";
}
const myMilesToKm = ( ) => {
document.getElementById("demo4").innerHTML = myMilesToKilom( );
}

// CONVERT KILOMETERS TO MILES
const myKmToMiles = ( ) => {
var km = document.getElementById("kminput").value;
var calculate = (km / 1.609344);
var answer = calculate.toFixed(2);
    return answer + " mi";
}
const myKmToMi = ( ) => {
document.getElementById("demo5").innerHTML = myKmToMiles( );
}

// CONVERT TIME: SECONDS TO MINUTES
const mySecToMinutes = ( ) => {
var sec = document.getElementById("seconds_input").value;
var calculate = (sec / 60);
var answer = calculate.toFixed(2);
    return answer + " min";
}
const mySecondsToMinutes = ( ) => {
document.getElementById("demo7").innerHTML = mySecToMinutes( );
}
// CONVERT TIME: SECONDS TO HOURS
const mySecToHours = ( ) => {
var sec = document.getElementById("seconds_input").value;
var calculate = (sec / 3600);
var answer = calculate.toFixed(2);
    return answer + " hrs";
}
const mySecondsToHours = ( ) => {
document.getElementById("demo8").innerHTML = mySecToHours( );
}
// CONVERT YEARS TO SECONDS
// CONVERT TIME: YEARS TO MONTHS
const myYrsToMonths = ( ) => {
var years = document.getElementById("years_input").value;
var calculate = (years * 12);
var answer = calculate.toFixed(1);
    return answer + " mo";
}
const myYearsToMonths = ( ) => {
document.getElementById("demo9").innerHTML = myYrsToMonths( );
}
// CONVERT TIME: MONTHS TO DAYS
const myMoToDays = ( ) => {
var months =            document.getElementById("years_input").value;
var calculate = (months * 12 * 30.5);
var answer = calculate.toFixed(2);
    return answer + " days";
}
const myMonthsToDays = ( ) => {
document.getElementById("demo10").innerHTML = myMoToDays( );
}
// CONVERT TIME: DAYS TO HOURS
const myDaysToHrs = ( ) => {
var days =            document.getElementById("years_input").value;
var calculate = (days * 12 * 30.5 * 24);
var answer = calculate.toFixed(2);
    return answer + " hrs";
}
const myDaysToHours = ( ) => {
document.getElementById("demo11").innerHTML = myDaysToHrs( );
}
// CONVERT HOURS TO MINUTES
const myHoursToMinutes = ( ) => {
var hrs =            document.getElementById("years_input").value;
var calculate = (hrs * 12 * 30.5 * 24 * 60);
var answer = calculate.toFixed(2);
    return answer + " min";
}
const myHrsToMin = ( ) => {
document.getElementById("demo12").innerHTML = myHoursToMinutes( );
}
// CONVERT MINUTES TO SECONDS
const myMinutesToSeconds = ( ) => {
var sec =            document.getElementById("years_input").value;
var calculate = (sec * 12 * 30.5 * 24 * 60 * 60);
var answer = calculate.toFixed(2);
    return answer + " sec";
}
const myMinToSec = ( ) => {
document.getElementById("demo13").innerHTML = myMinutesToSeconds( );
}


// TEMPLATE FOR EACH CONVERSION-----
// const myMilesToKilom = ( ) => {
// var miles = document.getElementById("milesinput").value;
// var calculate = (miles * 1.609344);
// var answer = calculate.toFixed(2);
//     return answer + " km";
// }
// const myMilesToKm = ( ) => {
// document.getElementById("demo4").innerHTML = myMilesToKilom( );
// }
