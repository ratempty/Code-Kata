function solution(phone_number) {
    var answer = '';
    let length1 = phone_number.length -4;
    answer = phone_number.slice(-4).padStart(length1+4,'*')
    return answer;
}