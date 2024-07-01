// constructors: 

// special methods called when object is instantiated. used to initialize object 

// default constructor: provided by Java if no constructor is explicitly defined 

// parameterized constructor: used to initialize instance variables with specific values 




public class Car {
    // attributes
    String color;
    String model;
    int year;


    // parameterized constructor
    public Car(String color, String model, int year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }


    // methods
    void displayDetails() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }
}
