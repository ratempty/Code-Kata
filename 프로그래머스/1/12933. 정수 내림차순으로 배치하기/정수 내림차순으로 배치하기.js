function solution(n) {
    let arr = n.toString().split('').sort((a,b)=> b-a)
    var answer = Number(arr.join(''))
    return answer;
}