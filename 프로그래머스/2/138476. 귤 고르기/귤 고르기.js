function solution(k, tangerine) {
    var answer = 0;
    let map = new Map();
    
    for(let i = 0; i < tangerine.length; i++) {
        let key = String(tangerine[i]); 
        if(map.has(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    let sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);
    let temp = 0;
    for(let i = 0 ; i < sortedEntries.length ; i++){
        temp += parseInt(sortedEntries[i][1]) ;
        answer = i+1;
        if(temp >= k){break;}
    }
    return answer;
}