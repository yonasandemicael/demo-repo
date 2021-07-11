import java.util.*;
public class TellMyPersonality
{
    public static void main (String [] args)
    {
        System.out.println(tellmyPersonality(5));
        System.out.println(tellmyPersonality(100));

        
    }
    public static String tellmyPersonality(int n)
    {
        String personality = " Fair";
        if(n % 2 != 0)
            personality = " Biased";
        return personality;
    }

}