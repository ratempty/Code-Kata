function solution(s) {
    var answer = 0;
    let firstState = true ;
    let firstCnt = 0;
    let elseCnt = 0;
    let firstChar = '';
    for(let i = 0 ; i < s.length ; i++){
        if(firstState){
            firstChar = s[i]
        }
        if(firstChar === s[i]){
            firstCnt++;
            firstState = false;
        }else{
            elseCnt++;
            firstState = false;
        }
        if(firstCnt === elseCnt){
            answer++;
            firstState = true;
            firstCnt = 0;
            elseCnt = 0;
        }
        if(i === s.length-1 && firstCnt !== elseCnt){
            answer++
        }
    }
    return answer;
}