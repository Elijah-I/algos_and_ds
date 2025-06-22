/**
 * Название: Root Equals Sum of Children
 * Условие: Дано бинарное дерево, состоящее точно из 3 узлов: корня, левого и правого потомка.
 *         Нужно проверить, равно ли значение корня сумме значений его детей.
 * Пример:
 *   Ввод: root = 10, left = 4, right = 6
 *   Вывод: true (потому что 4 + 6 = 10)
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const checkTree = (root: TreeNode | null): boolean => root.val === root.left.val + root.right.val;

const left = new TreeNode(4);
const right = new TreeNode(6);
const root = new TreeNode(10, left, right);

const isEqual = checkTree(root);

console.log(isEqual);
