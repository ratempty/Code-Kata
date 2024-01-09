function solution(a, b, n) {
    var answer = 0;
    let empty = n;
    while( empty >= a ){
        answer += Math.floor(empty / a) * b;
        empty = (empty % a) + Math.floor(empty / a) * b;
    }
    return answer;
}