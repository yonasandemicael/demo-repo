function myPersonality(number)
{
    let personality = 'Fair' ;
    if(number % 2 != 0)
    {
        personality = 'Baised';
    }
    return personality;
}

console.log(myPersonality(4));
console.log(myPersonality(3));
