class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        checkVals = set()
        for num in nums:
            if num in checkVals:
                return True
            checkVals.add(num)
        return False            
        