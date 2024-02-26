function solution(n) {
    var answer = 0;
    let nBinary = n.toString(2);
    let cnt1 = 0;
    for(let i = 0; i < nBinary.length; i ++){
        const ch = nBinary[i];
        if(ch === '1'){
            cnt1 ++;
        }
    }
    let loopCnt = 1;
    while(true){
        const cmp = n + loopCnt;
        const cmpBinary = cmp.toString(2);
        let cmpBinaryCnt = 0;
        for(let i = 0; i < cmpBinary.length; i ++){
        const ch = cmpBinary[i];
            if(ch === '1'){
                cmpBinaryCnt ++;
            }
        }
        loopCnt++;
        if(cnt1 === cmpBinaryCnt){
            answer = cmp
           break;
        }
    }
    return answer;
}