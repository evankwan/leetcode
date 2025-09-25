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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const isCurSame = p?.val == q?.val;

  let isLeftSame = true;
  if (p?.left || q?.left) {
    isLeftSame = isSameTree(p?.left ?? null, q?.left ?? null);
  }

  let isRightSame = true;
  if (p?.right || q?.right) {
    isRightSame = isSameTree(p?.right ?? null, q?.right ?? null);
  }
  return isCurSame && isLeftSame && isRightSame;
}
