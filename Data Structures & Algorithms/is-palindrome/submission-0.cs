public class Solution {
    public bool IsPalindrome(string s) {
        string tempStr = "";
        foreach(char c in s){
            if(char.IsLetterOrDigit(c)){
                tempStr += char.ToLower(c);
            }
        }
        return tempStr == new string(tempStr.Reverse().ToArray());
    }
}
