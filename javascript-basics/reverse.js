function reverseCal(n){
    let reverse = 0;
         while(n > 0){
            let lastDigit = n % 10 ;
        reverse = reverse * 10 + lastDigit;
        // here as the type of n is number (number,string ,boolean undefined) it can be int float or any othe numbe format 
        //it requires large iteration to raech zer so use math floor to round the number and shorten the loop
        n = Math.floor(n / 10 );
         }

         return reverse;
}
console.log(reverseCal(124));