function solution(progresses, speeds) {
    var answer = [];
    let valuesArray = [];
    let temp = 0;
    let idx = 0 ;
    for(let i=0 ; i < speeds.length ; i++){
        let temp = (100 - progresses[i]) / speeds[i]
        valuesArray.push(Math.ceil(temp))
    }
     for (let i = 0; i < valuesArray.length; i++) {
        if (i === 0) {
            temp = valuesArray[i];
            idx = i;
        } else if (temp >= valuesArray[i]) {
            continue;
        } else {
            answer.push(i - idx);
            temp = valuesArray[i];
            idx = i;
        }
    }
    
    if (temp > 0) {
        answer.push(valuesArray.length - idx);
    }
    
    return answer;
}
