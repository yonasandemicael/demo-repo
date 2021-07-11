function factorial(num) {
    if (num === 0 || num === 1) {
      return num;
    }
    return num * factorial(num - 1);
  }
  
   let n = factorial(8);
  console.log(n); // 40320
  console.log('****************************'); 

  function sum(x,y){
    // no need to declare the parameters type ,in java scrip alraedy thy are declared
    return x+y ;
  }
  let result = sum(5,5);
  console.log(result);
  //*********************
  function myPersonality(number)
{
    let personality = 'Fair' ;
    if(number % 2 != 0)
    {
        personality = 'Baised';
    }
    return personality;
}
//let result = myPersonality(4);
console.log(myPersonality(4));