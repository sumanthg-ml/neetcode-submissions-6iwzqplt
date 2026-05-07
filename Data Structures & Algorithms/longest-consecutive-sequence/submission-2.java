class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0){
            return 0;
        }
        Arrays.sort(nums);
        int res = 0, currentNum = nums[0], currentStreak = 0, i = 0;
        while (i < nums.length){
            if(currentNum!=nums[i]){
                currentNum = nums[i];
                currentStreak = 0;
            }
            while (i< nums.length && nums[i] == currentNum){
                i++;
            }
            currentStreak++;
            currentNum++;
            res = Math.max(res, currentStreak);
        }
        return res;
    }
}
