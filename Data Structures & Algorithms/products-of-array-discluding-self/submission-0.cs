public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] results = new int[nums.Length];
        int num = 1;
        
        for(int i=0; i<nums.Length;i++){
            results[i] = num;
            num *= nums[i];    
        }
        num = 1;
        for(int i=nums.Length-1; i>=0; i--){
            results[i] *= num;
            num *= nums[i];
        }
        return results;
    }
}
