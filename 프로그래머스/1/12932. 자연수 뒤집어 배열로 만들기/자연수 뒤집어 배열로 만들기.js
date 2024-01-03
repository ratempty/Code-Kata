function solution(n) {
    let nt = n.toString().split('').reverse()
    var answer = [];
    for(let i=0; i<nt.length; i++){
        let num = parseInt(nt[i])
        answer.push(num)
    }
    return answer;
}