function solution(t, p) {
    var answer = 0;
    let splitArr=[];
    for(let i = 0 ; i < t.length ; i++){
        let target = t.substr(i,p.length)
        target.length == p.length ? splitArr.push(target) : null
    }
    for(let i=0; i < splitArr.length ; i++){
        Number(splitArr[i]) <= Number(p) ? answer++ : null
    }
    return answer;
}