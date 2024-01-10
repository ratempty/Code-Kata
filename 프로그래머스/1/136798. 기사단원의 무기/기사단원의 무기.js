function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1 ; i <= number ; i++){
        let currCnt = divideNum(i)
        currCnt <= limit ?  answer += currCnt : answer += power ;
    }
    function divideNum(num){
        let cnt = 0;
         for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                cnt += (i * i === num) ? 1 : 2;
            }
        }
        return cnt;
    }
    return answer;
}