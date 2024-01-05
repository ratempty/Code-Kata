function solution(s) {
    var answer = '';
    let arr = s.split('');
    let low = [];
    let up = [];
    for( let value of arr ){
        value === value.toLowerCase() ? low.push(value) : up.push(value)
    }
    answer = low.sort((a, b) => b.localeCompare(a)).join('') + up.sort((a, b) => b.localeCompare(a)).join('');

    return answer;
}