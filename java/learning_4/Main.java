// nested loops set a number of rows and columns and display rectangle of particular symbol

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        // nested loops

        Scanner scanner = new Scanner(System.in);
        int rows;
        int columns;
        String symbol = "";

        System.out.println("Enter # of rows: ");
        rows = scanner.nextInt();

        System.out.println("Enter # of columns: ");
        columns = scanner.nextInt();

        System.out.println("Enter symbol to use: ");
        symbol = scanner.next();

        // outer loop in charge of rows

        for (int i = 1; i <= rows; i++) {
            System.out.println();
            
            // inner loop in charge of columns

            for (int j = 1; j <= columns; j++) {
                System.out.print(symbol);
            }
        }

        
    }
}






























// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         // while loop executes block of code as long as its condition remains true

//         Scanner scanner = new Scanner(System.in);
//         String name = "";

//         // while loop

//         // while(name.isBlank()) {
//         //     System.out.print("Enter your name: ");
//         //     name = scanner.nextLine();

//         // }



//         // do while loop

//          do {
//             System.out.print("Enter your name: ");
//             name = scanner.nextLine();
//         } while(name.isBlank());

//         System.out.println("Hello " + name);
//     }
// }









// and or and not logical operators

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         // logical ops - connect two or more expressions

//         // NOT




//         // AND


//         int temp = 25;

//         if (temp > 30) {
//             System.out.println("It is hot");
//         } 
//         else if (temp >= 20 && temp <= 30) {
//             System.out.println("It is warm");
//         }
//         else {
//             System.out.println("It is cold");
//         }



//         // OR

//         Scanner scanner = new Scanner(System.in);

//         System.out.println("You are playing a game! press q or Q to quit");

//         String response = scanner.next();

//         // if (response.equals("q") || response.equals("Q")) {
//         //     System.out.println("You quit the game");
//         // }
//         // else {
//         //     System.out.println("You are still playing the game!");
//         // }



//         // NOT

//         if (!response.equals("q") && !response.equals("Q")) {
//             System.out.println("You are still playing the game!");
//         }
//         else {
//             System.out.println("You quit the game ");
//         }





//     }
// }








// switch statement use case


// public class Main {
//     public static void main(String[] args) {
//         //  switch statement allows variable to be tested for equality against a list of values, good to use when using a lot of if statements

//         String day = "Friday";

//         switch(day) {
//             case "Sunday": System.out.println("It is Sunday !");
//             break;
//             case "Monday": System.out.println("It is Monday !");
//             break;
//             case "Tuesday": System.out.println("It is Tuesday !");
//             break;
//             case "Wednesday": System.out.println("It is Wednesday !");
//             break;
//             case "Thursday": System.out.println("It is Thursday !");
//             break;
//             case "Friday": System.out.println("It is Friday !");
//             break;
//             case "Saturday": System.out.println("It is Saturday !");
//             break;
//             default: System.out.println("That is not a day");
//         }


//     }
// }































// // generate random values, great for game design

// import java.util.Random;

// public class Main {
//     public static void main(String[] args) {
//         Random random = new Random();

//         // generate random number between 1 and 6, if you want 0 - 5, you can leave out the +1, and if you want number between -1000000000 and 1000000000

//         // int x = random.nextInt(6)+1;

//         // double y = random.nextDouble();

//         boolean z = random.nextBoolean();

//         // System.out.println(x);

//         // System.out.println(y);

//         System.out.println(z);
//     }
// }

































// simple math operations




// public class Main {
//     public static void main(String[] args) {
//         double x = 3.14;
//         double y = 10;

//         double z = Math.max(x, y);
//         // double z = Math.min(x, y);

//         // double z = Math.abs(y);

//         // double z = Math.sqrt(y);

//         // double z = Math.round(x);
        
//         // double z = Math.floor(x);

//         // double z = Math.ceil(x);

//         System.out.println(z);
//     }
// }






// simple GUI program asking for user input and answering


// import javax.swing.JOptionPane;

// public class Main {
//     public static void main(String[] args) {
//         String name = JOptionPane.showInputDialog("Enter your name");

//         JOptionPane.showMessageDialog(null, "Hello " + name);

//         int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age "));

//         JOptionPane.showMessageDialog(null, "You are " + age + " years old");
        
//         double height = Double.parseDouble(JOptionPane.showInputDialog("Enter your height "));

//         JOptionPane.showMessageDialog(null, "You are " + height + " cm tall");
//     }
// }







// create a program that will find hypotenuse of triangle

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {
//         double x;
//         double y;
//         double z;

//         Scanner scanner = new Scanner(System.in);

//         System.out.println("Enter side x: ");
//         x = scanner.nextDouble();

//         System.out.println("Enter side y: ");
//         y = scanner.nextDouble();


//         // Math formula to find hypotenuse of triangle given side x and side y are known
//         z = Math.sqrt((x*x)+(y*y));

//         System.out.println("The hypotenuse is: " + z);

//         scanner.close();
        
//     }
// }
















// public class Main {
//     public static void main(String[] args) {
        
//     }
// }


