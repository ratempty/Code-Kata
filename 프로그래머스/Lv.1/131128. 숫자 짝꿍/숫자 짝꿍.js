function solution(X, Y) {
    const long = X.length > Y.length ? X : Y;
    const short = X.length <= Y.length ? X : Y;
    const answer = [];

    const countMap = new Map();
    for (const char of short) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }

    for (const char of long) {
        if (countMap.has(char) && countMap.get(char) > 0) {
            answer.push(char);
            countMap.set(char, countMap.get(char) - 1);
        }
    }

    answer.sort((a, b) => b.localeCompare(a)); 

    const result = answer.length === 0 ? "-1" : answer[0] === "0" ? "0" : answer.join('');

    return result;
}