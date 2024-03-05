function solution(n, left, right) {
    var answer = [];
    for(let i = left; i <= right ; i++){
        let j = Math.floor(i / n) - i % n
        j = j < 0 ? 0 : j
        answer.push(i % n + 1 + j)
    }
    return answer;
}
// 123 223 333
// 1234 2234 3334 4444
