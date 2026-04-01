class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a, b) => a - b);
        while(stones.length>1){
            let stones1 = stones.pop();
            let stones2 = stones.pop();

            if(stones1 !== stones2){
                let diff = stones1 - stones2;
                let left=0, right=stones.length;
                while(left<right){
                    let mid = Math.floor((left+right)/2);
                    if(stones[mid] < diff) left = mid+1;
                    else right = mid;
                }
                stones.splice(left, 0, diff);
            }
        }
    return stones.length === 1 ? stones[0] : 0;
    }
}
