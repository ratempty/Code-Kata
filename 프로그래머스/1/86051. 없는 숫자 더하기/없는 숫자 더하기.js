function solution(numbers) {
    let a = 0;
    for(let i = 1; i<10; i++){
        if(!numbers.includes(i)){
            a = a+i
        }
    }
    var answer = a;
    return answer;
}