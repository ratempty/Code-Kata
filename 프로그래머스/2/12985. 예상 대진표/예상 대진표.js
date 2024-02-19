function solution(n,a,b){
    var answer = 0;
    let x = a;
    let y = b;
    let cnt = 0;
    while(x !== y){
        x = Math.ceil(x/2);
        y = Math.ceil(y/2);
        cnt++;
    }
    return cnt;
}
