public class Dog extends Animal {
    

    // child class overriding the parent (Animal) class's already existing speak method. override keyword is not necessary but best practice

    @Override
    void speak() {
        System.out.println("Bark bark");
    }
}
