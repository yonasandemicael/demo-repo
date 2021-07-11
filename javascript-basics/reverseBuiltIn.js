function reverse_a_number(n)
{
    // convert the simply parameter to string literal
    //n = n + "";
    //or do all in one as below 
    return (parseFloat(n.toString().split("").reverse().join(""))*Math.sign(n));
}
console.log(reverse_a_number(-124));