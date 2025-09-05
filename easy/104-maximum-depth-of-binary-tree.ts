class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function traverse(root: TreeNode | null, depth: number): number {
    // look at right and left
    if (!root) {
        return depth
    }

    // calc new depth
    const newDepth = depth + 1;

    // store left and right
    const right = root?.right
    const left = root?.left

    // call traverse with right and left and the current depth
    let rightDepth = newDepth,
        leftDepth = newDepth;
    
    // if right and left exist, traverse those nodes to calc depth
    if (right) {
        rightDepth = traverse(right, depth + 1)  
    }
    if (left) {
        leftDepth = traverse(left, depth + 1)  
    }

    // return the new depth
    return leftDepth > rightDepth ? leftDepth : rightDepth;
}

function maxDepth(root: TreeNode | null): number {
    return traverse(root, 0)
};