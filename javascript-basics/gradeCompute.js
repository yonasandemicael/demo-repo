let grade = parseFloat(prompt(" Enter your grade :"));

if(grade === 4.0)
grade = 'A';
else if(grade >= 3.8)
grade = 'B';
else if(grade >= 3.6)
grade = 'C';
else 
grade = 'NC';

alert(" your grade is " + grade );

