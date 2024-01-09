function solution(k, score) {
    var answer = [];
    let fame = [];
    let worst = [];
    let day = score.length;
    for(let i = 1 ; i <= day ; i++){
        if(i <= k){
            fame.push(score[i-1]);
            fame.sort((a,b)=>b-a);
            worst.push(Math.min(...fame));
        }else{
            fame.push(score[i - 1]);
            fame.sort((a,b)=>b-a);
            fame = fame.slice(0, k);
            worst.push(Math.min(...fame));
        }
    }
    return worst;
}