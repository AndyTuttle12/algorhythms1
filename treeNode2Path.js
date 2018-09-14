// This is an interesting challenge to recursively sort from a tree down a path and find a node.
// Generally, this is challenging enough to find the node,
// but this version adds the need to keep track of the tree path as well!

getNodePath = (tree, nodeName) => {
  let pathNodes = ['base'];
  const traverse = (node, nodeName, depth) => {
    if (node.name === nodeName) {
      // This is the happy path for the final return!
      console.log(pathNodes.slice(0,depth).join('/'));
      return pathNodes.slice(0,depth).join('/');
    }
    if (node.children && node.children.length > 0) {
      for (let child of node.children) {
          pathNodes[depth] = child.name;
        traverse(child, nodeName, depth + 1);
      }
    } else {
      console.log('end of a branch',node.name,depth,pathNodes);
      return null;
    }
  };
  return traverse(tree, nodeName, 1);
};

getNodePath(tree.root, nodeName);
