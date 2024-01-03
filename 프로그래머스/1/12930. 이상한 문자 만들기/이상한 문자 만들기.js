function solution(s) {
    let arr1 = s.split(' ');
    let arr2 = [];
    arr1.forEach((item)=>{
        arr2.push(item.split(''))
    })
    for(let i = 0; i<arr2.length; i++){
        arr2[i] = arr2[i].map((item, index) => (index % 2 === 1) ? item.toLowerCase() : item.toUpperCase()) ;
        arr2[i] = arr2[i].join('');
    }
    return arr2.join(' ');
}