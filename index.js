// create a function that accept list and find the largest number inside it
function findLargestNumber(list) {
  if (!Array.isArray(list)) {
    throw new TypeError("Expected an array of numbers");
  }
  if (list.length === 0) {
    return null;
  }

  let largest = -Infinity;
  for (const number of list) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
      throw new TypeError("All values must be finite numbers");
    }
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}
// example usage
const numbers = [3, 7, 2, 9, 4];
console.log(findLargestNumber(numbers)); // Output: 9

// create a depth first search function for a tree structure
function depthFirstSearch(node, target) {
  if (!node) {
    return null;
  }
  if (node.value === target) {
    return node;
  }
  for (const child of node.children || []) {
    const result = depthFirstSearch(child, target);
    if (result) {
      return result;
    }
  }
  return null;
}
// example usage
const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};
console.log(depthFirstSearch(tree, 4)); // Output: { value: 4, children: [] }
