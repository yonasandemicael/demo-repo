x= sumArray(1,2,4,5);
function sumArray ()
{
    let i ;
    let sum = 0;
    for(i = 0 ; i < arguments.length ; i++)
    sum += arguments[i];
    return sum;
}
console.log(sumArray(x));

// *********************************
y=algebricSum_Even_odd(1,2,3,4,5,6,7,8,9);
 function algebricSum_Even_odd()
 {
     let i ;
     let sumOdd = 0;
     let sumEven = 0 ;
     for(i = 0 ; i < arguments.length ; i++)
     {
         if(arguments[i] % 2 == 0)
         sumEven += arguments[i];
         else
         sumOdd += arguments[i];
     }
     return sumEven -sumOdd;
 }
 console.log(algebricSum_Even_odd(y));