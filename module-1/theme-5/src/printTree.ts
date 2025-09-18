import { treeElement } from './consts';
import type { TNode } from './types';

/**
 * @param {TNode} node - Текущий узел.
 * @param {string} prefix - Префикс содержащий пробелы и разделители, передаем сверху для каждого ребенка.
 * @param {boolean} isLast - Последний ли элемент в узле.
 */
export function printTree(node: TNode, prefix: string = "", isLast: boolean = true) {
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
