import java.util.*;
public class Reverse
{

     public static void main (String args [] )
    {
        System.out.println(reverse(1234));
    }
    public static int reverse(int n)
    {
        int reverse = 0 ;
        while(n > 0)
        {
            int currentLastDigit = n % 10 ;
            reverse= reverse*10 +currentLastDigit;
            n = n / 10;
        }
        return reverse;
    }

}