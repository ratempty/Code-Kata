function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log(min,max,arr)
    answer = min.toString()+' '+max.toString()
    return answer;
}