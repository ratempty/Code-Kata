function solution(n, lost, reserve) {
    var answer ;
    let students = new Array(n).fill(1);
    for(let i = 0 ; i < reserve.length ; i++){
        let idx = reserve[i];
        students[idx-1]++;
    }
    for(let i = 0 ; i < lost.length ; i++){
        let idx = lost[i];
        students[idx-1]--;
    }
    for (let i = 0; i < students.length; i++) {
        if (students[i] === 0) {
            if (i > 0 && students[i - 1] === 2) {
                students[i]++;
                students[i - 1]--;
            }
            else if (i < n - 1 && students[i + 1] === 2) {
                students[i]++;
                students[i + 1]--;
            }
        }
    }
    answer = students.filter((item)=>{
        return item !== 0
    })
    return answer.length;
}