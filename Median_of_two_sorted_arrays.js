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
}
c;
// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.00000
console.log(findMedianSortedArrays([], [1])); // Output: 1.00000
console.log(findMedianSortedArrays([2], [])); // Output: 2.00000

// The above implementation has a time complexity of O(m + n) due to the merging process.
// To achieve O(log (m+n)), we can use a binary search approach. Here's the optimized version:
function findMedianSortedArraysOptimized(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the smaller array
  }

  const m = nums1.length;
  const n = nums2.length;
  let imin = 0,
    imax = m,
    halfLen = Math.floor((m + n + 1) / 2);

  while (imin <= imax) {
    const i = Math.floor((imin + imax) / 2);
    const j = halfLen - i;

    if (i < m && nums2[j - 1] > nums1[i]) {
      imin = i + 1; // i is too small
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      imax = i - 1; // i is too big
    } else {
      // i is perfect
      let maxLeft;
      if (i === 0) {
        maxLeft = nums2[j - 1];
      } else if (j === 0) {
        maxLeft = nums1[i - 1];
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return maxLeft; // Odd length
      }

      let minRight;
      if (i === m) {
        minRight = nums2[j];
      } else if (j === n) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }

      return (maxLeft + minRight) / 2; // Even length
    }
  }

  throw new Error("Input arrays are not sorted or valid");
}
// Example usage of the optimized version:
console.log(findMedianSortedArraysOptimized([1, 3], [2])); // Output: 2.00000

// method 3
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [...nums1, ...nums2];
  merged.sort((a, b) => a - b); // Sorting in ascending order
  let n = merged.length;
  if (n % 2 === 1) {
    // If the length is odd, return the middle element
    return merged[Math.floor(n / 2)];
  } else {
    // If the length is even, return the average of the two middle elements
    let mid1 = merged[n / 2 - 1];
    let mid2 = merged[n / 2];
    return (mid1 + mid2) / 2;
  }
};
// The time complexity of your code is O((m + n) log(m + n)), where m and n are the lengths of nums1 and nums2.

// Merging the arrays: O(m + n)
// Sorting the merged array: O((m + n) log(m + n))
// Finding the median: O(1)
// So, the overall complexity is dominated by the sorting step: O((m + n) log(m + n)).
