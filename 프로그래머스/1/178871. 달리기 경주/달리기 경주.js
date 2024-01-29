function solution(players, callings) {
    let obj = {};
    for(let i = 0 ; i < players.length; i++){
        obj[players[i]] = i;
    }
    for(let i = 0 ; i < callings.length ; i++){
        let currCall = callings[i];
        let idx = obj[currCall];
        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
        obj[players[idx]] = idx;
        obj[players[idx - 1]] = idx-1;
    }
    return players;
}