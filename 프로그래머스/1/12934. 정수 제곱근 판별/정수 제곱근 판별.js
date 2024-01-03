function solution(n) {
    let a = Math.sqrt(n)
    let b;
    if(Number.isInteger(a)){
        b = (a+1)*(a+1)
    }else{
        b= -1
    }
    var answer = b;
    return answer;
}