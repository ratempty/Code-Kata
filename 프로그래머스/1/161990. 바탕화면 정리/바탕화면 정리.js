function solution(wallpaper) {
    var answer = [];
    let xPosi = [];
    let yPosi = [];
    for(let x = 0 ; x < wallpaper.length ; x++){
        for(let y = 0 ; y < wallpaper[x].length ; y++){
            let char = '#';
            if(wallpaper[x][y] === char){
                xPosi.push(x);
                yPosi.push(y);
            }
        }
    }
    let minX = Math.min(...xPosi);
    let minY = Math.min(...yPosi);
    let maxX = Math.max(...xPosi) + 1;
    let maxY = Math.max(...yPosi) + 1;
    answer.push(minX,minY,maxX,maxY)
    return answer;
}