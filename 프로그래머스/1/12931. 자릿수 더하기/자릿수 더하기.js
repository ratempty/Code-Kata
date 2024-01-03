function solution(n)
{
    let num = n.toString()
    num = num.split('')
    let sum = 0
    for(let i = 0; i < num.length ; i++){
        sum += Number(num[i])
    }
    var answer = sum
    return answer;
}