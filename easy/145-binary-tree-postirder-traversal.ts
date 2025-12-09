function postorderTraverse(root: TreeNode | null, res: number[]): number[] {
	res.unshift(root!.val);
	let withRight = root?.right ? postorderTraverse(root.right, res) : res;
	let withLeft = root?.left
		? postorderTraverse(root.left, withRight)
		: withRight;
	return withLeft;
}

function postorderTraversal(root: TreeNode | null): number[] {
	// if there is not root, short circuit
	if (!root?.val && root?.val !== 0) {
		return [];
	}
	return postorderTraverse(root, []);
}
