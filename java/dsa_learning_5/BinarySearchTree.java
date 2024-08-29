public class BinarySearchTree {
    NodeBST root;

    public void insert(NodeBST node) {
        root = insertHelper(root, node)
    }

    private NodeBST insertHelper(NodeBST root, NodeBST node) {
            int data = node.data;

            if (root == null) {
                root = node;
                return root;
            }
            else if (data < root.data) {
                root.left = insertHelper(root.left, node);
            }
            else {
                root.right = insertHelper(root.right, node);
            }
            return null;
    }

    public void display() {

    }

    private void displayHelper(NodeBST root) {

    }

     public boolean search(int data) {
        return false;
     }

     private boolean searchHelper(NodeBST root, int data) {
        return true;
     }

     public void remove(int data) {

     }

     private NodeBST removeHelper(NodeBST root, int data) {
        return null;
     }

     private int successor(NodeBST root) {
        return 0;
     }

     private int predecessor(NodeBST root) {
        return 0;
     }

}
