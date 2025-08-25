/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m)
    nums2.splice(n)
    let i = 0 // nums1 pointer
    let j = 0 // nums2 pointer
    while (i < nums1.length - 1 || j < nums2.length) {
        const num1 = nums1[i]
        const num2 = nums2[j]
        if (
            num1 >= num2
            || !Number.isInteger(num1)
        ) {
            nums1.splice(i, 0, num2)
            j++
        } else {
            i++
        }
    }
};