class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    return this.root;
  }
  insertNode(root, newNode) {
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) root.right = newNode;
      else this.insertNode(root.right, newNode);
    }
  }

  //Delete in BST
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }
  deleteNode(root, key) {
    if (root === null) return null;
    if (key < root.key) root.left = this.deleteNode(root.left, key);
    else if (key > root.key) root.right = this.deleteNode(root.right, key);
    else {
      if (root.left === null && root.right === null) return null;
      else if (root.right === null) return root.left; // Mila hi nhi
      else if (root.left === null) return root.right; // Mila hi nhi
      else {
        let tempNode = this.findMin(root.right);
        root.key = tempNode.key;
        root.right = this.deleteNode(root.right, tempNode.key);
      }
    }
    return root;
  }
  findMin(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }

  //Inorder
  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }
  inOrder(node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }

  //PreOrder
  preOrderTraversal() {
    const res = [];
    this.preOrder(this.root, res);
    return res;
  }
  preOrder(node, res) {
    if (node !== null) {
      res.push(node.key);
      this.preOrder(node.left, res);
      this.preOrder(node.right, res);
    }
  }

  //PostOrder
  postOrderTraversal() {
    let res = [];
    this.postOrder(this.root, res);
    return res;
  }
  postOrder(node, res) {
    if (node !== null) {
      this.postOrder(node.left, res);
      this.postOrder(node.right, res);
      res.push(node.key);
    }
  }

  //DFS - Iterative Approach
  dfs() {
    return this.dfsHelper(this.root);
  }
  dfsHelper(root) {
    if (root === null) return;
    const values = [];
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      values.push(node.key);
      if (node.right !== null) stack.push(node.right);
      if (node.left !== null) stack.push(node.left);
    }
    return values;
  }

  //DFS - Recursive Approach
  dfsRecursive() {
    return this.dfsHelperRecursive(this.root);
  }
  dfsHelperRecursive(root) {
    if (root === null) return [];
    const leftValues = this.dfsHelperRecursive(root.left);
    const rightValues = this.dfsHelperRecursive(root.right);
    return [root.key, ...leftValues, ...rightValues];
  }

  // BFS

  bfs() {
    return this.bfsHelper(this.root);
  }

  bfsHelper(root) {
    if (root === null) return;
    const values = [];
    const queue = [root];
    let sum = 0
    while (queue.length > 0) {
      const node = queue.shift();
      sum += node.key
      values.push(node.key);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    return sum;
  }
}

let myBST = new BST();

myBST.insert(15);
myBST.insert(9);
myBST.insert(19);
myBST.insert(4);
myBST.insert(12);
// console.log(myBST.insert(20));
console.log(myBST.insert(18));
// myBST.delete(5);
console.log(myBST.insert(30));

// console.log(myBST.inOrderTraversal());
// console.log(myBST.preOrderTraversal());
// console.log(myBST.postOrderTraversal());
// console.log(myBST.delete(5))

const dfsResult = myBST.dfs();
const dfsResultRecursive = myBST.dfsRecursive();
console.log(dfsResult);
console.log(dfsResultRecursive);

const bfsResult = myBST.bfs();
console.log(bfsResult);
