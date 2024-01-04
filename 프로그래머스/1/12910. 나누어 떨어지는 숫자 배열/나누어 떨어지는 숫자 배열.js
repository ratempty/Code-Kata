function solution(arr, divisor) {
    var answer = [];
    for(let i=0; i < arr.length; i++){
        arr[i] % divisor === 0 ? answer.push(arr[i]) : null
    }
    return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b);
}