function solution(numbers) {
    let sum = 0;
    numbers.forEach((item)=>{
        sum += item
    })
    var answer = sum/numbers.length;
    return answer;
}