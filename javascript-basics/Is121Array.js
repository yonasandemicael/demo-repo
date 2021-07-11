//declare the array at the top
// assigning the funtion to the variable
x = is121Array(1,2,1);
y = is121Array(1, 1, 2, 2, 2, 1, 1);
z = is121Array(2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1);


function is121Array()
{
    let is121Arr = 1 ;
    let count = 0;
    if(arguments[0] != 1)
        is121Arr = 0 ;
    
    for (let i = 0; i < arguments.length; i++) 
        if(arguments[i] != 1 && arguments[i] !=2)
        is121Arr = 0;
    for (let i = 0; i < arguments.length; i++) 
        if(arguments[i] == 1)
        count++;
        else
            break;

    if(count ==arguments.length)

    for(let i = arguments.length-1 ;i >= arguments.length-count	;i--)
        if(arguments[i] != 1 )

    for(let i = count ;i >= arguments.length-count	;i++)
        if(arguments[i] != 2 )
        is121Arr = 0;
    return is121Arr;
}
console.log(is121Array(x));
console.log(is121Array(y));
console.log(is121Array(z));
