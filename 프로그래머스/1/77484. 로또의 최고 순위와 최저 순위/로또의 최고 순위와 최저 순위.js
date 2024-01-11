function solution(lottos, win_nums) {
    var answer = [];
    let correct = 0;
    let wrong = 0;
    for(let i= 0 ; i < lottos.length ; i++){
        if(win_nums.includes(lottos[i])){
            correct++;
        }else if(lottos[i] !== 0){
            wrong ++ ;
        }
    }
    let hasZero = 6 - correct - wrong ;
    let maxGrade = wrong + 1;
    let minGrade = wrong+hasZero+1;

    if(minGrade > 6){
        minGrade = 6;
    }
    if(maxGrade > 6){
        maxGrade = 6;
    }
    answer.push(maxGrade);
    answer.push(minGrade);
    return answer;
}