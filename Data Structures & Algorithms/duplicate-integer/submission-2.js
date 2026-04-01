class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dup = new Set();
        for(const num of nums){
            if(dup.has(num)){
                return true;
            }
            dup.add(num);
        }
        return false;
    }
}
