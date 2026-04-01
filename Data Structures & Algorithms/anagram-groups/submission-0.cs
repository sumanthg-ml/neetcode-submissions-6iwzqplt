public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> map = new Dictionary<string, List<string>>();
        foreach(string word in strs){
            char[] arr = word.ToCharArray();
            Array.Sort(arr);
            string key = new string(arr);

            if(!map.ContainsKey(key)){
                map[key] = new List<string>();
            }
            map[key].Add(word);
        }
        return map.Values.Select(group => group.ToList()).ToList();
    }
}
