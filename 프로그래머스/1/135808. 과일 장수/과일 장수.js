function solution(k, m, score) {
    var answer = 0;
    let boxCount = Math.floor(score.length / m);
    let sortedScore = score.sort((a, b) => b - a);

    for (let box = 0; box < boxCount; box++) {
        let startIdx = box * m;
        let endIdx = (box + 1) * m;
        let currBox = sortedScore.slice(startIdx, endIdx);
        let minimum = Math.min(...currBox);
        let maxScore = minimum * m;
        answer += maxScore;
    }

    return answer;
}