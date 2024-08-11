public class Main {
    public static void main(String[] args) {
    //    String role = "admin";
    //    if (role == "admin") {
    //         System.out.println("You're an admin");
    //    } else if (role == "moderator") {
    //     System.out.println("you're a moderator");
    //    } else {
    //     System.out.println("You're a guest");
    //    }


    // String role = "admin";

    // switch (role) {
    //     case "admin":
    //         System.out.println("You're an admin");
    //         break;
    //     case "moderator":
    //         System.out.println("you're a moderator");
    //         break;
    //     default:
    //         System.out.println("you're a guest");

    // }

   int role = 1;

    switch (role) {
        case 1:
            System.out.println("You're an admin");
            break;
        case 2:
            System.out.println("you're a moderator");
            break;
        default:
            System.out.println("you're a guest");

    }



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
