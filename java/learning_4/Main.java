
















// super = keyword refers to the superclass (parent) of object, very similar to this keyword


// public class Main {

//     public static void main(String[] args) {
        
//         Hero hero1 = new Hero("Batman", 42, "$$$");

//         Hero hero2 = new Hero("Superman", 43, "everything");

//         System.out.println(hero1.name);
//         System.out.println(hero1.age);
//         System.out.println(hero1.power);

//         System.out.println(hero2.toString());
//     }
// }














// method overriding - declaring method in sub class, which is aleady present in parent class, done so that a child class can give its own implementation


// public class Main {

//     public static void main(String[] args) {
        
//         Animal animal = new Animal();
//         Dog dog = new Dog();

//         dog.speak();
//         animal.speak();
//     }
// }
















// static keyword modifier

// public class Main {

//     public static void main(String[] args) {
        
//         // static = modifier a single copy of a variable/method is created and shared, the class owns the static member

//         Friend friend1 = new Friend("Spongebob");
//         Friend friend2 = new Friend("Patrick");
//         Friend friend3 = new Friend("Squidward");
//         Friend friend4 = new Friend("Sandy");





//         Friend.displayFriends();

//     }
// }












// toString method - method that all obj inherit, returns string that textually reps an object, can be used implicitly or explicitly

// public class Main {

//     public static void main(String[] args) {
        
//         Car car = new Car();

//         // System.out.println(car.make);
//         // System.out.println(car.model);
//         // System.out.println(car.color);
//         // System.out.println(car.year);

//         System.out.println(car);
//         // same as with the twoString method, will return address in memory
//     }
// }


















// overloaded constructors - multiple constructors within a class with the same name, but diff params, name + params = signature


// public class Main {

//     public static void main(String[] args) {
//         Pizza pizza = new Pizza("thick crust", "tomato", "mozzarella");

//         System.out.println("Here are the ingredients to your pizza: ");

//         System.out.println(pizza.bread);
//         System.out.println(pizza.sauce);
//         System.out.println(pizza.cheese);
//         System.out.println(pizza.topping);
//     }
// }













// constructors

// public class Main {

//     public static void main(String[] args) {
//         // constructor = special method called when object is instantiated  

//         Human human = new Human("Rick", 65, 70);
//         Human human2 = new Human("Morty", 16, 50);


//         human2.eat();
//         human.drink();

//         System.out.println(human.name);
//     }
// }



























// OOP contructing car instances


// public class Main {

//     public static void main(String[] args) {
//         // object - instance of a class that may contain attributes and methods

//          Car myCar = new Car();
//          Car myCar2 = new Car();


//          System.out.println(myCar.model);
//          System.out.println(myCar.make);

//          System.out.println();

//          System.out.println(myCar2.make);
//          System.out.println(myCar.model);

//          myCar.drive();

//          myCar.brake();
//     }
    
// }






// overloaded methods


// public class Main {
//     public static void main(String[] args) {
//             // overloaded methods - share the same name but have different params, method name + params = method signature
            
          
//             double x = add(1.0, 2.0, 3.0, 4.0);
//             System.out.println(x);
            

//     }

//     static int add(int a, int b) {
//         System.out.println("This is overloaded method #1");
//         return a + b;
//     }

//     static int add(int a, int b, int c) {
//         System.out.println("This is overloaded method #2");
//         return a + b + c;
//     }

//     static int add(int a, int b, int c, int d) {
//         System.out.println("This is overloaded method #3");
//         return a + b + c + d;
//     }


//     static double add(double a, double b) {
//         System.out.println("This is overloaded method #4");
//         return a + b;
//     }

//     static double add(double a, double b, double c) {
//         System.out.println("This is overloaded method #5");
//         return a + b + c;
//     }

//     static double add(double a, double b, double c, double d) {
//         System.out.println("This is overloaded method #6");
//         return a + b + c + d;
//     }
    
// }










































// array/collection iteration with foreach loop

// import java.util.ArrayList;

// public class Main {

//     public static void main(String[] args) {
//          // foreach loop = traversing technique to iterate through elems in an array/collection, less steps more readable, less flexible though

//         //  String[] animals = { "cat", "dog", "rat", "bird"};

//         ArrayList<String> animals = new ArrayList<String>();

//         animals.add("Cat");
//         animals.add("Dog");
//         animals.add("Rat");
//         animals.add("Bird");

//          for (String i : animals) {
//             System.out.println(i);
//          }
//     }
// }















// separate shopping lists - add together

// import java.util.*;

// public class Main {

//     public static void main(String[] args) {
        
//         // 2d arraylists - dynamic list of lists
//         // change size during runtime


//         ArrayList<ArrayList<String>> groceryList = new ArrayList<>();







//         ArrayList<String> bakeryList = new ArrayList<>();
//         bakeryList.add("pasta");
//         bakeryList.add("garlic bread");
//         bakeryList.add("donuts");


//         ArrayList<String> produceList = new ArrayList<>();

//         produceList.add("tomatoes");
//         produceList.add("zucchini");
//         produceList.add("peppers");

//         ArrayList<String> drinksList = new ArrayList<>();

//         drinksList.add("soda");
//         drinksList.add("coffee");


//         groceryList.add(bakeryList);
//         groceryList.add(produceList);
//         groceryList.add(drinksList);

        
//         // retrieves first list of lists
//         // System.out.println(groceryList.get(0));


//         // retrieves first element of the first list
//         System.out.println(groceryList.get(0).get(0));


//         // getting last element of the last list
//         System.out.println(groceryList.get(2).get(1));


        

//         // System.out.println(bakeryList.get(0)); // retrieves a specific elem

//     }
// }












// arraylists - collection, a type of resizeable array, elements can be added and removed after compilation phase, only store reference data types

// import java.util.ArrayList;

// public class Main {
//     public static void main(String[] args) {
//         ArrayList<String> food = new ArrayList<String>();

//         // add values to arraylist

//         food.add("pizza");
//         food.add("hamburger");
//         food.add("hotdog");

//         // replace value at index 0 with "sushi"
//         food.set(0, "sushi");

//         food.remove(2); // removes elem at index 2
//         food.clear(); // clears entire array


//         // use size instead of length for arraylist
//         for (int i = 0; i < food.size(); i++) {

//             // use get to retrieve values from arraylist
//             System.out.println(food.get(i));
//         }
//     }
// }
























// wrapper classes - provides a way to use primitive data types as reference data types, contain useful methods, can be used with collections (ex: ArrayList)


// primitive    // wrapper
// ............ // ........
/*
    boolean     Boolean
    char        Character
    int         Integer
    double      Double

    autoboxing = the automatic conversion that the Java compiler makes between the primitive data types and their corresponding object wrapper classes

    unboxing = the reverse of autoboxing, automatic conversion of wrapper class to primitive
 */

//  public class Main {
//     public static void main(String[] args) {
        
//         Boolean a = true;
//         Character b = '@';       
//         Integer c = 123;
//         Double d = 3.14;
//         String e = "James";


//         // unboxing to a primitive data type
//         if (a==true) {
//             System.out.println("This is true");
//         }

//     }
// }








// public class Main {
//     public static void main(String[] args) {
//         // String reference data types that can store one or more characters reference data types have access to useful methods


//         String name = "James";

//         // boolean result = name.equals("James");
//         // boolean result = name.equalsIgnoreCase("james");

//         // int result = name.length();

//         // char result = name.charAt(0);

//         // int result = name.indexOf("J");

//         // boolean result = name.isEmpty();

//         // String result = name.toUpperCase();
//         // String result = name.toLowerCase();

//         // String result = name.trim();

//         String result = name.replace('J', 'Z');


//         System.out.println(result);

//     }
// }
















// 2d arrays


// public class Main {
//     public static void main(String[] args) {

// // alternate way to assign 2D array

//         String[][] cars = {
//             {"Camaro", "Corvette", "Silverado"}, 
//             {"Mustang", "Ranger", "F-150"}, 
//             {"Ferrari", "Lambo", "Tesla"}
//         };

// //         String[][] cars = new String[3][3];
// //         //                           c o l                          
// //         // row 1, column 1        r  ["Camaro"][][]
// //         //                        o  [][][]
// //         //                        w  [][][]
// //         cars[0][0] = "Camaro";



// // //                                   c o l                          
// //         // row 1, column 2        r  ["Camaro"]["Corvette"][]
// //         //                        o  [][][]
// //         //                        w  [][][]
// //         cars[0][1] = "Corvette";
        
// //         // row 1, column 3
// //         cars[0][2] = "Silverado";

// //         // row 2, column 1
// //         cars[1][0] = "Mustang";

// //         // row 2, column 2
// //         cars[1][1] = "Range Rover";

// //         // row 2, column 3
// //         cars[1][2] = "F-150";

// //         // row 3, column 1
// //         cars[2][0] = "Ferrari";

// //         // row 3, column 2
// //         cars[2][1] = "Lambo";

// //         //row 3, column 3
// //         cars[2][2] = "Tesla";


//         for (int i = 0; i < cars.length; i++) {
//             System.out.println();
//             for (int j = 0; j < cars[i].length; j++) {
//                 System.out.print(cars[i][j] + " | ");
//             }
//         }


//     }
// }











// arrays

// public class Main {
//     public static void main(String[] args) {

//         // only one data type can be used

//         // String[] cars = {"Camaro", "Corvette", "Tesla"};

//         // cars[0] = "Mustang";

//         // System.out.println(cars[3]);

//         String[] cars = new String[3];

//         cars[0] = "Camaro";
//         cars[1] = "Corvette";
//         cars[2] = "Tesla";

//         System.out.println(cars[2]);

//         // loop through elems in arrays

//         for (int i = 0; i < cars.length; i++) {
//             System.out.println(cars[i]);
//         }
//     }
// }





























// nested loops set a number of rows and columns and display rectangle of particular symbol

// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {

//         // nested loops

//         Scanner scanner = new Scanner(System.in);
//         int rows;
//         int columns;
//         String symbol = "";

//         System.out.println("Enter # of rows: ");
//         rows = scanner.nextInt();

//         System.out.println("Enter # of columns: ");
//         columns = scanner.nextInt();

//         System.out.println("Enter symbol to use: ");
//         symbol = scanner.next();

//         // outer loop in charge of rows

//         for (int i = 1; i <= rows; i++) {
//             System.out.println();
            
//             // inner loop in charge of columns

//             for (int j = 1; j <= columns; j++) {
//                 System.out.print(symbol);
//             }
//         }

        
//     }
// }

















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


















