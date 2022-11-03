import javax.swing.text.AsyncBoxView;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;


public class Main {

    public static boolean answer = false;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        String t = br.readLine();

        solution(t,s);
        if (answer){
            System.out.println(1);
        }else{
            System.out.println(0);
        }
    }

    public static void solution(String str, String target) {

        if (answer) {
            return;
        }

        if (str.length() == target.length()) {

            if (str.equals(target)) {
                answer = true;
            }
            return;
        }



        // 맨뒤가 'A' 로 끝날 때
        if (str.charAt(str.length() - 1) == 'A') {
            solution(str.substring(0, str.length() - 1), target);
        }

        //맨앞이 'B' 로 시작할 때
        if (str.charAt(0) == 'B') {
            String tmp = str.substring(1);
            StringBuilder sb = new StringBuilder(tmp);
            tmp = sb.reverse().toString();
            solution(tmp, target);
        }

    }




}
