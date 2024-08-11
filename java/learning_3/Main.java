import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // for (int i = 0; i < 5; i++) {
        //     System.out.println("Hello World");
        // }
        // for (int i = 1; i <= 5; i++) {
        //     System.out.println("Hello World " + i);
        // }
        // for (int i = 0; i < 5; i++) {
        //     System.out.println("Hello World " + i);
        // }

        // for (int i = 5; i > 5; i--) {
        //     System.out.println("Hello World " + i);
        // }

        // better to use for loop when you know how many times you'll need to execute the code, use while loop when you dont

        // int i = 0;
        // while (i > 0) {
        //     System.out.println("Hello World " + i);
        //     i--;
        // }

        Scanner scanner = new Scanner(System.in);
        String input = "";

        while (true) {
            System.out.print("Input: ");
            input = scanner.next().toLowerCase();
            if (input.equals("pass"))
            continue;
            // moves back to beginning of loop
            if (input.equals("quit")) {
                break;
            }
            System.out.println(input);
        }

        // Scanner scanner = new Scanner(System.in);
        // String input = "";

        // do {
        //     System.out.print("Input: ");
        //     input = scanner.next().toLowerCase();
        //     System.out.println(input);
        // } while (!input.equals("quit"));
    }
}





























// import java.text.NumberFormat;
// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//        final byte MONTHS_IN_YEAR = 12;
//        final byte PERCENT = 100;

//        Scanner scanner = new Scanner(System.in);

//        System.out.print("Principal: ");
//        int principal = scanner.nextInt();

//        System.out.print("Annual interest rate: ");
//        float annualInterest = scanner.nextFloat();
//        float monthlyInterest = annualInterest / PERCENT / MONTHS_IN_YEAR;

//        System.out.print("Period (Years): ");
//        byte years = scanner.nextByte();
//        int numberOfPayments = years * MONTHS_IN_YEAR;

//        double mortgage = principal
//                 * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
//                 / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

//         String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
//         System.out.println("Mortgage: " + mortgageFormatted);
//     }
// }
