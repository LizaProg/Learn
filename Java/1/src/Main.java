/**
 * Created by liza on 08.12.16.
 */
public class Main {
    public static void main(String[] args) {
        int myNumber;
        myNumber = 19;
        System.out.println(myNumber);
        //объявили и присвоили число

        double d = 4.5;
        d = 3.0;
        //объявить число с плавающей точкой

        float f = (float) 4.5;
        //использовать float

        char c = 'g';
        //символ

        String s1 = new String("Who let the dogs out? ");
        //Создание строки с помощью конструктора

        String s2 = "Who who who who!";
        //Создание строки с помощью двойных кавычек

        String s3 = s1 + s2;
        //объединение строк

        int num = 5;
        String s = "I have " + num + " cookies";

        boolean b = false;
        b = true;

        boolean toBe = false;
        b = toBe || !toBe;
        if (b) {
            System.out.println(toBe);
            //boolean
            //|| это логическое «или»
        }


        //код не будет работать по причине несовместимости типов:
        int children = 0;
//        b = children;  // Не будет работать, требуется boolean, а найден int

        boolean term;

        if (children == 0) {
            term = true;
        } else {
            term = false;
        }

        if (term) {  // Не будет работать, требуется boolean, а найден int
        }
    }
}
