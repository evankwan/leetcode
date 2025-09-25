/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  function isBranchSymmetric(
    left: TreeNode | null,
    right: TreeNode | null,
  ): boolean {
    if (!left && !right) return true;

    if (left?.val !== right?.val) return false;

    return (
      isBranchSymmetric(left?.left ?? null, right?.right ?? null) &&
      isBranchSymmetric(left?.right ?? null, right?.left ?? null)
    );
  }
  return isBranchSymmetric(root?.left ?? null, root?.right ?? null);
}
