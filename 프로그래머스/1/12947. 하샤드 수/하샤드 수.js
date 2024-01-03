function solution(x) {
    var answer = true;
    let xString = x.toString().split('')
    let sumX = 0;
    for(let i=0;i<xString.length;i++){
        sumX += Number(xString[i])
    }
    if(x % sumX !== 0){
        answer = false
    }else{
        answer = true
    }
    return answer;
}