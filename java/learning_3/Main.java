import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scanner scanner = new Scanner(System.in);
        // System.out.println("Enter your age: ");
        // byte age = scanner.nextByte();
        // System.out.println("You are " + age);

        // Scanner scanner = new Scanner(System.in);
        // System.out.println("Enter your age: ");
        // float age = scanner.nextFloat();
        // System.out.println("You are " + age);

        // Scanner scanner = new Scanner(System.in);
        // System.out.println("Enter your age: ");
        // double age = scanner.nextDouble();
        // System.out.println("You are " + age);

        // Scanner scanner = new Scanner(System.in);
        // System.out.print("Enter your name: ");
        // String name = scanner.next();
        // // next method reads one token, if you type words with space it will only read the first one as that counts as two tokens, and the second time it will read the second token
        // System.out.println("You are " + name);

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine().trim();
        // next method reads one token, if you type words with space it will only read the first one as that counts as two tokens, and the second time it will read the second token
        System.out.println("You are " + name);
    }
}