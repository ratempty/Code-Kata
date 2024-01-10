function solution(answers) {
    var answer = [];
    let answerCnt = {
        1: 0 , 2: 0 , 3:0
    };
    let arr1 = [1,2,3,4,5];
    let arr2 = [2,1,2,3,2,4,2,5];
    let arr3 = [3,3,1,1,2,2,4,4,5,5];
    for(let i = 0 ; i < answers.length ; i++){
        arr1[i % arr1.length] === answers[i] ? answerCnt[1] ++ : null;
        arr2[i % arr2.length] === answers[i] ? answerCnt[2] ++ : null;
        arr3[i % arr3.length] === answers[i] ? answerCnt[3] ++ : null;
    }
    const maxCount = Math.max(...Object.values(answerCnt));
    for (let key in answerCnt) {
        if (answerCnt[key] === maxCount) {
            answer.push(parseInt(key));
        }
    }
    return answer;
}