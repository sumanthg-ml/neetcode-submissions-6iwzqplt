class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0, sell = 1;
        let profit = 0;

        while(sell < prices.length){
            if(prices[buy] > prices[sell]){
                buy = sell;
                sell++;
            }
            else{
                const newProfit = prices[sell]-prices[buy];
                profit = Math.max(newProfit, profit);
                sell++;
            }
        }
        return profit;
    }
}
