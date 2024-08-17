import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        // Stack: LIFO, last in first out, stores objects into a sort of vertical tower, push() to add to top, pop() to remove from top

        /* 
        stack use cases: 
        1. undo/redo features in text editors
        2. moving back/forward through browser history
        3. backtracking algoriths (maze, file directories)
        4. calling functions (call stack)
        
        */ 


        

        Stack<String> stack = new Stack<String>();

        

        stack.push("Minecraft");
        stack.push("Skyrim");
        stack.push("DOOM");
        stack.push("Borderlands");
        stack.push("FFVII");

        // removes last added item from list, and returns it
        // String myFavGame = stack.pop();

        // peek method checks without removing item
        System.out.println(stack.peek());


        // stack.pop();
        // stack.pop();
        // stack.pop();


        // System.out.println(stack.empty());

        // System.out.println(stack);

        // search through stack - important to note, the TOP item in the stack will return a 1, the next item will be a 2, etc. and if the item does not exist, it returns a -1

        System.out.println(stack.search("FFVII"));



    }
}