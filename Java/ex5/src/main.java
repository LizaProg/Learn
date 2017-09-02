/**
 * Created by liza on 14.12.16.
 */
/*
Используя цикл, выведите на экран все четные числа из списка чисел в порядке получения.
        Не выводите числа, идущие после числа 237 в последовательности.
*/
public class main {
    public static void main(String[] args) {
        for (int i = 1; i <= 237; i++) {
            if (i % 2 == 0) {
                System.out.print(i);
            }
        }
    }
}