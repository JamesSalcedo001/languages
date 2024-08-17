// queues - FIFO data structure - First In First Out (ex: line of people), a collection designed for holding elements prior to processing, linear data structure. head is the item at the front of the queue, tail is the item at the end

// add - enqueue, offer()
// remove - dequeue, poll()

// Queue is an interface in Java, cannot instantiate the type queue, to utilize you need a class that implements queue, linked lists and priority queues are two classes that implement queues

/*

1. keyboard buffer: letters should appear on the screen in the order they are pressed

2. printer queue: print jobs should be completed in order

3. used in LinkedLists, PriorityQueues, and Breadth-first Search
 
 */

import java.util.LinkedList;
import java.util.Queue;

public class Main {

    public static void main(String[] args) {

        Queue<String> queue = new LinkedList<String>();

        // better to use offer, poll, and peek 

        queue.offer("Karen");
        queue.offer("Chad");
        queue.offer("Steve");
        queue.offer("Harold");

        queue.isEmpty(); // returns false, checks if the queue is empty

        // checks the amount of items in the queue
        queue.size();


        // boolean whether or not an item exists
        queue.contains("Harold");


        // checks the front of the queue (the head, which is the first element which was added (Karen) without altering anything)
        // System.out.println(queue.peek());

        // removes element at the head (first element at index of 0), which means Karen is removed, poll will not throw an exception
        queue.poll();

        // next Chad is removed
        queue.poll();

        System.out.println(queue);
         
    } 
}



































// stacks 


// import java.util.Stack;

// public class Main {
//     public static void main(String[] args) {
//         // Stack: LIFO, last in first out, stores objects into a sort of vertical tower, push() to add to top, pop() to remove from top

//         /* 
//         stack use cases: 
//         1. undo/redo features in text editors
//         2. moving back/forward through browser history
//         3. backtracking algoriths (maze, file directories)
//         4. calling functions (call stack)
        
//         */ 


        

//         Stack<String> stack = new Stack<String>();

        

//         stack.push("Minecraft");
//         stack.push("Skyrim");
//         stack.push("DOOM");
//         stack.push("Borderlands");
//         stack.push("FFVII");

//         // removes last added item from list, and returns it
//         // String myFavGame = stack.pop();

//         // peek method checks without removing item
//         System.out.println(stack.peek());


//         // stack.pop();
//         // stack.pop();
//         // stack.pop();


//         // System.out.println(stack.empty());

//         // System.out.println(stack);

//         // search through stack - important to note, the TOP item in the stack will return a 1, the next item will be a 2, etc. and if the item does not exist, it returns a -1

//         System.out.println(stack.search("FFVII"));



//     }
// }