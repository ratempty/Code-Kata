def solution(n):
    answer = 0
    for curr in str(n):
        answer += int(curr)
    return answer