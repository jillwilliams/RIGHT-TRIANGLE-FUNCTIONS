const myInToCm = ( ) => {
var inches = document.getElementById("inchesinput").value;
    return ((inches * 2.54) + " cm");
}
const myCalc = ( ) => {
    document.getElementById("demo1").innerHTML = myInToCm( );
};
