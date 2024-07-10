def solution(a, b):
    mini = min(a,b)
    maxi = max(a,b)
    answer =  sum(range(mini,maxi+1))
    return answer