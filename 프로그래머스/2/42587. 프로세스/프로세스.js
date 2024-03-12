function solution(priorities, location) {
    var answer = 0;
    let queue = priorities.map((priority, index) => ({ priority, index }));

    while (queue.length > 0) {
        let curr = queue.shift();
        let max = Math.max(...queue.map(item => item.priority));

        if (curr.priority < max) {
            queue.push(curr);
        } else {
            answer++;
            if (curr.index === location) {
                break;
            }
        }
    }

    return answer;
}