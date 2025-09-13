const treeElement = {
  single: '└',
  multiple: '├',
  path: '──',
  delimiter: '│',
  space: ' ',
  empty: '',
};

/**
 * @param {TNode} node - Текущий узел.
 * @param {string} prefix - Префикс содержащий пробелы и разделители, передаем сверху для каждого ребенка.
 * @param {number} isLast - Последний ли элемент в узле.
 */
function printTree(node, prefix = "", isLast = true) {
  const branchForm = `${isLast ? treeElement.single : treeElement.multiple}${treeElement.path}` ;
  let currentNodeName = `\n${prefix}${branchForm} ${node.name}`

  if (node.items) {
    const depthDelimiter = isLast ? treeElement.empty : treeElement.delimiter;
    const childrenPrefix = `${prefix}${depthDelimiter}${treeElement.space}`;
    for (let i = 0; i < node.items.length; i++) {
      const isLastChild = i === node.items.length - 1;
      currentNodeName += printTree(node.items[i], childrenPrefix, isLastChild);
    }
  }

  return currentNodeName;
};

const data = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }]
    },
    {
      name: 5,
      items: [{ name: 6 }]
    }
  ]
};

console.log(printTree(data));
console.log(undefined);
