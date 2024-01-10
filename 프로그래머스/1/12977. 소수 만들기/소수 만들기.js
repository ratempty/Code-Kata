function solution(nums) {
    var answer = 0;
    let numArr = []
    for(let i=0 ; i < nums.length - 2; i++){
        for(let j= i+1; j < nums.length - 1 ; j++){
            for(let k = j+1; k < nums.length  ; k++){
                let currNum = nums[i] + nums[j] + nums[k];
                currNum % 2 !== 0 ? numArr.push(currNum) : null;
            }
        }
    }
    for (let i = 0; i < numArr.length; i++) {
        let isPrime = true;
        for (let j = 3; j < Math.sqrt(numArr[i]) + 1; j++) {
            if (numArr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        isPrime ? answer++ : null;
    }
    return answer;
}