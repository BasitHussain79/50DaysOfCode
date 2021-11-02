const merge = (nums1, m, nums2, n) => {
    let a = m - 1;
    let b = n - 1;
    for(let i = m + n - 1; i >= 0; i--) {
        if(b < 0) {
            break;
        }
        if(nums1[a] > nums2[b]) {
            nums1[i] = nums1[a];
            a--;
        } else {
            nums1[i] = nums2[b];
            b--;
        }
    }
    return nums1;
}

const a = merge([1,2,3,0,0,0], 3, [2,5,6], 3);
console.log(a);
