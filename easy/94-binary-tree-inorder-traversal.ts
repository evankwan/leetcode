function traverse(root: TreeNode | null, list: number[]) {
	if (!root) {
		return list;
	}
	if (root?.left) {
		traverse(root?.left, list);
	}
	list.push(root?.val);
	if (root?.right) {
		traverse(root?.right, list);
	}
	return list;
}

function inorderTraversal(root: TreeNode | null): number[] {
	return traverse(root, []);
}
