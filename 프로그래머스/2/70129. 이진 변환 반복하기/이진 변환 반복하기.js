function solution(s) {
    var answer = [0, 0];

    while (s !== '1') {
        let zeroCount = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') {
                zeroCount++;
            }
        }
        answer[1] += zeroCount;
        s = (s.length - zeroCount).toString(2);
        answer[0]++;
    }

    return answer;
}