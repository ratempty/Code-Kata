function solution(n) {
    var answer = 0;
    let arr  = [0,1];
    for(let i = 2 ; i <= n ; i++){
        let curr = arr[i-1] + arr[i-2];
        arr.push(curr % 1234567)
    }
    answer = arr[n] 
    console.log(arr)
    return answer;
}

// function solution(n) {
//     var answer = 0;
//     let arr  = [0,1];
//     for(let i = 2 ; i <= n ; i++){
//         let curr = arr[i-1] + arr[i-2];
//         arr.push(curr)
//     }
//     answer = arr[n] % 1234567
//     console.log(arr)
//     return answer;
// }