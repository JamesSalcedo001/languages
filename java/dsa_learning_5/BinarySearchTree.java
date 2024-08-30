public class BinarySearchTree {
    NodeBST root;

    public void insert(NodeBST node) {
        root = insertHelper(root, node);
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
            return root;
    }

    public void display() {
        displayHelper(root);
    }

    private void displayHelper(NodeBST root) {
        if(root != null) {
            // increasing order - in order traversal, displayed in non decreasing order
            displayHelper(root.left);
            System.out.println(root.data);
            displayHelper(root.right);

            // decreasing order
            // displayHelper(root.right);
            // System.out.println(root.data);
            // displayHelper(root.left);
        }
    }

     public boolean search(int data) {
        return searchHelper(root, data);
     }

     private boolean searchHelper(NodeBST root, int data) {
        if (root == null) {
            return false;
        }
        else if (root.data == data) {
            return true;
        }
        else if (root.data > data) {
            return searchHelper(root.left, data);
        }
        else {
            return searchHelper(root.right, data);
        }        
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
