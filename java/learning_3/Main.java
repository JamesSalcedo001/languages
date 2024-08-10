import java.util.Date;

import java.awt.*;

public class Main {
    public static void main(String[] args) {

        String message = "Hello World" + "!!";
        System.out.println(message.endsWith("!!"));
        System.out.println(message.startsWith("!!"));
        System.out.println(message.length());
        System.out.println(message.indexOf("H"));
        System.out.println(message.indexOf("sky"));

    }
}