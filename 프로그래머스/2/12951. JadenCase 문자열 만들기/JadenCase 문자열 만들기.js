function solution(s) {
    let str = s.toLowerCase().split(' ');
    let answer = '';
    for(let i = 0 ; i < str.length ; i++){
        if(str[i].charAt(0) === ' '){
            answer += str[i].charAt(1).toUpperCase() + str[i].slice(2).toLowerCase() + " ";
        }else{
            answer += str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase() + " ";
        }
    }
    return answer.slice(0,-1);
}