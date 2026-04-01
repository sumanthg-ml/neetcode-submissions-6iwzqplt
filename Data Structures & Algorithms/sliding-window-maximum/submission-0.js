class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(nums.length === 0 || k === 0){
            return [];
        }
        const result = [];
        for(let i = 0; i<=nums.length-k; i++){
            const currentWindow = nums.slice(i, i+k);
            result.push(Math.max(...currentWindow));
        }
        return result;
    }
}
