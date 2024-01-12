function solution(babbling) {
    var answer = 0;
    let canBabbling = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        let currWord = babbling[i];
        let prev = null; // 각 단어마다 이전 발음 초기화
        let found = true;

        while (currWord !== '' && found) {
            found = false;

            for (let j = 0; j < canBabbling.length; j++) {
                let canWord = canBabbling[j];

                if (currWord.indexOf(canWord) === 0 && canWord !== prev) {
                    currWord = currWord.slice(canWord.length);
                    prev = canWord;
                    found = true;
                    break;
                }
            }
        }

        if (currWord === '') {
            answer++;
        }
    }
    return answer;
}