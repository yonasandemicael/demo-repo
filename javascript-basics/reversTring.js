function reverseString(givenString)
{
    // create empty string
    let str = "" ;
    for(let i = givenString.length-1 ; i >= 0 ; i--)
    {
         str += givenString[i];
    }
    return str;
}
console.log(reverseString("yonas"));