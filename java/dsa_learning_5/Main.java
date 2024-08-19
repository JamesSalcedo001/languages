/*
    Selection Sort

    O (n ^ 2) - quadratic runtime - insertion sort, bubblesort, and selection sort are all within this category
 

    search through an array and keep track of the minimum value during each iteration. at the end of each iteration, we swap variables

    small data set - okay
    large data set - very poor

 */



public class Main {

    public static void main(String[] args) {
       
        int array[] = {8, 7, 9, 2, 3, 1, 5, 4, 6};

        selectionSort(array);


        for (int i : array) {
            System.out.println(i);
        }
    }

    private static void selectionSort(int[] array) {
        for (int i = 0; i < array.length - 1; i++) {
            int min = i;
            for (int j = i + 1; j < array.length; j++) {
                // ascending order
                if (array[min] > array[j]) {
                // descending order
        //      if (array[min] < array[j]) {
                    min = j;
                }
            }

            int temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
}






































/*
    Bubble sort

    - runs at O(n ^ 2) - quadratic time - bubblesort, insertion sort, and selection sort all fall within this O() runtime 

 
    small data set - okay ish

    large data set - very poor

    pairs of adjacent elements are compared, and the elements swapped if they are not in order.



 */



// public class Main {

//     public static void main(String[] args) {
//         int array[] = {9, 1, 8, 2, 7, 3, 6, 4, 5};

//         bubbleSort(array);

//         for (int i : array) {
//             System.out.println(i);
//         }
//     }

//     public static void bubbleSort(int array[]) {
//         for (int i = 0; i < array.length - 1; i++) {
//             for (int j = 0; j < array.length - i - 1; j++) {
//                 // ascending order
//                 if (array[j] > array[j + 1]) {
//                 // descending order 
//             //  if (array[j] < array[j + 1]) {
//                     int temp = array[j];
//                     array[j] = array[j + 1];
//                     array[j + 1] = temp;
//                 }
//             }
//         }
//     }
// }




































 // interpolation search = improvement over binary search, best used for "uniformly" distributed "guesses" where a value might be based on calculated probe results, if probe is incorrect, search area is narrowed, and new probe is calculated

// average case: O(log(log(n)))
// worst case: O(n) [values increase exponentially]



// public class Main {

//     public static void main(String[] args) {

//         int[] array = {1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024};

//         int index = interpolationSearch(array, 256);

//         if (index != -1) {
//             System.out.println("Element found at index: " + index);
//         } else {
//             System.out.println("Element not found");
//         }


//     }

//     private static int interpolationSearch(int[] array, int value) {

//         int high = array.length - 1;
//         int low = 0;

//         while (value >= array[low] && value <= array[high] && low <= high) {

//             int probe = low + (high - low) * (value - array[low]) / (array[high] - array[low]);

//             System.out.println("probe: " + probe);

//             if (array[probe] == value) {
//                 return probe;
//             } else if (array[probe] < value) {
//                 low = probe + 1;
//             } else {
//                 high = probe - 1;
//             }
//         } 


//         return -1;
//     }
// }




































// binary search algorithm - search algorithm that finds the position of a target value within a sorted array. Half of the array is eliminated during each "step" runtime of binary search is O(log n), very effective with large data sets, less effective with smaller data sets

// import java.util.Arrays;

// public class Main {

//     public static void main(String[] args) {

//         int array[] = new int[1000000];
//         int target = 777777;

//         for (int i = 0; i < array.length; i++) {
//             array[i] = i;
//         }


//         // int index = Arrays.binarySearch(array, target);

//         int index = binarySearch(array, target);


//         if (index == -1) {
//             System.out.println(target + " not found");
//         } else {
//             System.out.println("Element found at: " + index);
//         }
        
//     }

//     private static int binarySearch(int[] array, int target) {
//         int low = 0;
//         int high = array.length - 1;

//         System.out.println("starting low: " + low);
//         System.out.println("starting high: " + high);
//         System.out.println();

//         while (low <= high) {
//             int middle = low + (high - low) / 2;
//             int value = array[middle];

//             System.out.println("current low: " + low);

//             System.out.println("Middle: " + value);
//             System.out.println("current high: " + high);

//             System.out.println();


//             if (value < target) low = middle + 1;
//             else if (value > target) high = middle - 1;
//             else return middle; // target found
//         }
//         return -1; // target not found
//     }
// }


































/*
    linear search = Iterate through a collection one element at a time

    runtime complexity: O(n) (linear time)

    disadvantages: 

    slow for large data sets

    advantages:
    fast for searches of small to medium data sets
    does not need to be sorted
    useful for data structures that do not have random access (linked list)


 
 */




// public class Main {

//     public static void main(String[] args) {

//         int[] array = {9, 1, 8, 2, 7, 3, 6, 4, 5};

//         int index = linearSearch(array, 7);

//         if (index != -1) {
//             System.out.println("Element found at index: " + index);
//         } else {
//             System.out.println("Element not found");
//         }
        
//     }

//    private static int linearSearch(int[] array, int value) {
//     for (int i = 0; i < array.length; i++) {
//         if (array[i] == value) {
//             return i;
//         }
//     }
//     return -1;
//    }
// }

































// linkedLists vs arraylists, most applications arraylist performs better, however with larger data sets, when inserting or deleting elements, linkedLists perform better



// import java.util.ArrayList;
// import java.util.LinkedList;

// public class Main {

//     public static void main(String[] args) {


//         LinkedList<Integer> linkedList = new LinkedList<Integer>();


//         ArrayList<Integer> arrayList = new ArrayList<Integer>();

//         long startTime;
//         long endTime;
//         long elapsedTime;

//         for (int i = 0; i < 1000000; i++) {
//             linkedList.add(i);
//             arrayList.add(i);
//         }

//         // ************* LinkedList *************

//         startTime = System.nanoTime();

//         // linkedList.get(0);
//         // linkedList.get(500000);
//         // linkedList.get(999999);
//         // linkedList.remove(0);
//         // linkedList.remove(500000);
//         linkedList.remove(999999);


//         // do something

//         endTime = System.nanoTime();

//         elapsedTime = endTime - startTime;

//         System.out.println("LinkedList:\t" + elapsedTime + " ns");





//         // ************* ArrayList *************


//         startTime = System.nanoTime();

//         // arrayList.get(0);

//         // arrayList.get(500000);

//         // arrayList.get(999999);

//         // arrayList.remove(0);
//         // arrayList.remove(500000);

//         arrayList.remove(999999);

//         // do something

//         endTime = System.nanoTime();

//         elapsedTime = endTime - startTime;

//         System.out.println("ArrayList:\t" + elapsedTime + " ns");


//     }
// }




















// dynamic arrays - arraylists in java - array that can change capacity

/*

advantages: 

1: random access of elements O(1) constant time
2: good locality of reference and data cache utilization
3: easy to insert/delete at the end

disadvantages

1: wastes more memory than something like a linked list
2: shifting elements is time consuming O(n) linear time
3: expanding/shrinking array is time consuming O(n)

*/ 

// import java.util.ArrayList;

// public class Main {

//     public static void main(String[] args) {
//         // ArrayList<String> arrayList = new ArrayList<>();

//         DynamicArray dynamicArray = new DynamicArray(5);

//         dynamicArray.add("A");
//         dynamicArray.add("B");
//         dynamicArray.add("C");
//         dynamicArray.add("D");
//         dynamicArray.add("E");
//         dynamicArray.add("F");

//         // dynamicArray.insert(0, "X");
//         dynamicArray.delete("A");
//         dynamicArray.delete("B");
//         dynamicArray.delete("C");



//         // System.out.println(dynamicArray.search("C"));

//         System.out.println(dynamicArray);
//         System.out.println("empty: " + dynamicArray.isEmpty());

//         System.out.println("size: " + dynamicArray.size);

//         System.out.println("capacity: " + dynamicArray.capacity);

//         // System.out.println(dynamicArray.capacity);
//     }
// }














// linked lists (singly) - good at inserting or deleting elements, bad at searching for elements, searching through linked list is linear time O(n), but insertion or deletion is constant time O(1)

// can use a linked list to make a stack or a queue


/*
    Linked List = Stores nodes into 2 parts (data + address)
    Nodes are in non consecutive memory locations
    elements are linked using pointers



                            Singly Linked List
                    Node            Node             Node
         [data | address] ->  [data | address] -> [data | address] 


                            Doubly Linked List
                    Node                        Node
        [address | data | address] <-> [address | data | address]

    advantages:
    1: dynamic data structure (allocates needed memory while running)
    2: insertion and deletion of Nodes is easy O(1) Constant Time
    3: No/Low memory waste

    disadvantages:
    1: greater memory usage (additional pointer)
    2: no random access of elements (no index[i])
    3: accessing/searching elems is more time consuming O(n) linear time

    uses: 
    1: implement Stacks/Queues
    2. GPS navigation
    3: music playlist



 
 */


// import java.util.LinkedList;

// public class Main {

//     public static void main(String[] args) {


//         // doubly linked list standard
//         LinkedList<String> linkedList = new LinkedList<>();

//         // linkedList.push("A");
//         // linkedList.push("B");
//         // linkedList.push("C");
//         // linkedList.push("D");
//         // linkedList.push("F");

//         // the last element added is shifted to the beginning of the list. ie. when A is added with the push() method, it is the first or Head of the Linked List, but when B is added afterwards, A is shifted to the right and B is set to the first element. When C is added afterwards, C is set as the first element. When this list is displayed it reads [F, D, C, B, A]
        
//         // linkedList.pop(); // removes the element at the Head, which is F



//         // treating a linkedList as a queue, one can use offer() and poll(). when an element is added with the offer() method, the elements are added left to right like a normal list

//         linkedList.offer("A");
//         linkedList.offer("B");
//         linkedList.offer("C");
//         linkedList.offer("D");
//         linkedList.offer("F");

//         // linkedList.poll();
//         // removes the left most element, or the element at the Head


//         // insert an element into linkedlist
//         linkedList.add(4, "E");

//         // remove an element from linkedList
//         linkedList.remove("E");


//         // find the index of an item
//         System.out.println(linkedList.indexOf("F"));

//         // check the item at the Head of the linkedlist
//         System.out.println(linkedList.peekFirst());

//         // check the item at the tail of the linkedlist
//         System.out.println(linkedList.peekLast());

//         // add element to the head(the beginning of the list)
//         linkedList.addFirst("0");

//         // add element to the tail
//         linkedList.addLast("G");

//         // removes the element at the head or beginning of list
//         // linkedList.removeFirst();

//         // removes element at tail or end of list
//         // linkedList.removeLast();


//         // store within variable
//         String first = linkedList.removeFirst();
//         String last = linkedList.removeLast();


//         System.out.println(linkedList);
        
//     }
// }



















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