function solution(s) {
    const str = ['zero','one','two','three','four','five','six','seven','eight','nine']
    const num = [0,1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < str.length; i++) {
        while (s.indexOf(str[i]) !== -1) {
            s = s.replace(str[i], num[i]);
        }
    }
    var answer = Number(s);
    return answer;
}