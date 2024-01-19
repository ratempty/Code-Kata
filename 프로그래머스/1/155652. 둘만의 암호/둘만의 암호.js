function solution(s, skip, index) {
    var answer = '';
    let rule = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let copyRule = rule.filter(char => !skip.includes(char));

    for (let i = 0; i < s.length; i++) {
        let currIdx = copyRule.indexOf(s[i]);
        let targetIdx = (currIdx + index) % copyRule.length;
        answer += copyRule[targetIdx];
    }

    return answer;
}