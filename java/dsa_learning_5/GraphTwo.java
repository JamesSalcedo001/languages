import java.util.*;

public class GraphTwo {
    ArrayList<LinkedList<NodeTwo>> alist;

    GraphTwo() {
        alist = new ArrayList<>();
    } 

    public void addNode(NodeTwo node) {
        LinkedList<NodeTwo> currentList = new LinkedList<>();
        currentList.add(node);
        alist.add(currentList); 

    }

    public void addEdge(int src, int dst) {
        LinkedList<NodeTwo> currentList = alist.get(src);
        NodeTwo dstNode = alist.get(dst).get(0);
        currentList.add(dstNode);

    }

    public boolean checkEdge(int src, int dst) {
        LinkedList<NodeTwo> currentList = alist.get(src);
        NodeTwo dstNode = alist.get(dst).get(0);

        for (NodeTwo node : currentList) {
            if (node == dstNode) {
                return true;
            }
        }
        return false;

    }



    public void print() {
        for (LinkedList<NodeTwo> currentList : alist) {
            for (NodeTwo node : currentList) {
                System.out.print(node.data + " -> ");
            }
            System.out.println();
        }
    }

}
