// Tree data structure - non linear data structure where nodes are organized in a hierarchy

// examples of tree data structures are - file explorers, databases, DNS, and HTML DOM

// the top of tree is known as the root node, it does not have any incoming edges, only outgoing edges, any nodes at bottom of tree are known as leaf nodes, which do not have outgoing edges but they do have incoming edges, and then branch nodes are in the middle, they have incoming and outgoing edges. nodes with outgoing edges are known as parents, nodes with incoming edges are known as child nodes, nodes with incoming AND outgoing nodes are called parent/children nodes. children nodes that share the same parent node are called sibling nodes

// subtree is smaller tree held within a larger tree

// size = number of nodes

// depth = number of edges below root node

// height = number of edges above furthest leaf node






// binary search trees 


public class Main {

    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();

        tree.insert(new NodeBST(5));
        tree.insert(new NodeBST(1));
        tree.insert(new NodeBST(9));
        tree.insert(new NodeBST(2));
        tree.insert(new NodeBST(7));
        tree.insert(new NodeBST(3));
        tree.insert(new NodeBST(6));
        tree.insert(new NodeBST(4));
        tree.insert(new NodeBST(8));

    }
}































// breadth first search - search algorithm for traversing a tree or graph data structure

// done one 'level' at a time, rather than one 'branch' at a time


// public class Main {

//     public static void main(String[] args) {
//         // Breadth FS = Traverse a graph level by level
// 		//			   Utilizes a Queue
// 		//			   Better if destination is on average close to start
// 		//			   Siblings are visited before children
		
// 		// Depth FS   = Traverse a graph branch by branch
// 		//			   Utilizes a Stack
// 		//			   Better if destination is on average far from the start
// 		//			   Children are visited before siblings
// 		//			   More popular for games/puzzles
		
// 		GraphFour graph = new GraphFour(5);
		
// 		graph.addNode(new Node('A'));
// 		graph.addNode(new Node('B'));
// 		graph.addNode(new Node('C'));
// 		graph.addNode(new Node('D'));
// 		graph.addNode(new Node('E'));
		
// 		graph.addEdge(0, 1);
// 		graph.addEdge(1, 2);
// 		graph.addEdge(1, 4);
// 		graph.addEdge(2, 3);
// 		graph.addEdge(2, 4);
// 		graph.addEdge(4, 0);
// 		graph.addEdge(4, 2);
		
// 		graph.print();

//         graph.breadthFirstSearch(0);
//     }
// }











// DFS ( Depth first search) - search algorithm for traversing a tree or graph data structure

// 3 steps

// 1. pick a route
// 2. keep going until you reach a dead end, or a previously visited node
// 3. backtrack to last node that has unvisited adjacent neighbors


// using an adjaceny matrix


// public class Main {

//     public static void main(String[] args) {

//         GraphThree graph = new GraphThree(5);

//         // populating graph with nodes

//         graph.addNode(new Node('A'));
//         graph.addNode(new Node('B'));
//         graph.addNode(new Node('C'));
//         graph.addNode(new Node('D'));
//         graph.addNode(new Node('E'));

//         // populating graph with edges

//         graph.addEdge(0, 1);
//         graph.addEdge(1, 2);
//         graph.addEdge(1, 4);
//         graph.addEdge(2, 3);
//         graph.addEdge(2, 4);
//         graph.addEdge(4, 0);
//         graph.addEdge(4, 2);

//         graph.print();

//         graph.depthFirstSearch(3);

        
//     }
// }



















// adjacency list - an array / arraylist of linkedlists, each linkedlist has a unique node at the head(beginning of list[0]), all adjacent neighbors to that node are added to that node's linkedlist

// runtime complexity to check an Edge - O(v)
// space complexity - O(v + e)

// public class Main {

//     public static void main(String[] args) {
        

//         GraphTwo graph = new GraphTwo();

//         graph.addNode(new NodeTwo('A'));
//         graph.addNode(new NodeTwo('B'));
//         graph.addNode(new NodeTwo('C'));
//         graph.addNode(new NodeTwo('D'));
//         graph.addNode(new NodeTwo('E'));

//         graph.addEdge(0, 1);
//         graph.addEdge(1, 2);
//         graph.addEdge(1, 4);
//         graph.addEdge(2, 3);
//         graph.addEdge(2, 4);
//         graph.addEdge(4, 0);
//         graph.addEdge(4, 2);

//         graph.print();
//     }
// }





















// graphs - directed and undirected - adjacency matrix one of two ways used to represent a graph, 2D array  - runtime complexity to locate an edge with an adjacency matrix is O(1) or constant time which is good, space complexity is O(v ^ 2 or n ^ 2) which is not great, suits graphs with a lot of edges. Adjacency list is an array/arraylist of linked lists - time complexity is O(V) or O(n), space complexity O(V + E) 




// adjacency matrix - a 2D array to storre 1's/0's to represent edges

// # of rows = # of unique nodes
// # of columns = # of unique nodes

// runtime complexity to check an Edge: O(1)
// space complexity: O(v ^ 2) v for vertices

// public class Main {

//     public static void main(String[] args) {
        
//         Graph graph = new Graph(5);

//         graph.addNode(new Node('A')); // index of 0
//         graph.addNode(new Node('B')); // index of 1
//         graph.addNode(new Node('C'));
//         graph.addNode(new Node('D'));
//         graph.addNode(new Node('E'));

//         graph.addEdge(0, 1); // adding an edge between Nodes A and B, which have indices 0 and 1
//         graph.addEdge(1, 2); // adding an edge between Nodes B and C
//         graph.addEdge(2, 3); // Node C has two edges here
       
//        // D is going to be left with no edges, this is an example of a directed graph
//         graph.addEdge(2, 4);
        

//         // E has two edges, E - A
//         graph.addEdge(4, 0);

//         // E - C
//         graph.addEdge(4, 2);

//         graph.print();

//         System.out.println();

//         System.out.println(graph.checkEdge(3, 2));


//     }
// }











// hash tables - data structure that stores unique keys to values ex: <Integer, String>, each key/vvalue pair is known as an Entry. FAST insertion, look up, and deletion of key/value pairs. not ideal for small data sets, great with large data sets

// hashing - takes a key and computes an integer (formula will vary based on key and index type). in a hashtable we use the hash % capacity to calculate an index number

// key.hashCode() % capacity = index


// bucket - an indexed storage location for one or more Entries, can store multiple Entries in case of a collision (linked similarly a LinkedList)

// collision - hash function generates the same index for more than one key --------- less collisions = more efficiency


// runtime complexity: best case O(1) constant time, worst case O(n) linear time








// import java.util.*;

// public class Main {

//     public static void main(String[] args) {
//         Hashtable<Integer, String> table = new Hashtable<>(10);

//         // adding values to hashtable

//         table.put(100, "Spongebob");
//         table.put(123, "Patrick");
//         table.put(321, "Sandy");
//         table.put(555, "Squidward");
//         table.put(777, "Gary");


//         // remove value from hashtable
//         // table.remove(777);
        

//         // iterating over key/value pairs and printing each 
//         for (Integer key : table.keySet()) {
//             System.out.println(key.hashCode() % 10 + "\t" + key + "\t" + table.get(key));
//         }
        

//     }
// }




// import java.util.*;

// public class Main {

//     public static void main(String[] args) {
//         Hashtable<String, String> table = new Hashtable<>(21);

//         // adding values to hashtable

//         table.put("100", "Spongebob");
//         table.put("123", "Patrick");
//         table.put("321", "Sandy");
//         table.put("555", "Squidward");
//         table.put("777", "Gary");


//         // remove value from hashtable
//         // table.remove(777);
        

//         // iterating over key/value pairs and printing each 
//         for (String key : table.keySet()) {
//             // System.out.println(key.hashCode() % 10 + "\t" + key + "\t" + table.get(key));

//             // changing the modulus value can determine if there are collisions or not
//             System.out.println(key.hashCode() % 21 + "\t" + key + "\t" + table.get(key));
//         }
        

//     }
// }
































// QuickSort Algorithm - moves smaller elements to left of a pivot, recursively divide array in 2 partitions

// runtime complexity = best case O(n log(n)), average case O(n log(n)), worst case O(n ^ 2) if already sorted

// space complexity = O(log(n)) due to recursion, uses more space than bubble, selection, and insertion sort


// public class Main {

//     public static void main(String[] args) {
        
//         int[] array = {8, 2, 5, 3, 9, 4, 7, 6, 1};

//         quickSort(array, 0, array.length - 1);

//         for (int i : array) {
//             System.out.print(i + " ");
//         }
//     }

//     private static void quickSort(int[] array, int start, int end) {
//         if (end <= start) return; // base case

//         int pivot = partition(array, start, end);
//         quickSort(array, start, pivot - 1);
//         quickSort(array, pivot + 1, end);

//     }


//     private static int partition(int[] array, int start, int end) {

//         int pivot = array[end];
//         int i = start - 1;

//         for (int j = start; j <= end - 1; j++) {
//             if (array[j] < pivot) {
//                 i++;
//                 int temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//         i++;
//         int temp = array[i];
//         array[i] = array[end];
//         array[end] = temp;

//         return i;
//     }

// }
























// merge sort - runtime complexity of O(n log n) - quasilinear time - quicksort, mergesort, and heapsort fall into this category of runtime better than O(n ^ 2) - quadratic time specifically with time, insertion sort, selection sort, and bubble sort when working with larger data sets, however mergesort uses more space than bubble sort, selection sort, and insertion sort because it creates numerous subarrays 

// O(n) linear space - space complexity - merge sort

// O(1) - constant space - bubble sort, selection sort and insertion sort

// public class Main {

//     public static void main(String[] args) {
//          int[] array = {8, 2, 5, 3, 4, 7, 6, 1};

//          mergeSort(array);

//          for (int i = 0; i < array.length; i++) {
//             System.out.println(array[i] + " ");
//          }
//     }

//     private static void mergeSort(int[] array) {
//         int length = array.length;
//         if (length <= 1) return; // base case

//         int middle = length / 2;
//         int[] leftArray = new int[middle];
//         int[] rightArray = new int[length - middle];

//         int i = 0; // left array
//         int j = 0; // right array

//         for (; i < length; i++) {
//             if (i < middle) {
//                 leftArray[i] = array[i];
//             }
//             else {
//                 rightArray[j] = array[i];
//                 j++;
//             }
//         }
//         mergeSort(leftArray);
//         mergeSort(rightArray);
//         merge(leftArray, rightArray, array);
//     }

//     // helper method
//     private static void merge(int[] leftArray, int[] rightArray, int[] array) {

//         int leftSize = array.length / 2;
//         int rightSize = array.length - leftSize;
//         int i = 0, l = 0, r = 0; // indices
        
//         //check conditions for merging
//         while (l < leftSize && r < rightSize) {
//             if (leftArray[l] < rightArray[r]) {
//                 array[i] = leftArray[l];
//                 i++;
//                 l++;
//             }
//             else {
//                 array[i] = rightArray[r];
//                 i++;
//                 r++;
//             }
//         }
//         while (l < leftSize) {
//             array[i] = leftArray[l];
//             i++;
//             l++;
//         }
//         while (r < rightSize) {
//             array[i] = rightArray[r];
//             i++;
//             r++; 
//         }
//     }
// }

















// recursion - when a thing is defined in terms of itself, apply the result of a procedure, to a procedure. a recursive method calls itself. can be a substitute for iteration. Divide a problem into sub problems of the same type as the original. commonly used with advanced sorting algorithms and navigating trees.

// advantages

// esasier to write/read
// easier to debug

// disadvantages
// sometimes slower
// uses more memory


// call stack- stack data structure that stores info about the active subroutines of a computer program. keeps track of the order in which a program needs to function 

// stack overflow error - when the program runs out of memory



// iterative version
// public class Main {

//     public static void main(String[] args) {
//         walk(5);
//     }

//     private static void walk(int steps) {
//         for (int i = 0; i < steps; i++) {
//             System.out.println("You take a step");
//         }
//     }

// }


// recursive version
// public class Main {

//     public static void main(String[] args) {
//         walk(5);
//     }

//     private static void walk(int steps) {
//         if (steps < 1) return; // base case
//         System.out.println("You take a step");
//         walk(steps - 1); // recursive case
//     }

// }


// public class Main {

//     public static void main(String[] args) {
//         System.out.println(factorial(7));
//     }

//     private static int factorial(int num) {
//         if (num < 1) return 1; // base case
//         return num * factorial(num - 1); // recursive
//     }
// }



// public class Main {

//     public static void main(String[] args) {
//         System.out.println(power(2, 8));
//     }

//     private static int power(int base, int exponent) {
//         if (exponent < 1) return 1; // base case
//         return base * power(base, exponent - 1);
//     }
// }













/*

    Insertion sort - after comparing elements to the left, shift elements to the right to make room to insert a value

    quadratic time O(n ^ 2)

    small data set - decent

    large data set - very poor

    less steps than bubble sort
    best case is O(n) compared to selection sort O(n ^ 2)

    better to use Insertion Sort over Bubble Sort or Selection Sort


 */


// public class Main {

//     public static void main(String[] args) {

//         int array[] = {9, 1, 8, 2, 7, 3, 6, 5, 4};

//         insertionSort(array);

//         for (int i : array) {
//             System.out.print(i + " ") ;
//         }
        
//     }

//     private static void insertionSort(int[] array) {
//        for (int i = 1; i < array.length; i++) {
//             int temp = array[i];
//             int j = i - 1;

//             while (j >= 0 && array[j] > temp) {
//                 array[j + 1] = array[j];
//                 j--;
//             }
//             array[j + 1] = temp;
//        } 
//     }
// }



























/*
    Selection Sort

    O (n ^ 2) - quadratic runtime - insertion sort, bubblesort, and selection sort are all within this category
 

    search through an array and keep track of the minimum value during each iteration. at the end of each iteration, we swap variables

    small data set - okay
    large data set - very poor

 */



// public class Main {

//     public static void main(String[] args) {
       
//         int array[] = {8, 7, 9, 2, 3, 1, 5, 4, 6};

//         selectionSort(array);


//         for (int i : array) {
//             System.out.println(i);
//         }
//     }

//     private static void selectionSort(int[] array) {
//         for (int i = 0; i < array.length - 1; i++) {
//             int min = i;
//             for (int j = i + 1; j < array.length; j++) {
//                 // ascending order
//                 if (array[min] > array[j]) {
//                 // descending order
//         //      if (array[min] < array[j]) {
//                     min = j;
//                 }
//             }

//             int temp = array[i];
//             array[i] = array[min];
//             array[min] = temp;
//         }
//     }
// }



























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