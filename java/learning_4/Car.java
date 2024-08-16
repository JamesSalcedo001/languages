public class Car {
    String make = "Ford";
    String model = "Mustang";
    int year = 2021;
    String color = "red";

    
    // method overriding - toString method
    public String toString() {
        
        // String myString = make + "\n" + model + "\n" + color + "\n" + year;
        
        // return myString;

        // one liner
        return make + "\n" + model + "\n" + color + "\n" + year;
    }
}









// public class Car {
//     String make = "Chevrolet";
//     String model = "Corvette";
//     int year = 2020;
//     String color = "blue";
//     double price = 50000.00;

//     void drive() {
//         System.out.println("You drive the car");
//     }

//     void brake() {
//         System.out.println("You step on brakes");
//     }
// }