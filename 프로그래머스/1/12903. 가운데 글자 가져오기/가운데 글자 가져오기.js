function solution(s) {
    var answer = '';
    let arr = s.split('');
    let midNum = s.length/2;
    let oddEven = Math.floor(s.length/2) ;
    if(s.length % 2 === 0){
        answer=arr[midNum-1] +arr[midNum]
    }else{
        answer=arr[oddEven]  
    }
    return answer;
}