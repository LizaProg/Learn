import java.security.MessageDigest;

public class Quiz {

    public static void main(String[] args) throws Exception {

        boolean result = booleanExpression(true, false, false, true);

        System.out.println(result);
//


    }

    public static boolean booleanExpression(boolean a, boolean b, boolean c, boolean d) {
        int count = 0;
        if (a == true) {
            count += 1;
        }
        if (b == true) {
            count += 1;
        }
        if (c == true) {
            count += 1;
        }
        if (d == true) {
            count += 1;
        }
        if (count == 2){
            return true;
        } else {
            return false;
        }
    }
}