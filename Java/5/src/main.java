/**
 * Created by liza on 14.12.16.
 */
public class main {
    public static void main(String[] args) {
      /*  int i = 0;
        for (;i < 3; i++) {}

        while (i < 3) {} //Условие будет работать впервые при вводе и каждый раз,
        // когда вызывается цикл. Если условие возвратит false, то цикл не будет работать.

        do {

        } while(i < 3); // цикл всегда выполнял по крайней мере одно действие*/

        int i;
        for (i = 0; i < 5; i++) {
            if (i >= 2) {
                break;//break останавливает цикл и переходит к оператору,
                // следующему за ним:
            }
            System.out.println("Yuhu");
        }
        System.out.println(i);
/*
Output:
Yuhu
Yuhu
2
*/


        int i;
        for (i = 0; i < 5; i++) {
            if (i >= 3) {
                break;
            }
            System.out.println("Yuhu");
            if (i >= 1) {
                continue;//continue остановит текущую итерацию и переместится в следующую.
            }
            System.out.println("Tata");
        }
        System.out.println(i);
// Output
// Yuhu
// Tata
// Yuhu
// Yuhu
// 3
    }
}
