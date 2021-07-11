import java.util.*;
public class ComputeGrade
{

     public static void main (String args [] )
    {
        System.out.println(computeGrade(46 ,50));
        System.out.println(computeGrade(42 ,39));

    }
    public static String computeGrade( int midTerm , int finalTerm)
    {
        String computeGrade = "";
        int avg = (midTerm + finalTerm);
        if(avg >= 92)
            computeGrade = "A";
        else if(avg < 92 && avg >= 85)
            computeGrade = "B";
        else if(avg < 85 && avg >= 75)
            computeGrade = "C";
        else
            computeGrade = "NC";
        return computeGrade;
    }

}