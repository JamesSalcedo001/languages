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

        if (search(data)) {
            removeHelper(root, data);
        }
        else {
            System.out.println(data + " could not be found");
        }

     }

     private NodeBST removeHelper(NodeBST root, int data) {
        if (root == null) {
            return root;
        }
        else if (data < root.data) {
            root.left = removeHelper(root.left, data);
        }
        else if (data > root.data) {
            root.right = removeHelper(root.right, data);
        }
        else { // node found
            if (root.left == null && root.right == null) {
                root = null;
            }
            else if (root.right != null) { // find a successor to replace this node
                root.data = successor(root);
                root.right = removeHelper(root.right, root.data);
            }
            else { // find a predecessor to replace this node
                root.data = predecessor(root);
                root.left = removeHelper(root.left, root.data);
            }
        }
        return root;
     }

     private int successor(NodeBST root) { // find least value below right child of this root node
        root = root.right;

        while(root.left != null) {
            root = root.left;
        }
        return root.data;
     }

     private int predecessor(NodeBST root) { // find greatest value below left child of this root node
        root = root.left;

        while(root.right != null) {
            root = root.right;
        }
        return root.data;
     }

}
