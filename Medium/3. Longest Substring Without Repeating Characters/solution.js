/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let dictionary = {};
    let left = 0;
    let longest = 0;
    for (let right = 0; right < s.length; right++) {
        let char = s[right]
        while (dictionary[char]) {
            dictionary[s[left]] = false
            left++
        }
        dictionary[char] = true
        longest = Math.max(longest, right - left + 1);
    }
    return longest
};

