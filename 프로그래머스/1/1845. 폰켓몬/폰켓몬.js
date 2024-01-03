function solution(nums) {
    var answer = 0;
    let arr = [];
    const cho = (nums.length/2);
    for(let i=0;i<nums.length;i++){
        if(!arr.includes(nums[i])){
            arr.push(nums[i])
        }
    }
    if(cho <= arr.length){
        answer = cho;
    }else if(cho > arr.length){
        answer = arr.length
    }

    return answer;
}