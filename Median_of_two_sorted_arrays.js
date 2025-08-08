// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
function findMedianSortedArrays(nums1, nums2) {
  const merged = [];
  let i = 0,
    j = 0;

  // Merge the two sorted arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // If there are remaining elements in nums1
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  // If there are remaining elements in nums2
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  const mid = Math.floor(merged.length / 2);

  // If the merged array length is odd
  if (merged.length % 2 !== 0) {
    return merged[mid];
  } else {
    // If the merged array length is even
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}c
// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.00000
console.log(findMedianSortedArrays([], [1])); // Output: 1.00000
console.log(findMedianSortedArrays([2], [])); // Output: 2.00000