function solution(sizes) {
    var answer = 0;
    let maxw = 0 ;
    let maxh = 0 ;
    for(let i=0; i<sizes.length ; i++){
        let currMin = Math.min(...sizes[i])
        maxw = Math.max(...sizes[i] , maxw);
        maxh = Math.max(currMin , maxh);
    }
    answer = maxw * maxh ;
    return  answer;
}