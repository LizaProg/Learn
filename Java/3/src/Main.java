/**
 * Created by liza on 08.12.16.
 */
public class Main {
    public static void main(String[] args) {
        int c = 5;
        if (c == 4) {
            System.out.println("Ohhh! So a is 4!");
        }
//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
        int a = 4;
        int b = 5;
        boolean result;
        result = a < b;  // истина result = a > b;  // ложь
        result = a <= 4; // меньше или равно - истина result = b >= 6;  // больше или равно - ложь
        result = a == b;  // равно - ложь
        result = a != b;  // неравно - истина
        result = a > b || a < b;  // логическое ИЛИ - истина
        result = 3 < a && a < 6;  // логическое И - истина
        result = !result;  // Логическое НЕ - ложь

//Оператор if — else
        int a = 4;
        int b = 5;
        if (a == b) {
            System.out.println("Yes");
            // Тело метода. Выполняется если a и b равны.
        }else {
            System.out.println("No");
            // a и b не равны... :/
        }

//         записать if — else в одну строку — с помощью оператора ? :
        int a = 4;
        int result = a == 4 ? 1 : 8;
// result будет равен 1
// Или обычная форма записи:
        int result;
        if (a == 4) {
            result = 1;
        } else {
            result = 8;
        }

//        Операторы == и equals
        String a = new String("Wow");
        String b = new String("Wow");
        String sameA = a;

        boolean r1 = a == b;      // Ложь, так как a и b не один и тот же объект
        boolean r2 = a.equals(b); // Истина, так как a и b логически равны
        boolean r3 = a == sameA;  // Истина, так как a и sameA действительно один и тот же объект

    }
}
