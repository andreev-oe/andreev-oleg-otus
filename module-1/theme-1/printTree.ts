type TNode = {
  name: number,
  items?: TNode[],
};

const treeElement = {
  single: '└',
  multiple: '├',
  path: '──',
  delimiter: '│',
  space3: '   ',
  space1: ' ',
};

/**
 * @param {TNode} node - Текущий узел.
 * @param {string} prefix - Префикс содержащий пробелы и разделители, передаем сверху для каждого ребенка.
 * @param {number} isLast - Последний ли элемент в узле.
 */
function printTree(node: TNode, prefix: string = "", isLast: boolean = true) {
  const branchForm = `${isLast ? treeElement.single : treeElement.multiple}${treeElement.path}` ;
  let currentNodeName = `${prefix}${branchForm} ${node.name}\n`

  if (node.items) {
    const depthDelimiter = isLast ? treeElement.space1 : treeElement.delimiter;
    const childrenPrefix = `${prefix}${depthDelimiter}${treeElement.space3}`;
    for (let i = 0; i < node.items.length; i++) {
      const isLastChild = i === node.items.length - 1;
      currentNodeName += printTree(node.items[i], childrenPrefix, isLastChild);
    }
  }

  return currentNodeName;
};

const data: TNode = {
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

const expectedOutput =
`└── 1
    ├── 2
    │   ├── 3
    │   └── 4
    └── 5
        └── 6
`;

printTree(data);
console.log(printTree(data) === expectedOutput);
