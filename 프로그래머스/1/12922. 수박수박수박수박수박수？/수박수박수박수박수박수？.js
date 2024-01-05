function solution(n) {
    let text1 = '수';
    let text2 = '박';
    var answer = '';
    for(let i=0; i<n; i++){
        if(i % 2 == 0){
            answer += text1
        }else{
            answer += text2
        }
    }
    return answer;
}