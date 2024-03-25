function solution(n, k) {
    var answer = 0;
    let transNum = n.toString(k);
    transNum = transNum.split('0').map(e => Number(e));

    for(let i = 0; i < transNum.length; i++) {
        let curr = transNum[i];
        if(curr > 1 && isPrime(curr)){
            answer++;
        }
    }
        
    return answer;
}

function isPrime(num) {
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i == 0) return false;
    }

    return true;
}