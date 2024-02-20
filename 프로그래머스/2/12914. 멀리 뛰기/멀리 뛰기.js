function solution(n) {
    var answer;
    let arr = [1,2];
    for(let i = 2; i < n ;  i++){
        let curr = arr[i-1] + arr[i-2];
        arr.push(curr % 1234567);
    }
    answer = arr[n-1]
    return answer;
}