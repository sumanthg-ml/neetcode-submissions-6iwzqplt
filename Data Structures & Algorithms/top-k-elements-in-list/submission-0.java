class Solution {
    public int[] topKFrequent(int[] nums, int k) {
       Map<Integer, Integer> countMap = new HashMap<>();
       for(int n: nums){
        countMap.put(n, countMap.getOrDefault(n, 0)+1);
       } 

       List<Integer>[] bucket = new List[nums.length+1];
       for(int key: countMap.keySet()){
        int frequency = countMap.get(key);
        if(bucket[frequency] == null){
            bucket[frequency] = new ArrayList<>();
        }
        bucket[frequency].add(key);
       }

       int[] result = new int[k];
       int counter = 0;
       for(int pos = bucket.length-1; pos >=0; pos--){
        if(bucket[pos] != null){
            for(int i: bucket[pos]){
                result[counter++] = i;
                if(counter == k) { return result; }
            }
        }
       }
       return result;
    }
}
