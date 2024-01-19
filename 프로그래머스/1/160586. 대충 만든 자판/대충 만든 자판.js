function solution(keymap, targets) {
    var answer = [];
    let myMap = new Map();

    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            
            let currChar = keymap[i][j];
            let currIdx = j;

            if (!myMap.has(currChar) || currIdx < myMap.get(currChar)) {
                myMap.set(currChar, currIdx + 1);
            }
        }
    }
    
    for(let i = 0; i < targets.length; i++) {
        let clickCnt = 0;
        for(let j = 0; j < targets[i].length; j++) {
            
            let currChar = targets[i][j];
            let currIdx = j;
            
            if(myMap.has(currChar)){
                clickCnt += myMap.get(currChar);
            } else {
                answer.push(-1);
                break;
            }
        }
        
        if(answer.length === i) {
            answer.push(clickCnt);
        }
    }

    return answer;
}