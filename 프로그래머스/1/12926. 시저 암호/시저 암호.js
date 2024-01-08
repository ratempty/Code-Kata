function solution(s, n) {
    var answer = '';
    for(let i= 0 ; i<s.length; i++){
        if(s[i] !== ' '){
            let uni = s[i].charCodeAt(0);
            let newUni = uni + n;
            let isUpperCase = s[i] === s[i].toUpperCase();
            if ((isUpperCase && newUni > 90) || (!isUpperCase && newUni > 122)) {
                newUni -= 26;
            }

            let code = String.fromCharCode(newUni);
            answer += code;
        }else{
            answer += ' '
        }
    }
    return answer;
}