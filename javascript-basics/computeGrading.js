function grading (mid , final)
{
    let computeGrade;
    let avg = mid + final;
    if(avg >= 92)
    computeGrade = 'A';
    else if(avg < 92 && avg >= 85)
    computeGrade = 'B';
    else if(avg < 85 && avg >= 75)
    computeGrade = 'c';
    else
    computeGrade = 'NC';
     return computeGrade;
    
}
console.log(grading(46,50));
console.log(grading(42,39));
console.log(grading(42,32));
console.log(grading(42,43));

