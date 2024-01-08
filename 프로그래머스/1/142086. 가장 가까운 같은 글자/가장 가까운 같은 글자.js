function solution(s) {
    let answer = [];
    let idxObj = {};
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in idxObj) || idxObj[s[i]] === -1) {
            idxObj[s[i]] = i;
            answer.push(-1);
        } else {
            answer.push(i - idxObj[s[i]]);
            idxObj[s[i]] = i;
        }
    }
    return answer;
}