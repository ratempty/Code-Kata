function solution(n) {
    var answer = 0;
    let numArr = []
    for(let i = 0; i<=n; i++){
        if( n % i === 0 ){
            numArr.push(i)
        }
    }
    for(let i =0 ; i< numArr.length;i++){
        answer += Number(numArr[i])
    }
    return answer;

}