//Iterative approach

const dfs = (root) => {
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
};

dfs(5,3,4,51)
