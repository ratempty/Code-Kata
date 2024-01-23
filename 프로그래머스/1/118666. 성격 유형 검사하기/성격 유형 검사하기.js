function solution(survey, choices) {
    var answer = '';
    let myMap = new Map();
    let arr = ['R','T','C','F','J','M','A','N'];
    for(let i = 0 ; i < survey.length ; i++){
        let t1 = survey[i][0];
        let t2 = survey[i][1];
        if(choices[i] > 4){ // t2 값 세팅
            let currVal = myMap.get(t2) + choices[i] - 4;
            myMap.has(t2) ? myMap.set(t2, currVal) : myMap.set(t2 , choices[i] - 4)
        }else if(choices[i] < 4){ // t1 값 세팅
            let abs = 4 - choices[i];
            let currVal = myMap.get(t1) + abs;
            myMap.has(t1) ? myMap.set(t1 , currVal) : myMap.set(t1 , abs)
        }
    }
    for(let char of arr){
        myMap.has(char)? '' : myMap.set(char,0)
    }
    myMap.get('R') >= myMap.get('T') ? answer += 'R' : answer += 'T';
    myMap.get('C') >= myMap.get('F') ? answer += 'C' : answer += 'F';
    myMap.get('J') >= myMap.get('M') ? answer += 'J' : answer += 'M';
    myMap.get('A') >= myMap.get('N') ? answer += 'A' : answer += 'N';
    return answer;
}