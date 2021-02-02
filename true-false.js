// Condition will be false if they contains following properties:
// 0;
// "";
// null;
// NaN;
// undefined;
// false;

const num = NaN;
if(num){
    console.log( "condition is true" );
}
else{
    console.log( "condition is false" );
}