function solution(want, number, discount) {
    let answer = 0;
    let map = new Map();
    for(let i = 0 ; i < want.length; i++){
        map.set(want[i],number[i])
    }
    
    for(let i =0 ; i < discount.length; i++){
        const m2 = new Map(map)
        for(let j = i; j < i+10; j++){
            const item = discount[j];
            if(m2.has(item)){
                const count = m2.get(item);
                if(count <= 1){
                    m2.delete(item)
                }else{
                    m2.set(item,count-1)
                }
            }
        }
        if(m2.size === 0){
            answer ++;
        }
    }
    return answer;
}