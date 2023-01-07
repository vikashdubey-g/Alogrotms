//  a binary tree is a k-ary k=2 tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
//  A valid binary search tree (BST) has ALL left children with values less than the parent node, and ALL right children with values greater than the parent node.

// Binary Tree implementation
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// sack
// const depthFirstValue = (root) => {
//   if (!root) return [];
//   const res = [];
//   const stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log("current", current.val);
//     res.push(current);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return res;
// };

// const depthFirstValue = (root) => {
//   if (!root) return [];
//   const leftValues = depthFirstValue(root.left);
//   const rightValues = depthFirstValue(root.right);
//   return [root.val, ...leftValues, ...rightValues];
// };

// const breadthFirstValues = (root) => {
//   if (!root) return [];
//   const res = [];
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     res.push(current.val);
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return res;
// };

// iteration
// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.val === target) return [current.val, current.left.val, current.right.val];
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return false;
// };

// recursion

// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

// const sumTrees = (root) => {
//   if (!root) return null;
//   let res = 0;
//   function helper(node) {
//     if (!node) return;
//     res += node.val;
//     helper(node.left);
//     helper(node.right);
//   }
//   helper(root);
//   return res;
// };

// const sumTrees = (root) => {
//   if (!root) return 0;
//   return root.val + sumTrees(root.left) + sumTrees(root.right);
// };

// const sumTrees = (root) => {
//   if (!root) return 0;
//   let totalSum = 0;
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     totalSum += current.val;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return totalSum;
// };

// const minTrees = (root) => {
//   let minimum = Infinity;
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.val < minimum) {
//       minimum = current.val;
//     }
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return minimum;
// };

// const minTrees = (root) => {
//   if (!root) return Infinity;
//   const leftMin = minTrees(root.left);
//   const rightMin = minTrees(root.right);

//   return Math.min(root.val, leftMin, rightMin);
// };

const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.right)
  );
  return root.val + maxChildPathSum;
};
// static way to construct binary tree
const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

const treeIncludesRes = maxPathSum(a);
console.log("treeIncludesRes", treeIncludesRes);
// depthFirstValue(a);

// const isSymmetric = (root) => {
//   let res = true;
//   const helper = (node1, node2) => {
//     if (!node1 && !node2) return;
//     if (!node1 || !node2 || node1.val !== node2.val) {
//       res = false;
//       return;
//     }
//     helper(node1.left, node2.right);
//     helper(node2.left, node1.right);
//   };
//   helper(root, root);
//   return res;
// };

// const hasPathSum = (root, targetSum) => {
//   let res = false;
//   const helper = (node, currentSum) => {
//     if (!node || res) return;
//     if (!node.left && !node.right && currentSum === targetSum) {
//       res = true;
//     }
//     helper(node.left, currentSum);
//     helper(node.right, currentSum);
//   };

//   helper(root, 0);
//   return res;
// };
