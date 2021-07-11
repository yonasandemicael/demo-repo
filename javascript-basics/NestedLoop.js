for(let i = 1 ; i<= 10 ; i++)
{
    let row = '';
for(let j= 1 ; j <=10 ; j++)
{
    // creating matrix of m rows by n columns i.e 10 by 10 spaced by tab
row +=i *j + '\t';
}
console.log(row);
}