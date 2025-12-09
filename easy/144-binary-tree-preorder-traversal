function preorderTraverse(root: TreeNode | null, res: number[]): number[] {
	res.push(root!.val);
	const withLeft = root?.left ? preorderTraverse(root.left, res) : res;
	const withRight = root?.right
		? preorderTraverse(root.right, withLeft)
		: withLeft;
	return withRight;
}

function preorderTraversal(root: TreeNode | null): number[] {
	if (!root?.val && root?.val !== 0) {
		return [];
	}

	return preorderTraverse(root, []);
}
