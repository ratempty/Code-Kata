function solution(array, commands) {
    var answer = [];
    let test = []
    for(let i=0; i<commands.length; i++){
        test.push(array.slice(commands[i][0]-1,commands[i][1]))
    }
    for(let i=0; i<test.length; i++){
        test[i].sort(function(a,b){return a-b;})
    }
    for(let i=0; i<commands.length; i++){
        answer.push(test[i].slice(commands[i][2]-1,commands[i][2]))
    }
    return answer.flat();
}