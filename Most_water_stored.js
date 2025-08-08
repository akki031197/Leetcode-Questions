// Container With Most Water
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;

    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
// Example usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2
console.log(maxArea([1, 2, 4, 3])); // Output: 4
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7, 9])); // Output: 63
console.log(maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 20
console.log(maxArea([9, 8, 7, 6, 5, 4, 3, 2, 1])); // Output: 20
console.log(maxArea([1, 3, 2, 5, 4])); // Output: 8
console.log(maxArea([1, 2, 3, 4, 5])); // Output: 6
console.log(maxArea([5, 4, 3, 2, 1])); // Output: 6

// Brute Force Approach
// approach 2
function maxAreaBruteForce(height) {
  let maxArea = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const width = j - i;
      const minHeight = Math.min(height[i], height[j]);
      const area = width * minHeight;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}     