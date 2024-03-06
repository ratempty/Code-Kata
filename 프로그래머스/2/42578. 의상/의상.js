function solution(clothes) {
    var answer = 1;
    let m = new Map();
    clothes.forEach((item)=>{
        if(m.has(item[1])){
            m.set(item[1],m.get(item[1])+1)
        }else{
            m.set(item[1],1)
        }
    })
    for(let [key,value] of m){
        answer *= value+1
    }
    answer -=1
    return answer;
}