// linked lists (singly) - good at inserting or deleting elements, bad at searching for elements, searching through linked list is linear time O(n), but insertion or deletion is constant time O(1)

// can use a linked list to make a stack or a queue


import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {


        // doubly linked list standard
        LinkedList<String> linkedList = new LinkedList<>();

        // linkedList.push("A");
        // linkedList.push("B");
        // linkedList.push("C");
        // linkedList.push("D");
        // linkedList.push("F");

        // the last element added is shifted to the beginning of the list. ie. when A is added with the push() method, it is the first or Head of the Linked List, but when B is added afterwards, A is shifted to the right and B is set to the first element. When C is added afterwards, C is set as the first element. When this list is displayed it reads [F, D, C, B, A]
        
        // linkedList.pop(); // removes the element at the Head, which is F



        // treating a linkedList as a queue, one can use offer() and poll(). when an element is added with the offer() method, the elements are added left to right like a normal list

        linkedList.offer("A");
        linkedList.offer("B");
        linkedList.offer("C");
        linkedList.offer("D");
        linkedList.offer("F");

        // linkedList.poll();
        // removes the left most element, or the element at the Head


        // insert an element into linkedlist
        linkedList.add(4, "E");

        // remove an element from linkedList
        linkedList.remove("E");


        // find the index of an item
        System.out.println(linkedList.indexOf("F"));

        // check the item at the Head of the linkedlist
        System.out.println(linkedList.peekFirst());

        // check the item at the tail of the linkedlist
        System.out.println(linkedList.peekLast());

        // add element to the head(the beginning of the list)
        linkedList.addFirst("0");

        // add element to the tail
        linkedList.addLast("G");

        // removes the element at the head or beginning of list
        linkedList.removeFirst();

        // removes element at tail or end of list
        linkedList.removeLast();


        System.out.println(linkedList);
        
    }
}
































// priority queue - FIFO ds that serves elements with the highest priorities first before elements with lower priority

// import java.util.PriorityQueue;
// import java.util.Queue;
// import java.util.Collections;

// public class Main {

//     public static void main(String[] args) {
        
//         // Queue<Double> queue = new PriorityQueue<>();
//         // Queue<Double> queue = new PriorityQueue<>(Collections.reverseOrder());
//         // reverses the order that items are prioritized

//         Queue<String> queue = new PriorityQueue<>(Collections.reverseOrder());
//         // The collections.reverseOrder() is called a comparator



//         // queue.offer(3.0);
//         // queue.offer(2.5);
//         // queue.offer(4.0);
//         // queue.offer(1.5);
//         // queue.offer(2.0);

//         queue.offer("B");
//         queue.offer("C");
//         queue.offer("A");
//         queue.offer("F");
//         queue.offer("D");




//         // while loop that displays and removes element by element each iteration until empty, starting with the item at the head(3.0) as a normal queue, however a priority queue takes these items and sorts them in ascending order, so the first value displayed and removed will be 1.5, then 2.0, etc.


//         while(!queue.isEmpty()) {
//             System.out.println(queue.poll());
//         }

//     }
// }















// queues - FIFO data structure - First In First Out (ex: line of people), a collection designed for holding elements prior to processing, linear data structure. head is the item at the front of the queue, tail is the item at the end

// add - enqueue, offer()
// remove - dequeue, poll()

// Queue is an interface in Java, cannot instantiate the type queue, to utilize you need a class that implements queue, linked lists and priority queues are two classes that implement queues

/*

1. keyboard buffer: letters should appear on the screen in the order they are pressed

2. printer queue: print jobs should be completed in order

3. used in LinkedLists, PriorityQueues, and Breadth-first Search
 
 */

// import java.util.LinkedList;
// import java.util.Queue;

// public class Main {

//     public static void main(String[] args) {

//         Queue<String> queue = new LinkedList<String>();

//         // better to use offer, poll, and peek 

//         queue.offer("Karen");
//         queue.offer("Chad");
//         queue.offer("Steve");
//         queue.offer("Harold");

//         queue.isEmpty(); // returns false, checks if the queue is empty

//         // checks the amount of items in the queue
//         queue.size();


//         // boolean whether or not an item exists
//         queue.contains("Harold");


//         // checks the front of the queue (the head, which is the first element which was added (Karen) without altering anything)
//         // System.out.println(queue.peek());

//         // removes element at the head (first element at index of 0), which means Karen is removed, poll will not throw an exception
//         queue.poll();

//         // next Chad is removed
//         queue.poll();

//         System.out.println(queue);
         
//     } 
// }












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