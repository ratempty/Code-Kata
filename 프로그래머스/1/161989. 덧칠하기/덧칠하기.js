function solution(n, m, section) {
    var answer = 1;
    let currPaint = section[0] + m - 1;
    for(let i = 0 ; i < section.length ; i++){
        if(section[i] > currPaint){
            answer++ ;
            currPaint = section[i] + m - 1;
        }
    }
    return answer;
}