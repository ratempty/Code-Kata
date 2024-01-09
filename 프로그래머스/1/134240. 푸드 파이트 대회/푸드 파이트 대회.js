function solution(food) {
    var answer = '';
    let answera = '';
    for(let i = 1 ; i < food.length ; i++){
        let curr = food[i] / 2;
        if(food[i] % 2 === 0){
            let cnt = 1;
            while(curr >= cnt){
                answera += i;
                cnt ++ ;
            }
        }else if(food[i] !== 1 && food[i] % 2 === 1){
            let cnt = 1;
            while(curr > cnt){
                answera += i;
                cnt ++ ;
            }
        }
    }
    answer = answera + '0' + answera.split("").reverse().join("");
    return answer;
}